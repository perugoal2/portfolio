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
      <article className="mx-auto max-w-3xl pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim transition hover:text-signal"
        >
          <span aria-hidden="true">←</span> Back to blog
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-bone-faint">
            <span className="text-signal">{post.category}</span>
            <span className="text-line-strong">/</span>
            <span>{post.date}</span>
            <span className="text-line-strong">/</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="headline mt-6 text-4xl sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-bone-dim">{post.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </header>

        <div className="mt-10 border-t border-line pt-10">
          <MarkdownArticle content={post.content} />
        </div>
      </article>
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
