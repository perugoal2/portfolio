import { Layout } from "@/components/Layout";
import { Pill } from "@/components/Pill";
import { SectionHeader } from "@/components/SectionHeader";

const strengths = [
  "Enterprise architecture roadmaps",
  "Cloud landing zones and platform engineering",
  "Application modernization and resiliency",
  "Threat modeling and security architecture reviews",
  "Executive-ready technical storytelling",
  "Engineering governance and delivery acceleration",
];

const focusCards = [
  {
    k: "01",
    title: "Architectural depth",
    text: "Projects framed through context, decisions, trade-offs, and measurable outcomes.",
  },
  {
    k: "02",
    title: "Cloud execution",
    text: "Target-state diagrams, platform patterns, operating models, and resiliency improvements.",
  },
  {
    k: "03",
    title: "Security leadership",
    text: "Threat models, trust boundaries, access decisions, and secure delivery practices.",
  },
];

const themes = [
  "Software architecture and system design",
  "Cloud platform foundations and delivery patterns",
  "Security architecture, threat modeling, and access design",
  "Product thinking across implementation and operations",
];

export default function AboutPage() {
  return (
    <Layout
      title="About"
      description="Background across software architecture, cloud engineering, and security engineering."
    >
      <section className="space-y-14 pb-4">
        <SectionHeader
          eyebrow="About"
          title="Architecture, cloud & security, told through case studies"
          description="This site brings together projects, diagrams, and technical writing in a format that is easy to browse and easy to keep updated."
        />

        <div className="grid gap-px border border-line bg-line lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-ink p-8">
            <p className="tag tag--signal"><span className="marker">§</span> Focus areas</p>
            <p className="mt-5 text-base leading-8 text-bone-dim">
              The work here centers on target architecture, cloud platforms, modern
              delivery, and secure system design. The goal is to make technical
              decisions, trade-offs, and outcomes visible without overexplaining them.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <Pill key={strength}>{strength}</Pill>
              ))}
            </div>
          </div>

          <div className="bg-ink p-8">
            <p className="tag tag--signal"><span className="marker">§</span> Current themes</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-bone-dim">
              {themes.map((theme, i) => (
                <li key={theme} className="flex gap-3 border-b border-line pb-4 last:border-0">
                  <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {focusCards.map((card) => (
            <article key={card.title} className="ticks border border-line bg-panel/40 p-7">
              <p className="font-display text-4xl text-signal/70">{card.k}</p>
              <h3 className="mt-4 font-display text-xl text-bone">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-bone-dim">{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
