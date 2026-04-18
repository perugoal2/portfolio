const normalizedBasePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");

export const withBasePath = (url: string): string => {
  if (!url) {
    return url;
  }

  if (/^(?:[a-z]+:)?\/\//i.test(url) || url.startsWith("data:") || url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("#")) {
    return url;
  }

  if (!url.startsWith("/")) {
    return url;
  }

  if (!normalizedBasePath) {
    return url;
  }

  if (url === normalizedBasePath || url.startsWith(`${normalizedBasePath}/`)) {
    return url;
  }

  return `${normalizedBasePath}${url}`;
};

export const siteProfile = {
  name: "Peru N",
  headline: "Software Architect · Cloud Engineer · Security Engineer",
  summary:
    "I design secure, scalable software systems and turn complex cloud or AI workflows into products that feel clear, usable, and trustworthy.",
  githubUrl: "https://github.com/perugoal2",
  featuredRepoUrl: "https://github.com/perugoal2/AI-PDF-Reader",
  linkedinUrl: "https://www.linkedin.com/in/peru-n-placeholder/",
  email: "peru.n.placeholder@example.com",
  emailUrl: "mailto:peru.n.placeholder@example.com",
  contactLabel: "",
};

export const homeHighlights = [
  {
    value: "01",
    label: "Local-first AI",
    detail: "AI PDF Reader combines retrieval, local models, desktop packaging, and product UX.",
  },
  {
    value: "02",
    label: "Cloud platforms",
    detail: "Platform and landing zone work focused on governance, delivery, and operational clarity.",
  },
  {
    value: "03",
    label: "Security design",
    detail: "Threat models, trust boundaries, and secure delivery decisions are part of the project story.",
  },
];
