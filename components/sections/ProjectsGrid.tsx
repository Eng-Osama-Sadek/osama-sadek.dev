"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "AI", "Web", "Mobile", "Automation", "Full-Stack"] as const;

interface Props {
  projects: Project[];
}

export function ProjectsGrid({ projects }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (category === "All" ? true : p.category === category))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
        );
      });
  }, [projects, query, category]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-all",
                category === cat
                  ? "border-brand-electric/60 bg-brand-electric/20 text-white"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:border-brand-electric/30 hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech…"
            className="pl-10"
          />
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2 text-sm text-white/50">
        <Badge variant="muted">{filtered.length} projects</Badge>
        {query && <span>matching &ldquo;{query}&rdquo;</span>}
      </div>

      {filtered.length === 0 ? (
        <div className="glass gradient-border rounded-2xl p-12 text-center">
          <p className="text-lg font-medium">No projects found</p>
          <p className="mt-2 text-sm text-white/50">Try a different category or search term.</p>
        </div>
      ) : (
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      )}
    </div>
  );
}