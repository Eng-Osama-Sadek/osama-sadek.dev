"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
    >
      Sign out
    </button>
  );
}
