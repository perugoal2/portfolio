import Image from "next/image";
import Link from "next/link";

import { Pill } from "@/components/Pill";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/10 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
      <div className="relative h-52 overflow-hidden border-b border-white/10 bg-slate-900/60">
        <Image
          src={project.architectureImage}
          alt={`${project.title} architecture diagram`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
          <span>{project.date}</span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-cyan-200">{project.tagline}</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        <div className="grid gap-2 text-sm text-slate-300">
          {project.outcomes.slice(0, 3).map((outcome) => (
            <p key={outcome}>• {outcome}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View case study
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Repository
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
