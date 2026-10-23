const WAVE = "M0 166c20 0 20-6 40-6s20 6 40 6 20-6 40-6 20 6 40 6 20-6 40-6 20 6 40 6 20-6 40-6";

// Simple line illustrations for the port cards.
export default function PortArt({ id }) {
  if (id === "sines") return (
    <svg className="art" viewBox="0 0 320 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2" opacity=".55"><path d="M40 160V40h8v120M48 48h90M120 48v40M44 40l40-24 40 24" /><path d="M170 160V60h8v100M178 66h80M240 66v34M174 60l34-20 34 20" /></g>
      <g fill="currentColor" opacity=".25"><rect x="10" y="132" width="300" height="10" rx="2" /><rect x="100" y="112" width="30" height="20" /><rect x="132" y="112" width="30" height="20" /><rect x="164" y="112" width="30" height="20" /><rect x="116" y="92" width="30" height="20" /><rect x="148" y="92" width="30" height="20" /></g>
      <path d={WAVE} stroke="var(--sun)" strokeWidth="2" fill="none" />
    </svg>
  );
  if (id === "portimao") return (
    <svg className="art" viewBox="0 0 320 180" aria-hidden="true">
      <g fill="currentColor" opacity=".28"><path d="M20 140h280l-24 22H44z" /><rect x="60" y="112" width="200" height="28" rx="3" /><rect x="90" y="88" width="140" height="24" rx="3" /><rect x="120" y="68" width="80" height="20" rx="3" /><rect x="176" y="44" width="16" height="24" /></g>
      <g fill="var(--portimao)">{[80, 100, 120, 140, 160, 180, 200, 220, 240].map(x => <circle key={x} cx={x} cy="126" r="3" />)}</g>
      <path d={WAVE} transform="translate(0 4)" stroke="currentColor" opacity=".5" strokeWidth="2" fill="none" />
    </svg>
  );
  return (
    <svg className="art" viewBox="0 0 320 180" aria-hidden="true">
      <g fill="currentColor" opacity=".26"><rect x="40" y="96" width="120" height="50" rx="3" /><path d="M40 96l60-26 60 26z" /><rect x="180" y="120" width="110" height="26" rx="3" /></g>
      <g fill="none" stroke="currentColor" strokeWidth="2" opacity=".5"><path d="M220 120V40h6v80M226 46h60M270 46v30M222 40l26-14 26 14" /></g>
      <path d={WAVE} transform="translate(0 -4)" stroke="var(--faro)" strokeWidth="2" fill="none" />
    </svg>
  );
}
