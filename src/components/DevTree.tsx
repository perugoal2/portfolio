import type { CSSProperties } from "react";

// Deterministic PRNG so server and client generate the identical tree
// (no hydration mismatch). Seed is fixed.
function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Seg = { x1: number; y1: number; x2: number; y2: number; w: number; delay: number };
type Leaf = { x: number; y: number; r: number; delay: number; spark: boolean };

const MAX_DEPTH = 6;

function buildTree() {
  const rnd = mulberry32(20260704);
  const segs: Seg[] = [];
  const leaves: Leaf[] = [];
  let leafIdx = 0;

  const addLeaves = (x: number, y: number, count: number, spreadR: number, baseDelay: number) => {
    for (let i = 0; i < count; i++) {
      const a = rnd() * Math.PI * 2;
      const d = rnd() * spreadR;
      leaves.push({
        x: x + Math.cos(a) * d,
        y: y + Math.sin(a) * d * 0.85,
        r: 1.7 + rnd() * 3.3,
        delay: baseDelay + 0.45 + rnd() * 0.8,
        spark: leafIdx++ % 10 === 0,
      });
    }
  };

  const grow = (x: number, y: number, ang: number, len: number, w: number, depth: number) => {
    const x2 = x + Math.cos(ang) * len;
    const y2 = y - Math.sin(ang) * len;
    const delay = (MAX_DEPTH - depth) * 0.1;
    segs.push({ x1: x, y1: y, x2, y2, w, delay });

    if (depth <= 0) {
      addLeaves(x2, y2, 6 + Math.floor(rnd() * 5), 26, delay);
      return;
    }
    // foliage along the canopy branches for lushness
    if (depth <= 3 && rnd() < 0.66) addLeaves(x2, y2, 2 + Math.floor(rnd() * 3), 15, delay);

    const kids = rnd() < 0.24 && depth <= 3 ? 3 : 2;
    const spread = 0.4 + rnd() * 0.34;
    for (let i = 0; i < kids; i++) {
      const t = i / (kids - 1) - 0.5;
      const na = ang + t * spread * 2 + (rnd() - 0.5) * 0.22;
      const nl = len * (0.72 + rnd() * 0.12);
      grow(x2, y2, na, nl, w * 0.7, depth - 1);
    }
  };

  grow(320, 400, Math.PI / 2, 76, 13, MAX_DEPTH);
  return { segs, leaves };
}

const TREE = buildTree();

export function DevTree({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`dev-tree ${className}`}
      viewBox="86 84 468 322"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id="devtree-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#5a2fce" />
          <stop offset="0.55" stopColor="#8b5cff" />
          <stop offset="1" stopColor="#c4b2ff" />
        </linearGradient>
        <radialGradient id="devtree-leaf" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e5dcff" stopOpacity="1" />
          <stop offset="0.35" stopColor="#c8b8ff" stopOpacity="0.95" />
          <stop offset="0.7" stopColor="#8b5cff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#8b5cff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="dev-tree__branches" stroke="url(#devtree-grad)" strokeLinecap="round">
        {TREE.segs.map((s, i) => (
          <line
            key={i}
            className="dev-tree__branch"
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            strokeWidth={Math.max(0.8, s.w)}
            pathLength={1}
            style={{ "--delay": `${s.delay}s` } as CSSProperties}
          />
        ))}
      </g>
      <g className="dev-tree__leaves" fill="url(#devtree-leaf)">
        {TREE.leaves.map((l, i) => (
          <circle
            key={i}
            className={`dev-tree__leaf${l.spark ? " dev-tree__leaf--spark" : ""}`}
            cx={l.x}
            cy={l.y}
            r={l.r}
            style={{ "--delay": `${l.delay}s` } as CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}
