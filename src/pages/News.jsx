import { useState } from "react";
import PageHead from "../components/PageHead.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { NEWS } from "../data/content.js";

const CATS = ["Todas", "Sines", "Algarve", "Institucional", "Avisos"];
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function News() {
  const [cat, setCat] = useState("Todas");
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(12);
  const shown = NEWS.filter(n => (cat === "Todas" || n.c === cat) && (!q || norm(n.t).includes(norm(q))));
  return (
    <div className="page">
      <PageHead crumbs={[["Notícias"]]} title="Notícias" lede={`${NEWS.length} notícias publicadas em 2026 pelos Portos de Sines e do Algarve.`} />
      <div className="wrap">
        <div className="toolbar">
          <div className="seg" role="group" aria-label="Filtrar">
            {CATS.map(c => <button type="button" key={c} aria-pressed={cat === c} onClick={() => { setCat(c); setLimit(12); }}>{c}</button>)}
          </div>
          <div style={{ flex: "1 1 240px", maxWidth: "360px" }}>
            <input className="input" id="news-search" type="search" placeholder="Pesquisar notícias" aria-label="Pesquisar notícias" value={q} onChange={e => { setQ(e.target.value); setLimit(12); }} />
          </div>
        </div>
        {shown.length
          ? <div className="news-grid">{shown.slice(0, limit).map(n => <NewsCard key={n.i} n={n} />)}</div>
          : <p className="muted">Nenhuma notícia corresponde a “{q}”. Experimente outra palavra.</p>}
        {shown.length > limit && <div className="more"><button type="button" className="btn btn-ghost" onClick={() => setLimit(limit + 12)}>Mostrar mais ({shown.length - limit})</button></div>}
      </div>
    </div>
  );
}
