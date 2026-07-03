import type { GetStaticProps } from "next";

import { BlogCard } from "@/components/BlogCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { getBlogPosts } from "@/lib/content";
import type { BlogPost } from "@/types/content";

type BlogPageProps = {
  posts: BlogPost[];
};

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <Layout
      title="Notes"
      description="Architecture, cloud, and security notes from project work and technical practice."
    >
      <section className="pb-4">
        <SectionHeader
          eyebrow="Field notes"
          title="Architecture, cloud & security notes"
          description="Writing on platform design, delivery choices, security decisions, and product-building patterns."
        />

        <div className="mt-6 flex items-center gap-4 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-bone-faint">
          <span>{String(posts.length).padStart(2, "0")} notes</span>
          <span className="h-px flex-1 bg-line" />
          <span>Latest first</span>
        </div>

        <div data-stagger className="mt-10 grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => ({
  props: {
    posts: getBlogPosts(),
  },
});
