import PageHead from "../components/PageHead.jsx";
import { GOV_DOCS, OLD } from "../data/content.js";

export default function Governance() {
  return (
    <div className="page">
      <PageHead crumbs={[["A APS", "/aps"], ["Governo da Sociedade"]]} title="Governo da Sociedade" lede="Estratégia, relatórios, ética e contratação pública: toda a informação de transparência da APS num só lugar." />
      <div className="wrap">
        <div className="list">{GOV_DOCS.map(d => <a className="row" key={d} href={OLD + "/governo-da-sociedade/"}><div className="t">{d}</div><span className="r">Abrir →</span></a>)}</div>
      </div>
    </div>
  );
}
