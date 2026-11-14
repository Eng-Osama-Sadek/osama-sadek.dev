import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/admin/login" },
  callbacks: {
    authorized: ({ token, req }) => {
      if (req.nextUrl.pathname.startsWith("/admin/login")) return true;
      return token?.isAdmin === true;
    },
  },
});

export const config = { matcher: ["/admin/:path*"] };
