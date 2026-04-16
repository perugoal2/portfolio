import fs from "fs";
import path from "path";

import type { BlogFrontmatter, BlogPost, Project, ProjectFrontmatter } from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "content");

type FrontmatterValue = string | boolean | string[];
type RawFrontmatter = Record<string, FrontmatterValue>;

const parsePrimitiveValue = (value: string): string | boolean => {
  const normalized = value.trim();

  if (normalized === "true") {
    return true;
  }

  if (normalized === "false") {
    return false;
  }

  return normalized.replace(/^['\"]|['\"]$/g, "");
};

const parseFrontmatter = (source: string) => {
  if (!source.startsWith("---")) {
    return { data: {} as RawFrontmatter, content: source.trim() };
  }

  const boundary = source.indexOf("\n---", 3);

  if (boundary === -1) {
    return { data: {} as RawFrontmatter, content: source.trim() };
  }

  const rawFrontmatter = source.slice(3, boundary).trim();
  const content = source.slice(boundary + 4).trim();
  const data: RawFrontmatter = {};
  let currentArrayKey: string | null = null;

  rawFrontmatter.split(/\r?\n/).forEach((line) => {
    const arrayMatch = line.match(/^\s*-\s+(.*)$/);

    if (arrayMatch && currentArrayKey) {
      const existing = data[currentArrayKey];

      if (Array.isArray(existing)) {
        existing.push(String(parsePrimitiveValue(arrayMatch[1])));
      }

      return;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);

    if (!keyMatch) {
      return;
    }

    const [, key, rawValue] = keyMatch;

    if (!rawValue) {
      data[key] = [];
      currentArrayKey = key;
      return;
    }

    currentArrayKey = null;

    data[key] = parsePrimitiveValue(rawValue);
  });

  return { data, content };
};

const getContentDirectory = (segment: string) => path.join(CONTENT_ROOT, segment);

const readMarkdownCollection = <TFrontmatter extends RawFrontmatter>(segment: string) => {
  const directory = getContentDirectory(segment);

  return fs
    .readdirSync(directory)
    .filter((fileName: string) => fileName.endsWith(".md"))
    .map((fileName: string) => {
      const filePath = path.join(directory, fileName);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data, content } = parseFrontmatter(source);

      return {
        ...(data as TFrontmatter),
        content,
      };
    });
};

const toStringArray = (value: FrontmatterValue | undefined) => {
  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (typeof value === "string" && value.length > 0) {
    return [value];
  }

  return [];
};

const normalizeProject = (item: RawFrontmatter & { content: string }): Project => ({
  title: String(item.title ?? "Untitled project"),
  slug: String(item.slug ?? "untitled-project"),
  date: String(item.date ?? "2026"),
  summary: String(item.summary ?? ""),
  tagline: String(item.tagline ?? ""),
  featured: Boolean(item.featured),
  tags: toStringArray(item.tags),
  outcomes: toStringArray(item.outcomes),
  capabilities: toStringArray(item.capabilities),
  architectureImage: String(item.architectureImage ?? "/diagrams/default-architecture.svg"),
  threatModelImage: String(item.threatModelImage ?? "/diagrams/default-threat-model.svg"),
  githubUrl: item.githubUrl ? String(item.githubUrl) : null,
  liveUrl: item.liveUrl ? String(item.liveUrl) : null,
  content: item.content,
});

const normalizeBlogPost = (item: RawFrontmatter & { content: string }): BlogPost => ({
  title: String(item.title ?? "Untitled post"),
  slug: String(item.slug ?? "untitled-post"),
  date: String(item.date ?? "2026-01-01"),
  summary: String(item.summary ?? ""),
  category: String(item.category ?? "Architecture"),
  featured: Boolean(item.featured),
  readingTime: String(item.readingTime ?? "5 min"),
  tags: toStringArray(item.tags),
  content: item.content,
});

const sortByDate = <T extends { date: string }>(items: T[]): T[] =>
  [...items].sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());

export const getProjects = (): Project[] => sortByDate(readMarkdownCollection<ProjectFrontmatter>("projects").map(normalizeProject));

export const getFeaturedProjects = (): Project[] => getProjects().filter((project) => project.featured);

export const getProjectSlugs = (): string[] => getProjects().map((project) => project.slug);

export const getProjectBySlug = (slug: string): Project | undefined => getProjects().find((project) => project.slug === slug);

export const getBlogPosts = (): BlogPost[] => sortByDate(readMarkdownCollection<BlogFrontmatter>("blog").map(normalizeBlogPost));

export const getFeaturedBlogPosts = (): BlogPost[] => getBlogPosts().filter((post) => post.featured);

export const getBlogSlugs = (): string[] => getBlogPosts().map((post) => post.slug);

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => getBlogPosts().find((post) => post.slug === slug);
