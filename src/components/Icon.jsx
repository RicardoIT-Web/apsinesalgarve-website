const PATHS = {
  jul: "M4 6h16M4 12h16M4 18h10",
  cup: "M4 7h16v10H4zM8 11h4M8 14h7",
  gate: "M4 20V8l8-4 8 4v12M9 20v-6h6v6",
  stat: "M5 19V11M10 19V5M15 19v-8M20 19v-4",
  job: "M4 8h16v11H4zM9 8V5h6v3",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-3.5-3.5"
};

export default function Icon({ n, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[n]} />
    </svg>
  );
}

export function IconBox({ n }) {
  return <span className="ic"><Icon n={n} /></span>;
}
