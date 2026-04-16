export type ProjectFrontmatter = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tagline: string;
  featured: boolean;
  tags: string[];
  outcomes: string[];
  capabilities: string[];
  architectureImage: string;
  threatModelImage: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  category: string;
  featured: boolean;
  readingTime: string;
  tags: string[];
};

export type Project = Omit<ProjectFrontmatter, "githubUrl" | "liveUrl"> & {
  githubUrl: string | null;
  liveUrl: string | null;
  content: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
};
