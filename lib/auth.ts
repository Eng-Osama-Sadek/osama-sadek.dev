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
  linkAccount: (account: AdapterAccount) => {
    const { refresh_token_expires_in, ...rest } = account as Record<string, unknown>;
    void refresh_token_expires_in;
    return baseAdapter.linkAccount!(rest as AdapterAccount);
  },
};

export const authOptions: NextAuthOptions = {
  adapter,
  // Prints the real cause of errors (e.g. error=Callback) in the terminal
  debug: process.env.NODE_ENV === "development",
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