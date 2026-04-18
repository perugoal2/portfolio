import { renderMarkdownToHtml } from "@/lib/markdown";

type MarkdownArticleProps = {
  content: string;
};

export function MarkdownArticle({ content }: MarkdownArticleProps) {
  return (
    <div
      className="prose-panel text-slate-200 [&_h1]:text-slate-50 [&_h2]:text-slate-50 [&_h3]:text-slate-50 [&_p]:text-slate-300 [&_li]:text-slate-300 [&_blockquote]:text-slate-300"
      dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(content) }}
    />
  );
}
