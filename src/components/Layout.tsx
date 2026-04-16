import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { siteProfile } from "@/lib/site";
import type { PropsWithChildren, ReactNode } from "react";

function HeaderIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white"
    >
      {children}
    </a>
  );
}

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

type LayoutProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function Layout({ title, description, children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${title} | Peru N`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(96,165,250,0.18),_transparent_25%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.14),_transparent_35%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
          <header className="sticky top-4 z-20 mb-10 rounded-full border border-white/10 bg-slate-900/75 px-4 py-3 backdrop-blur xl:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Peru N
              </Link>

              <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                {navigation.map((item) => {
                  const isHome = item.href === "/";
                  const isActive = isHome
                    ? router.pathname === item.href
                    : router.pathname === item.href || router.pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-full px-4 py-2 transition ${
                        isActive
                          ? "bg-cyan-400/15 text-cyan-200"
                          : "hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="ml-1 flex items-center gap-2">
                  <HeaderIconLink href={siteProfile.githubUrl} label="GitHub">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.596 2 12.266c0 4.535 2.865 8.383 6.839 9.741.5.096.682-.223.682-.495 0-.245-.009-.894-.014-1.754-2.782.618-3.37-1.388-3.37-1.388-.455-1.19-1.11-1.507-1.11-1.507-.908-.637.069-.624.069-.624 1.004.072 1.532 1.06 1.532 1.06.892 1.57 2.341 1.117 2.91.854.091-.664.349-1.118.635-1.375-2.221-.26-4.555-1.14-4.555-5.072 0-1.12.39-2.036 1.029-2.754-.103-.261-.446-1.31.098-2.73 0 0 .84-.277 2.75 1.052A9.32 9.32 0 0 1 12 6.84c.85.004 1.706.118 2.505.346 1.909-1.329 2.747-1.052 2.747-1.052.546 1.42.203 2.469.1 2.73.64.718 1.027 1.634 1.027 2.754 0 3.941-2.338 4.809-4.566 5.064.359.318.679.946.679 1.907 0 1.376-.012 2.486-.012 2.823 0 .275.18.596.688.494C19.138 20.646 22 16.799 22 12.266 22 6.596 17.523 2 12 2Z" />
                    </svg>
                  </HeaderIconLink>

                  <HeaderIconLink href={siteProfile.linkedinUrl} label="LinkedIn">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.88 3.3 4.97S4.17 6.94 5.25 6.94c1.09 0 1.97-.88 1.97-1.97C7.22 3.88 6.34 3 5.25 3Zm14.45 9.86c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.37 1.87V8.5H8.63c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.38 1.92-1.38 1.35 0 1.89 1.04 1.89 2.57V20h3.38v-7.14Z" />
                    </svg>
                  </HeaderIconLink>
                </div>

              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-16 border-t border-white/10 py-6 text-sm text-slate-400">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p>{siteProfile.headline}</p>
                <p className="mt-1 text-slate-500">Architecture case studies, real projects, and practical security thinking.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={siteProfile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={siteProfile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
