import SignInButton from "./SignInButton";

export const metadata = { title: "Admin Login", robots: { index: false, follow: false } };

const MESSAGES: Record<string, string> = {
  AccessDenied: "This GitHub account is not authorized to access the admin dashboard.",
  OAuthAccountNotLinked: "This email is linked to another sign-in method. Use the original one.",
  Configuration: "Server configuration error. Check NEXTAUTH_SECRET, NEXTAUTH_URL and the GitHub OAuth keys.",
  Callback: "Sign-in failed. Check the GitHub OAuth callback URL.",
};

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams.error;
  const message = error ? MESSAGES[error] ?? "Sign-in failed. Please try again." : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-hero-gradient px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-glass backdrop-blur">
        <h1 className="font-display text-3xl font-bold text-white">Admin Access</h1>
        <p className="mt-2 text-sm text-white/60">
          Sign in with the authorized GitHub account to manage your portfolio.
        </p>
        {message && (
          <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {message}
          </p>
        )}
        <div className="mt-6">
          <SignInButton />
        </div>
        <p className="mt-6 text-xs text-white/40">Only the admin can sign in</p>
      </div>
    </main>
  );
}
