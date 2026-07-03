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
  featuredRepoUrl: "https://github.com/perugoal2/Agentic-Kubernetes-IaC-Security-Reviewer",
  linkedinUrl: "https://www.linkedin.com/in/peru-n-placeholder/",
  email: "peru.n.placeholder@example.com",
  emailUrl: "mailto:peru.n.placeholder@example.com",
  contactLabel: "",
};

/* ------------------------------------------------------------------ *
 *  Categorical domain system — color encodes which practice domain a
 *  piece of work belongs to. Cobalt(signal)=Cloud, jade=Product/AI,
 *  violet=Security. Class strings are literal so Tailwind detects them.
 * ------------------------------------------------------------------ */

export type DomainId = "cloud" | "product" | "security";

type Domain = {
  id: DomainId;
  label: string;
  /** readable text color on ink (WCAG AA) */
  text: string;
  /** solid swatch / marker color */
  dot: string;
};

export const domains: Record<DomainId, Domain> = {
  cloud: { id: "cloud", label: "Cloud", text: "text-signal-soft", dot: "bg-signal" },
  product: { id: "product", label: "Product · AI", text: "text-jade", dot: "bg-jade" },
  security: { id: "security", label: "Security", text: "text-violet-soft", dot: "bg-violet" },
};

/** Derive a domain from a primary label (first tag / category). */
export const domainOf = (primaryLabel: string): Domain => {
  const l = primaryLabel.toLowerCase();
  if (/secur|threat|detection|devsecops|\bsoc\b/.test(l)) return domains.security;
  if (/cloud|platform|landing|govern|infra|pipeline|\bdata\b/.test(l)) return domains.cloud;
  return domains.product; // ai / product / software architecture
};

export const homeHighlights: {
  value: string;
  label: string;
  detail: string;
  domain: DomainId;
}[] = [
  {
    value: "01",
    label: "Local-first AI",
    detail: "AI PDF Reader combines retrieval, local models, desktop packaging, and product UX.",
    domain: "product",
  },
  {
    value: "02",
    label: "Cloud platforms",
    detail: "Platform and landing zone work focused on governance, delivery, and operational clarity.",
    domain: "cloud",
  },
  {
    value: "03",
    label: "Security design",
    detail: "Threat models, trust boundaries, and secure delivery decisions are part of the project story.",
    domain: "security",
  },
];
