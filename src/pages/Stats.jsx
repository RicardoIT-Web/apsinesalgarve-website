import PageHead from "../components/PageHead.jsx";
import { OLD } from "../data/content.js";

const SINES = [["jan-jun 2026", "/media/5366/estatística-do-porto-de-sines-jan-jun-20262025.pdf", "200 KB"], ["jan-mar 2026", "/media/5313/estatística-do-porto-de-sines-jan-mar-20262025.pdf", "199 KB"], ["jan-dez 2025", "/estatísticas/estatística-mensal/porto-de-sines/", "304 KB"]];
const ALGARVE = [["jan-jun 2026", "/media/5367/estatística-dos-portos-de-faro-portimão-jan-jun-20262025.pdf", "308 KB"], ["jan-mar 2026", "/media/5314/estatística-dos-portos-de-faro-portimão-jan-mar-20262025.pdf", "304 KB"], ["jan-dez 2025", "/estatísticas/estatística-mensal/portos-do-algarve/", "399 KB"]];
const HISTORY = [["Porto de Sines 1978-2021", "/media/4059/merc_sines1978_2021_pt.pdf", "960 KB"], ["Porto de Faro 2000-2021", "/media/4028/mercadorias_faro_2000_2021_pt.pdf", "552 KB"], ["Porto de Portimão 2000-2021", "/media/4029/mercadorias_portimão_2000_2021_pt.pdf", "540 KB"]];

function Reports({ rows, note }) {
  return (
    <div className="list">
      {rows.map(([t, path, size]) => (
        <a className="row" key={t} href={OLD + path}>
          <div><div className="t">{t}</div>{note && <div className="s">{note}</div>}</div>
          <span className="r">PDF · {size}</span>
        </a>
      ))}
    </div>
  );
}

export default function Stats() {
  return (
    <div className="page">
      <PageHead crumbs={[["Estatísticas"]]} title="Estatísticas" lede="Navios, mercadorias e passageiros. A estatística mensal é publicada por trimestre, com comparação face ao ano anterior.">
        <div className="subnav"><a href={OLD + "/estatísticas/"}>Navios</a><a href={OLD + "/estatísticas/mercadorias/"}>Mercadorias</a><a href={OLD + "/estatísticas/"}>Passageiros</a></div>
      </PageHead>
      <div className="wrap two">
        <div className="tile"><span className="mono muted">Estatística mensal</span><h3>Porto de Sines</h3><Reports rows={SINES} note="Comparação com o período homólogo" /></div>
        <div className="tile"><span className="mono muted">Estatística mensal</span><h3>Portos do Algarve · Faro e Portimão</h3><Reports rows={ALGARVE} note="Comparação com o período homólogo" /></div>
      </div>
      <section className="section" style={{ paddingTop: "14px" }}>
        <div className="wrap"><div className="tile"><span className="mono muted">Séries históricas</span><h3>Evolução das mercadorias movimentadas</h3><Reports rows={HISTORY} /></div></div>
      </section>
    </div>
  );
}
