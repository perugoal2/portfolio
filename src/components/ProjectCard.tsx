import Image from "next/image";
import Link from "next/link";

import { Pill } from "@/components/Pill";
import { domainOf } from "@/lib/site";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const domain = domainOf(project.tags[0] ?? project.title);
  return (
    <article className="ticks group flex flex-col border border-line bg-panel/40 transition-colors duration-300 hover:border-line-strong">
      <div className="relative h-52 overflow-hidden border-b border-line bg-ink-2">
        <Image
          src={project.architectureImage}
          alt={`${project.title} architecture diagram`}
          fill
          className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        {typeof index === "number" ? (
          <span className="absolute left-3 top-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone">
            <span className={domain.text}>/</span> {String(index).padStart(2, "0")}
          </span>
        ) : null}
        <span className="absolute bottom-3 right-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bone-dim">
          Fig. Architecture
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone-faint">
          <span className={`inline-flex items-center gap-1.5 ${domain.text}`}>
            <span className={`h-1.5 w-1.5 ${domain.dot}`} aria-hidden="true" />
            {domain.label}
          </span>
          <span>{project.date}</span>
        </div>

        <div>
          <h3 className="font-display text-2xl leading-tight text-bone transition group-hover:text-white">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-signal-soft">
            {project.tagline}
          </p>
          <p className="mt-3 text-sm leading-7 text-bone-dim">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        <ul className="mt-1 space-y-2 border-t border-line pt-4 text-sm leading-6 text-bone-dim">
          {project.outcomes.slice(0, 3).map((outcome) => (
            <li key={outcome} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="btn-signal inline-flex items-center gap-2 px-4 py-2.5"
          >
            View case study
            <span aria-hidden="true">→</span>
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rl-link font-mono text-xs uppercase tracking-[0.14em] text-bone-dim hover:text-bone"
            >
              Repository
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
