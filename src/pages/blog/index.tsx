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
      title="Blog"
      description="Architecture, cloud, and security notes from project work and technical practice."
    >
      <section className="space-y-10 pb-10">
        <SectionHeader
          eyebrow="Blog"
          title="Architecture, cloud, and security notes"
          description="Writing on platform design, delivery choices, security decisions, and product-building patterns."
        />

        <div className="grid gap-6 lg:grid-cols-2">
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
