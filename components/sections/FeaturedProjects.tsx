import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <section className="section relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="A few of the systems I've architected and shipped — spanning AI, automation, and full-stack platforms."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <RevealOnScroll className="mt-12 flex justify-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View all 8 projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}