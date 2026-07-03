import Link from "next/link";

import { Layout } from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout
      title="404 — Page not found"
      description="The page you were looking for could not be found."
    >
      <section className="flex min-h-[60vh] flex-col justify-center py-10">
        <div className="flex items-center gap-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-bone-faint">
          <span className="text-signal">§404</span>
          <span>Page not found</span>
          <span className="h-px flex-1 bg-line" />
          <span className="hidden sm:inline">Error</span>
        </div>

        <h1 className="headline mt-8 text-6xl sm:text-8xl">
          Page not
          <br />
          <span className="italic text-signal">found.</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-8 text-bone-dim">
          The page you&apos;re looking for may have moved or no longer exists.
          Check the link, or head back home.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link href="/" className="btn-signal inline-flex items-center gap-2 px-5 py-3">
            Back to home <span aria-hidden="true">→</span>
          </Link>
          <Link href="/projects" className="btn-ghost inline-flex items-center px-5 py-3">
            Browse projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
