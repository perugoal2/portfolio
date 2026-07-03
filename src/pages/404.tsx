import Link from "next/link";

import { Layout } from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout
      title="404 — Off the blueprint"
      description="The page you were looking for is not on this sheet."
    >
      <section className="flex min-h-[60vh] flex-col justify-center py-10">
        <div className="flex items-center gap-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-bone-faint">
          <span className="text-signal">§404</span>
          <span>Not found</span>
          <span className="h-px flex-1 bg-line" />
          <span className="hidden sm:inline">Sheet missing</span>
        </div>

        <h1 className="headline mt-8 text-6xl sm:text-8xl">
          Off the
          <br />
          <span className="italic text-signal">blueprint.</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-8 text-bone-dim">
          This coordinate doesn&apos;t resolve to a page. The reference may have
          moved, or the link was drafted wrong.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link href="/" className="btn-signal inline-flex items-center gap-2 px-5 py-3">
            Back to index <span aria-hidden="true">→</span>
          </Link>
          <Link href="/projects" className="btn-ghost inline-flex items-center px-5 py-3">
            Browse work
          </Link>
        </div>
      </section>
    </Layout>
  );
}
