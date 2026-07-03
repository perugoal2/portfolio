import type { GetStaticProps } from "next";

import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getProjects } from "@/lib/content";
import type { Project } from "@/types/content";

type ProjectsPageProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsPageProps) {
  return (
    <Layout
      title="Projects"
      description="Case studies covering software architecture, cloud engineering, and security engineering outcomes."
    >
      <section className="pb-4">
        <SectionHeader
          eyebrow="Projects"
          title="Architecture, cloud & security case studies"
          description="Selected work covering system design, delivery decisions, security analysis, and implementation outcomes."
        />

        <div className="mt-6 flex items-center gap-4 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-bone-faint">
          <span>{String(projects.length).padStart(2, "0")} entries</span>
          <span className="h-px flex-1 bg-line" />
          <span>Sorted / recent</span>
        </div>

        <div data-stagger className="mt-10 grid gap-6 xl:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => ({
  props: {
    projects: getProjects(),
  },
});
