import { Link, Navigate, useParams } from "react-router-dom";
import Ocean from "../components/Ocean.jsx";
import { asset } from "../asset.js";
import { PORTS, PORT_IDS } from "../data/content.js";

// Ports whose hero uses the light blue look with the faint emblem.
const LIGHT = ["sines", "portimao", "faro"];

const HEADLINES = {
  sines: "Escala global, porta de energia.",
  portimao: "A porta de entrada do Algarve.",
  faro: "Ao serviço da economia regional."
};

export default function PortPage() {
  const { id } = useParams();
  const p = PORTS[id];
  if (!p) return <Navigate to="/portos" replace />;
  const light = LIGHT.includes(id);
  const others = PORT_IDS.filter(x => x !== id);
  return (
    <div className="page">
      <div className="wrap" style={{ paddingTop: "28px" }}>
        <div className="crumbs"><Link to="/">Início</Link><span>/</span><Link to="/portos">Portos</Link><span>/</span><span>{p.name}</span></div>
        <section className={"port-hero" + (light ? " light" : "")}>
          {light && <span className="watermark" aria-hidden="true" style={{ "--mark": `url(${asset("brand/emblem.png")})` }} />}
          <div className="bgart"><Ocean glow={false} tint={p.tint} transparent={light} /></div>
          <div>
            <span className="portlogo" style={{ marginBottom: "22px" }}><img src={asset(`brand/${id}.png`)} alt={"Porto de " + p.name} /></span>
            <span className="mono" style={{ display: "block", color: "var(--on-deep-muted)" }}>{p.coord} · {p.tag}</span>
            <h1>Porto de {p.name}</h1>
            <p className="lede">{p.lead}</p>
          </div>
          <div className="specs">{p.specs.map(([k, v]) => <div className="spec" key={k}><span>{k}</span><b>{v}</b></div>)}</div>
        </section>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">Porquê {p.name}</span><h2>{HEADLINES[id]}</h2></div></div>
          <ul className="points">{p.points.map((t, i) => <li key={i}><span className="n">0{i + 1}</span><span>{t}</span></li>)}</ul>
          {id === "sines" && (
            <div className="tile dark" style={{ marginTop: "14px" }}>
              <span className="mono muted">Cinco terminais especializados</span>
              <div className="terminals">{p.terminals.map(t => <span className="pill" key={t}>{t}</span>)}</div>
              <p className="muted">Mais a Zona de Atividades Logísticas, o Porto de Pesca, o Porto de Recreio e a Praia Vasco da Gama.</p>
            </div>
          )}
          <div className="actions"><a className="btn btn-primary" href={p.link[1]}>{p.link[0]}</a><Link to="/estatisticas" className="btn btn-ghost">Estatísticas</Link></div>
        </div>
      </section>
      <section className="section pt0">
        <div className="wrap two">
          {others.map(o => (
            <Link key={o} to={"/portos/" + o} className="tile tile-link" style={{ minHeight: "180px" }}>
              <span className="mono muted">Também</span><h3>Porto de {PORTS[o].name}</h3><p className="muted">{PORTS[o].short}</p><span className="foot arrow-link">Ver o porto</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
