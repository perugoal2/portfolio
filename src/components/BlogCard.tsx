import Link from "next/link";

import { Pill } from "@/components/Pill";
import type { BlogPost } from "@/types/content";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.05]">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
        <span>{post.category}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-300">{post.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/5"
      >
        Read insight
      </Link>
    </article>
  );
}
