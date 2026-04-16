import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { Pill } from "@/components/Pill";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/content";
import type { BlogPost } from "@/types/content";

type BlogPostPageProps = {
  post: BlogPost;
};

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <Layout title={post.title} description={post.summary}>
      <section className="mx-auto max-w-4xl pb-10">
        <Link href="/blog" className="mb-8 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
          ← Back to blog
        </Link>

        <header className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{post.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </header>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8">
          <MarkdownArticle content={post.content} />
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getBlogSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
