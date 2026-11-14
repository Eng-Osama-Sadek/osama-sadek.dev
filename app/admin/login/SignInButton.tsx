"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      type="button"
      onClick={() => signIn("github", { callbackUrl: "/admin" })}
      className="w-full rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan px-6 py-3 font-semibold text-white shadow-glow transition hover:opacity-90"
    >
      Sign in with GitHub
    </button>
  );
}
