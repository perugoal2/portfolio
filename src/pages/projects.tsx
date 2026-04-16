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
            <section className="space-y-10 pb-10">
                <SectionHeader
                    eyebrow="Projects"
                    title="Architecture, cloud, and security case studies"
                    description="Selected work covering system design, delivery decisions, security analysis, and implementation outcomes."
                />

                <div className="grid gap-6 xl:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
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
