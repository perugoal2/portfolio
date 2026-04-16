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
    title: "Architectural depth",
    text: "Projects framed through context, decisions, trade-offs, and measurable outcomes.",
  },
  {
    title: "Cloud execution",
    text: "Target-state diagrams, platform patterns, operating models, and resiliency improvements.",
  },
  {
    title: "Security leadership",
    text: "Threat models, trust boundaries, access decisions, and secure delivery practices.",
  },
];

export default function AboutPage() {
  return (
    <Layout
      title="About"
      description="Background across software architecture, cloud engineering, and security engineering."
    >
      <section className="space-y-10 pb-10">
        <SectionHeader
          eyebrow="About"
          title="Architecture, cloud, and security work presented through case studies"
          description="This site brings together projects, diagrams, and technical writing in a format that is easy to browse and easy to keep updated."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Focus areas</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The work here centers on target architecture, cloud platforms, modern delivery, and secure system design. The goal is to make technical decisions, trade-offs, and outcomes visible without overexplaining them.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <Pill key={strength}>{strength}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Current themes</h2>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              <li>• Software architecture and system design</li>
              <li>• Cloud platform foundations and delivery patterns</li>
              <li>• Security architecture, threat modeling, and access design</li>
              <li>• Product thinking across implementation and operations</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {focusCards.map((card) => (
            <article key={card.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
