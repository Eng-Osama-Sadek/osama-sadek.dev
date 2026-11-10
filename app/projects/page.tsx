import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A full showcase of production apps, AI platforms, and automation systems I've shipped.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="container-tight pb-12">
          <SectionHeading
            eyebrow="Portfolio"
            title="Everything I've shipped"
            description="From AI platforms and RAG systems to full-stack mobile apps and automation engines. Filter by category or search."
          />
        </section>
        <section className="container-tight pb-24">
          <ProjectsGrid projects={projects} />
        </section>
      </main>
      <Footer />
    </>
  );
}