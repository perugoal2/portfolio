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

const strengths = [
    {
        title: "Architecture",
        text: "System design, platform boundaries, trade-offs, and target-state thinking across product and platform work.",
    },
    {
        title: "Cloud platforms",
        text: "Landing zones, delivery foundations, reliability, observability, and platform patterns for modern teams.",
    },
    {
        title: "Security design",
        text: "Threat models, trust boundaries, access design, and secure delivery decisions woven into implementation work.",
    },
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
            <section className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-slate-950/70 pb-12 pt-10 shadow-2xl shadow-cyan-950/20">
                <div className="pointer-events-none absolute inset-0 opacity-50">
                    <Image src="/visuals/hero-mesh.svg" alt="" fill priority className="object-cover" />
                </div>
                <div className="relative grid gap-10 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">Architecture · Cloud · Security</p>
                        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                            I design cloud and AI systems with security, clarity, and real-world use in mind.
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            {siteProfile.name} · {siteProfile.headline}
                        </p>
                        <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                            {siteProfile.summary}
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {valueSignals.map((signal) => (
                                <div key={signal.label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-4 backdrop-blur">
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{signal.label}</p>
                                    <p className="mt-3 text-xl font-semibold text-white">{signal.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {positioning.map((item) => (
                                <Pill key={item}>{item}</Pill>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/projects"
                                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                            >
                                Explore case studies
                            </Link>
                            <Link
                                href="/blog"
                                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                            >
                                Read blog
                            </Link>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-4 backdrop-blur">
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-400/10 to-transparent" />
                        <div className="relative">
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Overview</p>
                                        <p className="mt-2 text-lg font-semibold text-white">Architecture, product, and security</p>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                                    PN
                                </div>
                            </div>

                            <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80">
                                <Image src="/diagrams/ai-pdf-reader-architecture.svg" alt="AI PDF Reader architecture" fill className="object-cover p-4" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-5">
                                    <p className="text-sm font-medium text-white">Recent architecture work</p>
                                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                                        Product architecture, trust boundaries, and delivery decisions across recent projects.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Architecture</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">Case studies include diagrams, trade-offs, and implementation outcomes.</p>
                                </div>
                                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Security</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">Threat models and secure design decisions are part of the project story, not separate from it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-12">
                <div className="grid gap-6 xl:grid-cols-3">
                    {homeHighlights.map((item) => (
                        <article key={item.value} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{item.value}</p>
                            <h2 className="mt-4 text-xl font-semibold text-white">{item.label}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="pb-12">
                <div className="grid gap-6 md:grid-cols-3">
                    {strengths.map((item) => (
                        <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
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

            <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-blue-400/10 p-8 pb-10">
                <SectionHeader
                    eyebrow="Elsewhere"
                    title="Links"
                    description="GitHub, LinkedIn, email, and project links."
                />

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href={siteProfile.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteProfile.emailUrl}
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                    >
                        Email
                    </a>
                    <a
                        href={siteProfile.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={siteProfile.featuredRepoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                        AI PDF Reader
                    </a>
                    <Link
                        href="/projects"
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
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
