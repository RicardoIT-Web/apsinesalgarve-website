import { useEffect, useState } from "react";
import PageHead from "../components/PageHead.jsx";
import { asset } from "../asset.js";
import { GALLERY, PORTS } from "../data/content.js";

const FILTERS = [["todos", "Todos"], ...Object.entries(PORTS).map(([id, p]) => [id, p.name])];

export default function Gallery() {
  const [filter, setFilter] = useState("todos");
  const [open, setOpen] = useState(-1);
  const photos = GALLERY.filter(g => filter === "todos" || g.port === filter);
  const shown = photos[open];
  const step = d => setOpen(i => (i + d + photos.length) % photos.length);

  useEffect(() => {
    if (open < 0) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, photos.length]);

  return (
    <div className="page">
      <PageHead crumbs={[["Galeria"]]} title="Galeria." lede="Imagens dos portos de Sines, Portimão e Faro.">
        <div className="seg" style={{ marginTop: "28px" }}>
          {FILTERS.map(([id, label]) => <button key={id} aria-pressed={filter === id} onClick={() => { setFilter(id); setOpen(-1); }}>{label}</button>)}
        </div>
      </PageHead>
      <div className="wrap">
        {photos.length ? (
          <div className="gallery">
            {photos.map((g, i) => (
              <button key={g.file} className="shot" onClick={() => setOpen(i)} aria-label={"Ampliar: " + g.caption}>
                <img src={asset("gallery/" + g.file)} alt={g.caption} loading="lazy" />
                <span>{g.caption}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="tile empty"><span className="mono muted">Em breve</span><p className="muted">Ainda não há imagens nesta galeria.</p></div>
        )}
      </div>
      {shown && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shown.caption} onClick={() => setOpen(-1)}>
          <figure onClick={e => e.stopPropagation()}>
            <img src={asset("gallery/" + shown.file)} alt={shown.caption} />
            <figcaption><span>{shown.caption}</span><span className="mono">{open + 1} / {photos.length}</span></figcaption>
          </figure>
          <button className="lb-btn lb-close" onClick={() => setOpen(-1)} aria-label="Fechar">✕</button>
          {photos.length > 1 && <>
            <button className="lb-btn lb-prev" onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Anterior">‹</button>
            <button className="lb-btn lb-next" onClick={e => { e.stopPropagation(); step(1); }} aria-label="Seguinte">›</button>
          </>}
        </div>
      )}
    </div>
  );
}
