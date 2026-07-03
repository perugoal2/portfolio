import type { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { BlogCard } from "@/components/BlogCard";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getFeaturedBlogPosts, getFeaturedProjects } from "@/lib/content";
import { domains, homeHighlights, siteProfile, withBasePath } from "@/lib/site";
import type { BlogPost, Project } from "@/types/content";

type HomePageProps = {
  featuredProjects: Project[];
  featuredPosts: BlogPost[];
};

export default function Home({ featuredProjects, featuredPosts }: HomePageProps) {
  // Engineering title-block: the sheet's identifying record, in place of a generic stat row.
  const titleBlock = [
    { k: "Drawn by", v: "Peru N" },
    { k: "Discipline", v: "Architecture · Cloud · Security" },
    { k: "Status", v: "Open to roles & consulting" },
    { k: "Primary repo", v: "Agentic IaC Reviewer", href: siteProfile.featuredRepoUrl },
  ];

  return (
    <Layout
      title="Architecture, Cloud & Security"
      description="Software architecture, cloud engineering, and security engineering work."
    >
      {/* ------------------------------------------------------ HERO / SHEET 00 */}
      <section className="relative">
        <div className="ticks border border-line-strong bg-ink/30">
          {/* title bar */}
          <div className="reveal flex items-center gap-3 border-b border-line px-5 py-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bone-faint sm:px-7 sm:text-[0.66rem] sm:tracking-[0.22em]" style={{ animationDelay: "0ms" }}>
            <span className="whitespace-nowrap text-bone">Peru N</span>
            <span className="hidden text-line-strong sm:inline">/</span>
            <span className="hidden sm:inline">Portfolio</span>
            <span className="rule-draw mx-1 h-px flex-1 bg-line" style={{ animationDelay: "160ms" }} />
            <span className="whitespace-nowrap"><span className="text-signal">Sheet 00</span> · Index</span>
            <span className="hidden text-line-strong sm:inline">/</span>
            <span className="hidden whitespace-nowrap sm:inline">Rev. A</span>
          </div>

          {/* sheet body */}
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-8 lg:p-11">
            <div className="lg:col-span-8">
              <h1
                className="headline reveal-wipe text-balance text-[clamp(2.6rem,6.4vw,5.5rem)]"
                style={{ animationDelay: "70ms" }}
              >
                I design cloud &amp; AI systems built for{" "}
                <span className="italic text-signal">security</span>, clarity, and
                real-world use.
              </h1>

              <p
                className="reveal mt-7 max-w-[46ch] text-pretty text-[1.05rem] leading-8 text-bone-dim"
                style={{ animationDelay: "150ms" }}
              >
                {siteProfile.summary}
              </p>

              <div className="reveal mt-9 flex flex-wrap items-center gap-5" style={{ animationDelay: "230ms" }}>
                <Link href="/projects" className="btn-signal inline-flex items-center gap-2 px-5 py-3">
                  Explore case studies <span aria-hidden="true">→</span>
                </Link>
                <Link href="/blog" className="btn-ghost inline-flex items-center px-5 py-3">
                  Read the notes
                </Link>
              </div>
            </div>

            {/* diagram demoted to a detail callout — asymmetric weight */}
            <div className="reveal lg:col-span-4 lg:self-end" style={{ animationDelay: "320ms" }}>
              <figure className="ticks border border-line bg-panel/40 p-2.5">
                <div className="relative aspect-[4/3] overflow-hidden border border-line bg-ink-2">
                  <Image
                    src={withBasePath("/diagrams/ai-pdf-reader-architecture.svg")}
                    alt="Recent architecture work: AI PDF reader system diagram"
                    fill
                    priority
                    className="object-contain p-2.5"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.16em] text-bone-faint">
                  <span><span className="text-signal">Detail A</span> — Architecture</span>
                  <span className="hidden sm:inline">Trust boundaries</span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* title block — the sheet's record strip, filling in cell by cell */}
          <div className="grid grid-cols-2 gap-px border-t border-line bg-line md:grid-cols-4">
            {titleBlock.map((cell, i) => {
              const delay = { animationDelay: `${380 + i * 70}ms` };
              const inner = (
                <>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-bone-faint">{cell.k}</p>
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-[0.78rem] uppercase tracking-[0.06em] text-bone">
                    {cell.v}
                    {cell.href ? <span aria-hidden="true" className="text-signal transition-transform group-hover:translate-x-0.5">↗</span> : null}
                  </p>
                </>
              );
              return cell.href ? (
                <a
                  key={cell.k}
                  href={cell.href}
                  target="_blank"
                  rel="noreferrer"
                  className="reveal group bg-ink p-5 transition-colors hover:bg-panel/60"
                  style={delay}
                >
                  {inner}
                </a>
              ) : (
                <div key={cell.k} className="reveal bg-ink p-5" style={delay}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- CAPABILITY */}
      <section className="mt-28 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="tag tag--signal"><span className="marker">§</span> Capability — Legend</p>
          <h2 className="headline mt-4 text-3xl sm:text-[2.4rem]">Three practices, one systems mindset</h2>
          <p className="mt-4 max-w-sm text-[0.95rem] leading-7 text-bone-dim">
            I work end-to-end — from target architecture to delivery to the threat
            model that keeps it standing. The key at right reads like a drawing&apos;s
            legend.
          </p>
        </div>

        <dl data-stagger className="border-t border-line">
          {homeHighlights.map((item) => {
            const d = domains[item.domain];
            return (
              <div
                key={item.label}
                className="group grid grid-cols-[3.5rem_1fr] gap-x-5 border-b border-line py-6 transition-colors hover:bg-panel/30 sm:grid-cols-[5rem_1fr] sm:gap-x-8 sm:py-7"
              >
                <dt className={`flex items-center gap-2 pt-1.5 font-mono text-xs uppercase tracking-[0.18em] ${d.text}`}>
                  <span className={`h-2 w-2 ${d.dot}`} aria-hidden="true" />
                  P-{item.value}
                </dt>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl text-bone sm:text-2xl">{item.label}</h3>
                    <span className={`font-mono text-[0.62rem] uppercase tracking-[0.18em] ${d.text}`}>
                      {d.label}
                    </span>
                  </div>
                  <dd className="mt-2 text-sm leading-7 text-bone-dim">{item.detail}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </section>

      {/* --------------------------------------------------------- PROJECTS */}
      <section className="mt-28">
        <SectionHeader
          eyebrow="Featured work"
          title="Case studies in systems thinking & secure design"
          description="Projects with architecture visuals, security analysis, and implementation outcomes — not just screenshots."
        />

        <div data-stagger className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ NOTES */}
      <section className="mt-28">
        <SectionHeader
          eyebrow="Field notes"
          title="Writing on architecture, delivery & security"
          description="Short pieces on platform design, technical decisions, and implementation patterns from recent work."
        />

        <div data-stagger className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ CONTACT */}
      <section className="mt-28 border border-line bg-panel/30 p-8 sm:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="tag tag--signal"><span className="marker">§</span> Elsewhere</p>
            <h2 className="headline mt-4 text-3xl sm:text-4xl">Let&apos;s trace the boundaries together.</h2>
            <p className="mt-4 text-sm leading-7 text-bone-dim">
              Open to architecture, cloud, and security engineering conversations. The links below are the fastest way through.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={siteProfile.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost px-5 py-3">GitHub</a>
            <a href={siteProfile.linkedinUrl} target="_blank" rel="noreferrer" className="btn-ghost px-5 py-3">LinkedIn</a>
            <a href={siteProfile.emailUrl} className="btn-ghost px-5 py-3">Email</a>
            <a href={siteProfile.featuredRepoUrl} target="_blank" rel="noreferrer" className="btn-signal px-5 py-3">Featured repo</a>
          </div>
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
