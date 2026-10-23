import { useParams } from "react-router-dom";
import Ocean from "../components/Ocean.jsx";
import { asset } from "../asset.js";
import { Link, Navigate, useContent, useLang } from "../i18n.jsx";

// Ports whose hero uses the light blue look with the faint emblem.
const LIGHT = ["sines", "portimao", "faro"];

const HEADLINES = {
  sines: ["Escala global, porta de energia.", "Global scale, energy gateway."],
  portimao: ["A porta de entrada do Algarve.", "The gateway to the Algarve."],
  faro: ["Ao serviço da economia regional.", "Serving the regional economy."]
};

export default function PortPage() {
  const { id } = useParams();
  const { PORTS, PORT_IDS } = useContent();
  const { t } = useLang();
  const p = PORTS[id];
  if (!p) return <Navigate to="/portos" replace />;
  const light = LIGHT.includes(id);
  const others = PORT_IDS.filter(x => x !== id);
  return (
    <div className="page">
      <div className="wrap" style={{ paddingTop: "28px" }}>
        <div className="crumbs"><Link to="/">{t("Início", "Home")}</Link><span>/</span><Link to="/portos">{t("Portos", "Ports")}</Link><span>/</span><span>{p.name}</span></div>
        <section className={"port-hero" + (light ? " light" : "")}>
          {light && <span className="watermark" aria-hidden="true" style={{ "--mark": `url(${asset("brand/emblem.png")})` }} />}
          <div className="bgart"><Ocean glow={false} tint={p.tint} transparent={light} /></div>
          <div>
            <span className="portlogo" style={{ marginBottom: "22px" }}><img src={asset(`brand/${id}.png`)} alt={t("Porto de ", "Port of ") + p.name} /></span>
            <span className="mono" style={{ display: "block", color: "var(--on-deep-muted)" }}>{p.coord} · {p.tag}</span>
            <h1>{t("Porto de ", "Port of ")}{p.name}</h1>
            <p className="lede">{p.lead}</p>
          </div>
          <div className="specs">{p.specs.map(([k, v]) => <div className="spec" key={k}><span>{k}</span><b>{v}</b></div>)}</div>
        </section>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">{t("Porquê ", "Why ")}{p.name}</span><h2>{t(...HEADLINES[id])}</h2></div></div>
          <ul className="points">{p.points.map((t, i) => <li key={i}><span className="n">0{i + 1}</span><span>{t}</span></li>)}</ul>
          {id === "sines" && (
            <div className="tile dark" style={{ marginTop: "14px" }}>
              <span className="mono muted">{t("Cinco terminais especializados", "Five specialised terminals")}</span>
              <div className="terminals">{p.terminals.map(t => <span className="pill" key={t}>{t}</span>)}</div>
              <p className="muted">{t("Mais a Zona de Atividades Logísticas, o Porto de Pesca, o Porto de Recreio e a Praia Vasco da Gama.", "Plus the Logistics Activities Zone, the Fishing Port, the Marina and Vasco da Gama Beach.")}</p>
            </div>
          )}
          <div className="actions">{p.link && <a className="btn btn-primary" href={p.link[1]}>{p.link[0]}</a>}<Link to="/galeria" className={"btn " + (p.link ? "btn-ghost" : "btn-primary")}>{t("Ver fotografias", "See photos")}</Link><Link to="/estatisticas" className="btn btn-ghost">{t("Estatísticas", "Statistics")}</Link></div>
        </div>
      </section>
      <section className="section pt0">
        <div className="wrap two">
          {others.map(o => (
            <Link key={o} to={"/portos/" + o} className="tile tile-link" style={{ minHeight: "180px" }}>
              <span className="mono muted">{t("Também", "Also")}</span><h3>{t("Porto de ", "Port of ")}{PORTS[o].name}</h3><p className="muted">{PORTS[o].short}</p><span className="foot arrow-link">{t("Ver o porto", "View the port")}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
