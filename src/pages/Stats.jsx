import PageHead from "../components/PageHead.jsx";
import { OLD } from "../data/content.js";
import { useLang } from "../i18n.jsx";

// The report PDFs are still served from the current site's file store until they are
// copied into this site (public/docs).
const SINES = [["jan-jun 2026", "/media/5366/estatística-do-porto-de-sines-jan-jun-20262025.pdf", "200 KB"], ["jan-mar 2026", "/media/5313/estatística-do-porto-de-sines-jan-mar-20262025.pdf", "199 KB"]];
const ALGARVE = [["jan-jun 2026", "/media/5367/estatística-dos-portos-de-faro-portimão-jan-jun-20262025.pdf", "308 KB"], ["jan-mar 2026", "/media/5314/estatística-dos-portos-de-faro-portimão-jan-mar-20262025.pdf", "304 KB"]];
const HISTORY = [[["Porto de Sines 1978-2021", "Port of Sines 1978-2021"], "/media/4059/merc_sines1978_2021_pt.pdf", "960 KB"], [["Porto de Faro 2000-2021", "Port of Faro 2000-2021"], "/media/4028/mercadorias_faro_2000_2021_pt.pdf", "552 KB"], [["Porto de Portimão 2000-2021", "Port of Portimão 2000-2021"], "/media/4029/mercadorias_portimão_2000_2021_pt.pdf", "540 KB"]];
const EN_MONTHS = { jan: "Jan", mar: "Mar", jun: "Jun" };

function Reports({ rows, note }) {
  const { lang, t } = useLang();
  const label = x => Array.isArray(x) ? t(...x) : lang === "en" ? x.replace(/[a-z]{3}/g, m => EN_MONTHS[m] || m) : x;
  return (
    <div className="list">
      {rows.map(([x, path, size]) => (
        <a className="row" key={path} href={OLD + path}>
          <div><div className="t">{label(x)}</div>{note && <div className="s">{note}</div>}</div>
          <span className="r">PDF{lang === "en" ? " (PT)" : ""} · {size}</span>
        </a>
      ))}
    </div>
  );
}

export default function Stats() {
  const { t } = useLang();
  const note = t("Comparação com o período homólogo", "Compared with the same period last year");
  return (
    <div className="page">
      <PageHead crumbs={[[t("Estatísticas", "Statistics")]]} title={t("Estatísticas", "Statistics")} lede={t("Navios, mercadorias e passageiros. A estatística mensal é publicada por trimestre, com comparação face ao ano anterior.", "Ships, cargo and passengers. Monthly statistics are published every quarter, compared with the previous year.")} />
      <div className="wrap two">
        <div className="tile"><span className="mono muted">{t("Estatística mensal", "Monthly statistics")}</span><h3>{t("Porto de Sines", "Port of Sines")}</h3><Reports rows={SINES} note={note} /></div>
        <div className="tile"><span className="mono muted">{t("Estatística mensal", "Monthly statistics")}</span><h3>{t("Portos do Algarve · Faro e Portimão", "Algarve ports · Faro and Portimão")}</h3><Reports rows={ALGARVE} note={note} /></div>
      </div>
      <section className="section" style={{ paddingTop: "14px" }}>
        <div className="wrap"><div className="tile"><span className="mono muted">{t("Séries históricas", "Historical series")}</span><h3>{t("Evolução das mercadorias movimentadas", "Cargo handled over time")}</h3><Reports rows={HISTORY} /></div></div>
      </section>
    </div>
  );
}
