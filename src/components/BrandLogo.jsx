// Logo artwork taken from the current site. Replace the files in public/brand
// with the official ones from the Manual de Normas Gráficas when available.
export default function BrandLogo() {
  return (
    <span className="brandlogo">
      <img className="em" src="/brand/emblem.png" alt="" />
      <span
        className="wm"
        role="img"
        aria-label="APS - Administração dos Portos de Sines e do Algarve S.A."
        style={{ "--wm": "url(/brand/wordmark.png)" }}
      />
    </span>
  );
}
