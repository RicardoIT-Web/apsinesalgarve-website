import { useState } from "react";
import PageHead from "../components/PageHead.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { useContent, useLang } from "../i18n.jsx";

const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function News() {
  const { NEWS, NEWS_CATS } = useContent();
  const { t } = useLang();
  const all = NEWS_CATS[0];
  const [cat, setCat] = useState(all);
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(12);
  const shown = NEWS.filter(n => (cat === all || n.c === cat) && (!q || norm(n.t).includes(norm(q))));
  return (
    <div className="page">
      <PageHead crumbs={[[t("Notícias", "News")]]} title={t("Notícias", "News")} lede={t(`${NEWS.length} notícias publicadas em 2026 pelos Portos de Sines e do Algarve.`, `${NEWS.length} news stories published in 2026 by the Ports of Sines and the Algarve.`)} />
      <div className="wrap">
        <div className="toolbar">
          <div className="seg" role="group" aria-label={t("Filtrar", "Filter")}>
            {NEWS_CATS.map(c => <button type="button" key={c} aria-pressed={cat === c} onClick={() => { setCat(c); setLimit(12); }}>{c}</button>)}
          </div>
          <div style={{ flex: "1 1 240px", maxWidth: "360px" }}>
            <input className="input" id="news-search" type="search" placeholder={t("Pesquisar notícias", "Search news")} aria-label={t("Pesquisar notícias", "Search news")} value={q} onChange={e => { setQ(e.target.value); setLimit(12); }} />
          </div>
        </div>
        {shown.length
          ? <div className="news-grid">{shown.slice(0, limit).map(n => <NewsCard key={n.i} n={n} />)}</div>
          : <p className="muted">{t(`Nenhuma notícia corresponde a “${q}”. Experimente outra palavra.`, `No news matches “${q}”. Try another word.`)}</p>}
        {shown.length > limit && <div className="more"><button type="button" className="btn btn-ghost" onClick={() => setLimit(limit + 12)}>{t("Mostrar mais", "Show more")} ({shown.length - limit})</button></div>}
      </div>
    </div>
  );
}
