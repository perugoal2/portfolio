# Portfolio website

A modern portfolio for software architecture, cloud engineering, and security engineering roles.

## What changed

- Modern landing page with stronger positioning for HR and hiring managers.
- Markdown-driven projects and blog posts.
- Project detail pages that support architecture diagrams and threat model images.
- Reusable templates so new content can be added without editing the page components.

## Content workflow

The easiest way to maintain this portfolio is through markdown files.

### Add a new project

1. Copy [content/templates/project-template.md](content/templates/project-template.md).
2. Save it into [content/projects](content/projects).
3. Update the frontmatter fields.
4. Add your architecture and threat model images to [public/diagrams](public/diagrams).
5. Reference those images in `architectureImage` and `threatModelImage`.

### Add a new blog post

1. Copy [content/templates/blog-template.md](content/templates/blog-template.md).
2. Save it into [content/blog](content/blog).
3. Update the title, summary, tags, and markdown body.

## Recommended content format

For each project, include:

- The business or engineering context
- The architecture decisions and trade-offs
- A simple architecture diagram
- A short security analysis or threat model
- Measurable outcomes

This combination works well because it shows both technical depth and communication quality.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.
