import { renderMarkdownToHtml } from "@/lib/markdown";

type MarkdownArticleProps = {
  content: string;
};

export function MarkdownArticle({ content }: MarkdownArticleProps) {
  return <div className="prose-panel" dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(content) }} />;
}
