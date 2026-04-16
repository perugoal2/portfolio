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

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <Layout title={project.title} description={project.summary}>
      <section className="space-y-8 pb-10">
        <Link href="/projects" className="inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
          ← Back to projects
        </Link>

        <header className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
            <span>{project.date}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white">{project.title}</h1>
          <p className="mt-3 text-lg text-cyan-200">{project.tagline}</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8">
            <MarkdownArticle content={project.content} />
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Capabilities</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.capabilities.map((capability) => (
                  <Pill key={capability}>{capability}</Pill>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Outcomes</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                  >
                    Repository
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live system
                  </a>
                ) : null}
              </div>
            </div>
          </aside>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Architecture diagram</h2>
              <p className="mt-2 text-sm text-slate-300">System boundaries, data flow, and core platform components.</p>
            </div>
            <div className="relative h-[320px] bg-slate-900/80">
              <Image src={project.architectureImage} alt={`${project.title} architecture diagram`} fill className="object-contain p-4" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Threat model</h2>
              <p className="mt-2 text-sm text-slate-300">Trust boundaries, risk areas, and design decisions for safer operation.</p>
            </div>
            <div className="relative h-[320px] bg-slate-900/80">
              <Image src={project.threatModelImage} alt={`${project.title} threat model diagram`} fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      </section>
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
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
