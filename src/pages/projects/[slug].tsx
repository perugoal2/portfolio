import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { Pill } from "@/components/Pill";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import type { Project } from "@/types/content";

type ProjectPageProps = {
  project: Project;
};

function DiagramPlate({
  plate,
  title,
  caption,
  src,
  alt,
}: {
  plate: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
}) {
  return (
    <figure className="ticks border border-line bg-panel/40">
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-4">
        <div>
          <p className="tag tag--signal">{plate}</p>
          <h2 className="mt-1 font-display text-lg text-bone">{title}</h2>
        </div>
      </figcaption>
      <div className="relative h-[320px] bg-ink-2">
        <Image src={src} alt={alt} fill className="object-contain p-4" />
      </div>
      <p className="border-t border-line px-5 py-3 text-xs leading-6 text-bone-dim">{caption}</p>
    </figure>
  );
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <Layout title={project.title} description={project.summary}>
      <article className="space-y-12 pb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim transition hover:text-signal"
        >
          <span aria-hidden="true">←</span> Back to work
        </Link>

        {/* header */}
        <header>
          <div className="flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bone-faint">
            <span className="tag--signal">§ Case study</span>
            <span className="h-px flex-1 bg-line" />
            <span>{project.date}</span>
          </div>
          <h1 className="headline mt-6 text-4xl sm:text-6xl">{project.title}</h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.12em] text-signal-soft">
            {project.tagline}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-bone-dim">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </header>

        {/* body + aside */}
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="border-t border-line pt-8">
            <MarkdownArticle content={project.content} />
          </div>

          <aside className="space-y-6 lg:border-l lg:border-line lg:pl-8">
            <div>
              <p className="tag tag--signal"><span className="marker">§</span> Capabilities</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.capabilities.map((capability) => (
                  <Pill key={capability}>{capability}</Pill>
                ))}
              </div>
            </div>

            <div className="border-t border-line pt-6">
              <p className="tag tag--signal"><span className="marker">§</span> Outcomes</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-bone-dim">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="border-t border-line pt-6">
                <p className="tag tag--signal"><span className="marker">§</span> Links</p>
                <div className="mt-4 flex flex-col gap-3">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost px-4 py-2.5 text-center">
                      Repository
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-signal px-4 py-2.5 text-center">
                      Live system
                    </a>
                  ) : null}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* plates */}
        <div className="grid gap-6 lg:grid-cols-2">
          <DiagramPlate
            plate="Plate 01"
            title="Architecture diagram"
            caption="System boundaries, data flow, and core platform components."
            src={project.architectureImage}
            alt={`${project.title} architecture diagram`}
          />
          <DiagramPlate
            plate="Plate 02"
            title="Threat model"
            caption="Trust boundaries, risk areas, and design decisions for safer operation."
            src={project.threatModelImage}
            alt={`${project.title} threat model diagram`}
          />
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getProjectSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  const project = getProjectBySlug(slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
