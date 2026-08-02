/**
 * River delta line illustration: one source on the left branching into six
 * curved channels, each terminating at a labelled node for a sector we serve.
 * Paths draw in on load (stroke-dashoffset), staggered; prefers-reduced-motion
 * users get the finished state immediately (see .delta-path in styles.css).
 */

const SECTORS = [
  { label: "Construction", y: 24 },
  { label: "Real Estate", y: 74 },
  { label: "Healthcare", y: 124 },
  { label: "Hospitality", y: 174 },
  { label: "Retail", y: 224 },
  { label: "SMEs", y: 274 },
];

const SOURCE_X = 24;
const SOURCE_Y = 149;
const END_X = 560;

export function RiverDelta({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 300"
      className={className}
      role="img"
      aria-label="A river delta branching from Nile Reach into six sectors: construction, real estate, healthcare, hospitality, retail and SMEs."
      fill="none"
    >
      <circle cx={SOURCE_X} cy={SOURCE_Y} r="5" fill="currentColor" />
      <circle cx={SOURCE_X} cy={SOURCE_Y} r="12" stroke="currentColor" strokeOpacity="0.35" />

      {SECTORS.map((s, i) => {
        const c1 = SOURCE_X + 180;
        const c2 = END_X - 190;
        const d = `M ${SOURCE_X + 12} ${SOURCE_Y} C ${c1} ${SOURCE_Y}, ${c2} ${s.y}, ${END_X} ${s.y}`;
        const delay = 120 + i * 130;
        return (
          <g key={s.label}>
            <path
              d={d}
              className="delta-path"
              stroke="currentColor"
              strokeOpacity={0.55}
              strokeWidth="1.25"
              strokeLinecap="round"
              style={{ animationDelay: `${delay}ms` }}
            />
            <circle
              cx={END_X}
              cy={s.y}
              r="3.5"
              fill="currentColor"
              className="delta-node"
              style={{ animationDelay: `${delay + 1200}ms` }}
            />
            <text
              x={END_X + 16}
              y={s.y + 4}
              className="delta-node"
              style={{ animationDelay: `${delay + 1300}ms` }}
              fill="currentColor"
              fontSize="12.5"
              fontFamily="'IBM Plex Mono', monospace"
              letterSpacing="1.6"
            >
              {s.label.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
