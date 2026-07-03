import type { PropsWithChildren } from "react";

export function Pill({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-bone-dim transition hover:border-signal/40 hover:text-bone">
      <span className="h-1 w-1 bg-signal" aria-hidden="true" />
      {children}
    </span>
  );
}
