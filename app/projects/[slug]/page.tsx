import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, PlayCircle, Star, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

function getEmbedUrl(url: string): string | null {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  const loom = url.match(/loom\.com\/(?:share|embed)\/([a-z0-9]+)/i);
  if (loom) return `https://www.loom.com/embed/${loom[1]}`;
  return null;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.tagline,
      images: [{ url: project.coverImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  const embedUrl = project.videoUrl ? getEmbedUrl(project.videoUrl) : null;

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="container-tight">
          <RevealOnScroll>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05} className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="default">{project.category}</Badge>
              <span className="text-sm text-white/40">{project.year}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/60 text-pretty">
              {project.tagline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
              </a>
            )}
            {project.videoUrl && (
              <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost">
                  <PlayCircle className="h-4 w-4" />
                  Watch Video
                </Button>
              </a>
            )}
          </RevealOnScroll>
        </section>

        <RevealOnScroll delay={0.15} className="container-tight mt-12">
          <div className="glass gradient-border relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>

        <section className="container-tight mt-16 grid gap-10 md:grid-cols-3">
          <RevealOnScroll className="md:col-span-2">
            <h2 className="font-display text-2xl font-semibold">Overview</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-white/70">
              {project.description.split(/\n\n+/).map((para, i) => (
                <p key={i} className="text-pretty">{para}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-semibold">Key Features</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-white/70">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {embedUrl && (
              <>
                <h2 className="mt-12 font-display text-2xl font-semibold">Walkthrough</h2>
                <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <iframe
                    src={embedUrl}
                    title={`${project.title} walkthrough`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </>
            )}
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="glass gradient-border sticky top-24 rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Tech Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <Badge key={t} variant="default">{t}</Badge>
                ))}
              </div>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/50">
                Year
              </h3>
              <p className="mt-2 text-white/80">{project.year}</p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/50">
                Category
              </h3>
              <p className="mt-2 text-white/80">{project.category}</p>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block"
                >
                  <Button variant="primary" className="w-full">
                    <Star className="h-4 w-4" />
                    Star on GitHub
                  </Button>
                </a>
              )}
            </div>
          </RevealOnScroll>
        </section>

        {project.gallery.length > 0 && (
          <section className="container-tight mt-16">
            <h2 className="font-display text-2xl font-semibold">Gallery</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.gallery.map((img, i) => (
                <RevealOnScroll key={img} delay={i * 0.08}>
                  <div className="glass gradient-border relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="container-tight mt-24">
            <h2 className="font-display text-2xl font-semibold">Related projects</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}