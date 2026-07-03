import Link from "next/link";

import { Pill } from "@/components/Pill";
import { domainOf } from "@/lib/site";
import type { BlogPost } from "@/types/content";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const domain = domainOf(post.category);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="ticks group flex flex-col border border-line bg-panel/40 p-6 transition-colors duration-300 hover:border-line-strong"
    >
      <div className="flex flex-wrap items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-bone-faint">
        <span className={`inline-flex items-center gap-1.5 ${domain.text}`}>
          <span className={`h-1.5 w-1.5 ${domain.dot}`} aria-hidden="true" />
          {post.category}
        </span>
        <span className="text-line-strong">/</span>
        <span>{post.date}</span>
        <span className="text-line-strong">/</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-4 font-display text-2xl leading-tight text-bone transition group-hover:text-white">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-bone-dim">{post.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-bone-dim transition group-hover:text-signal">
        Read note
        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
