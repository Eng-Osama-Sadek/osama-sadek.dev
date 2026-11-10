import Link from "next/link";
import { Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-hero-gradient px-6 pt-20">
        <div className="text-center">
          <p className="font-display text-7xl font-bold gradient-text">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
          <p className="mt-3 text-white/60">That page doesn&apos;t exist — or it moved.</p>
          <Link href="/" className="mt-8 inline-block">
            <Button variant="primary">
              <Home className="h-4 w-4" />
              Back home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}