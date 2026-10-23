import PageHead from "../components/PageHead.jsx";
import { Link, useContent, useLang } from "../i18n.jsx";

export default function Governance() {
  const { GOV_DOCS } = useContent();
  const { t } = useLang();
  return (
    <div className="page">
      <PageHead crumbs={[[t("A APS", "About APS"), "/aps"], [t("Governo da Sociedade", "Corporate Governance")]]} title={t("Governo da Sociedade", "Corporate Governance")} lede={t("Estratégia, relatórios, ética e contratação pública: toda a informação de transparência da APS num só lugar.", "Strategy, reports, ethics and public procurement: all of APS's transparency information in one place.")} />
      <div className="wrap">
        {/* The documents still have to be added to this site; until then each row asks visitors to request it. */}
        <div className="list">{GOV_DOCS.map(d => <Link className="row" key={d} to="/contactos#formulario"><div className="t">{d}</div><span className="r">{t("Pedir documento →", "Request document →")}</span></Link>)}</div>
      </div>
    </div>
  );
}
