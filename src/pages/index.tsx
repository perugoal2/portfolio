import type { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { BlogCard } from "@/components/BlogCard";
import { Layout } from "@/components/Layout";
import { Pill } from "@/components/Pill";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getFeaturedBlogPosts, getFeaturedProjects } from "@/lib/content";
import { homeHighlights, siteProfile } from "@/lib/site";
import type { BlogPost, Project } from "@/types/content";

const positioning = [
    "Software Architect",
    "Cloud Engineer",
    "Security Engineer",
    "Technical Leadership",
];

type HomePageProps = {
    featuredProjects: Project[];
    featuredPosts: BlogPost[];
};

export default function Home({ featuredProjects, featuredPosts }: HomePageProps) {
    const valueSignals = [
        {
            label: "Featured projects",
            value: String(featuredProjects.length),
        },
        {
            label: "Deep-dive blogs",
            value: String(featuredPosts.length),
        },
        {
            label: "Primary repo",
            value: "AI PDF Reader",
        },
    ];

    return (
        <Layout
            title="Architecture, Cloud, and Security"
            description="Software architecture, cloud engineering, and security engineering work."
        >
            <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] py-12 sm:py-14">
                <div className="pointer-events-none absolute inset-0 opacity-35">
                    <Image src="/visuals/hero-mesh.svg" alt="" fill priority className="object-cover" />
                </div>
                <div className="relative grid gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Architecture · Cloud · Security</p>
                        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            I design cloud and AI systems with security, clarity, and real-world use in mind.
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                            {siteProfile.name} · {siteProfile.headline}
                        </p>
                        <p className="mt-2 max-w-3xl text-base leading-8 text-slate-300">
                            {siteProfile.summary}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {valueSignals.map((signal) => (
                                <div key={signal.label} className="rounded-2xl border border-white/10 bg-slate-900/45 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{signal.label}</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{signal.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {positioning.map((item) => (
                                <Pill key={item}>{item}</Pill>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/projects"
                                className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                            >
                                Explore case studies
                            </Link>
                            <Link
                                href="/blog"
                                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                            >
                                Read blog
                            </Link>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/55 p-4">
                        <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
                            <Image src="/diagrams/ai-pdf-reader-architecture.svg" alt="AI PDF Reader architecture" fill className="object-cover p-4" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5">
                                <p className="text-sm font-medium text-white">Recent architecture work</p>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    Product architecture, trust boundaries, and delivery decisions across recent projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-12 pt-10">
                <div className="grid gap-6 xl:grid-cols-3">
                    {homeHighlights.map((item) => (
                        <article key={item.value} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.value}</p>
                            <h2 className="mt-3 text-lg font-semibold text-white">{item.label}</h2>
                            <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-8 pb-12">
                <SectionHeader
                    eyebrow="Featured case studies"
                    title="Projects that show systems thinking, cloud execution, and secure design"
                    description="Selected projects with architecture visuals, security analysis, and implementation outcomes."
                />

                <div className="grid gap-6 xl:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            <section className="space-y-8 pb-12">
                <SectionHeader
                    eyebrow="Notes"
                    title="Writing on architecture, delivery, and security"
                    description="Short pieces on platform design, technical decisions, and implementation patterns from recent work."
                />

                <div className="grid gap-6 lg:grid-cols-2">
                    {featuredPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <SectionHeader
                    eyebrow="Elsewhere"
                    title="Links"
                    description="GitHub, LinkedIn, email, and project links."
                />

                <div className="mt-7 flex flex-wrap gap-3">
                    <a
                        href={siteProfile.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteProfile.emailUrl}
                        className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                    >
                        Email
                    </a>
                    <a
                        href={siteProfile.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={siteProfile.featuredRepoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                        AI PDF Reader
                    </a>
                    <Link
                        href="/projects"
                        className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                    >
                        Browse all projects
                    </Link>
                </div>

            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => ({
    props: {
        featuredProjects: getFeaturedProjects(),
        featuredPosts: getFeaturedBlogPosts(),
    },
});
