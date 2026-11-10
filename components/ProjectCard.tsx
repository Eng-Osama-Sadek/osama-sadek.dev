"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
import { TiltCard } from "@/components/motion/TiltCard";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface Props {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard maxTilt={6}>
        <div className="group glass gradient-border relative flex h-full flex-col overflow-hidden rounded-2xl">
          <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-80" />
            <div className="absolute right-3 top-3 flex gap-2">
              <Badge variant="default">{project.category}</Badge>
              {project.featured && <Badge variant="violet">Featured</Badge>}
            </div>
          </Link>

          <div className="flex flex-1 flex-col p-5">
            <div className="mb-2 flex items-center gap-2 text-xs text-white/40">
              <span>{project.year}</span>
            </div>
            <Link href={`/projects/${project.slug}`}>
              <h3 className="font-display text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-brand-cyan">
                {project.title}
              </h3>
            </Link>
            <p className="mt-2 line-clamp-2 text-sm text-white/60">
              {project.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="muted">+{project.techStack.length - 4}</Badge>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-brand-electric/40 hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch video"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-brand-electric/40 hover:text-white"
                  >
                    <PlayCircle className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-cyan hover:gap-2 transition-all"
              >
                Details
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}