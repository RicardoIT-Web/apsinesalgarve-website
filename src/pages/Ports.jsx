import { Link } from "react-router-dom";
import PageHead from "../components/PageHead.jsx";
import PortArt from "../components/PortArt.jsx";
import { OLD, PORTS, PORT_IDS } from "../data/content.js";

export default function Ports() {
  return (
    <div className="page">
      <PageHead crumbs={[["Portos"]]} title="Três portos, uma rede." lede="Os Portos de Sines e do Algarve têm como hinterland direto toda a zona sul e centro de Portugal, posicionando-se de forma muito competitiva nas regiões espanholas da Extremadura e da Andalucía e em todo o corredor até Madrid." />
      <div className="wrap">
        <div className="bento">
          {PORT_IDS.map((id, i) => {
            const p = PORTS[id];
            return (
              <Link key={id} to={"/portos/" + id} className={"tile tile-link " + (i === 0 ? "dark c-12" : "c-6")} style={{ minHeight: i === 0 ? "340px" : "300px" }}>
                <span className="portlogo" style={{ alignSelf: "flex-start" }}><img src={`/brand/${id}.png`} alt="" /></span>
                <span className="mono muted">{p.coord}</span>
                <h3 className="port-title">Porto de {p.name}</h3>
                <p className="muted" style={{ maxWidth: "44ch" }}>{p.short}</p>
                <div className="terminals">{p.terminals.map(t => <span className="pill" key={t}>{t}</span>)}</div>
                <span className="foot arrow-link">Ver o porto</span>
                <PortArt id={id} />
              </Link>
            );
          })}
        </div>
      </div>
      <section className="section">
        <div className="wrap two">
          <div className="tile"><span className="mono muted">Ligações</span><h3>Ligações diretas semanais aos principais mercados mundiais.</h3><p className="muted">O Porto de Sines integra o Corredor Atlântico da Rede Transeuropeia de Transporte e tem forte intermodalidade marítimo-ferroviária para o hinterland.</p></div>
          <div className="tile"><span className="mono muted">Investimentos</span><h3>Molhe Leste, descarbonização e Agenda NEXUS</h3><p className="muted">A 3ª fase de ampliação do Molhe Leste, a nova subestação de alta tensão e a mobilidade elétrica preparam Sines para o futuro.</p><div className="foot"><a className="arrow-link" href={OLD + "/portos/"}>Investimentos</a></div></div>
        </div>
      </section>
    </div>
  );
}
