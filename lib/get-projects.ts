import { prisma } from "@/lib/db";

export async function getProjects() {
  return prisma.project.findMany({
    where: { published: true },
    orderBy: [{ order: "asc" }, { year: "desc" }],
  });
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findFirst({ where: { slug, published: true } });
}
