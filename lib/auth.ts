import type { NextAuthOptions } from "next-auth";
import type { Adapter, AdapterAccount } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";

/** Email allowed to become admin on first GitHub sign-in (matches prisma/seed.ts). */
const ADMIN_EMAIL = (
  process.env.ADMIN_EMAIL || "osamasadekadam321@gmail.com"
).toLowerCase();

const baseAdapter = PrismaAdapter(prisma) as Adapter;

// Drop provider fields that are not columns of the Account model
// (e.g. refresh_token_expires_in) so linking the account never fails.
const adapter: Adapter = {
  ...baseAdapter,
  linkAccount: async (account: AdapterAccount) => {
    const { refresh_token_expires_in, ...rest } = account as Record<string, unknown>;
    void refresh_token_expires_in;
    try {
      return await baseAdapter.linkAccount!(rest as AdapterAccount);
    } catch (e) {
      // The callback can be requested twice (dev double-request / retry).
      // If the account is already linked (P2002), that is fine.
      if ((e as { code?: string })?.code === "P2002") return undefined;
      throw e;
    }
  },
};

export const authOptions: NextAuthOptions = {
  adapter,
  // Off by default: debug logs print OAuth tokens. Enable only when needed
  // with NEXTAUTH_DEBUG=true in .env.local.
  debug: process.env.NEXTAUTH_DEBUG === "true",
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
      // The admin row is pre-created by the seed (no linked Account yet), so the
      // first GitHub sign-in must be allowed to link to it. Safe because access
      // is still gated by the isAdmin check below.
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: { signIn: "/admin/login", error: "/admin/login" },
  callbacks: {
    async signIn({ user }) {
      // NOTE: on first sign-in `user` comes from the GitHub profile, so it has
      // no isAdmin flag. Always check the database by email instead.
      const email = user.email?.toLowerCase();
      if (!email) return false;

      const dbUser = await prisma.user.findUnique({ where: { email } });
      if (dbUser?.isAdmin) return true;

      if (email === ADMIN_EMAIL) {
        // Self-heal: promote the configured admin email.
        await prisma.user.upsert({
          where: { email },
          update: { isAdmin: true },
          create: { email, name: user.name ?? null, image: user.image ?? null, isAdmin: true },
        });
        return true;
      }
      return false; // -> /admin/login?error=AccessDenied
    },
    async jwt({ token, user }) {
      if (user?.email || token.email) {
        const email = (user?.email ?? token.email) as string;
        const dbUser = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        token.id = dbUser?.id ?? token.sub;
        token.isAdmin = dbUser?.isAdmin ?? false;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) ?? (token.sub as string);
        session.user.isAdmin = Boolean(token.isAdmin);
      }
      return session;
    },
  },
};