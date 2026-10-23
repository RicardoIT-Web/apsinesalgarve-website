import PageHead from "../components/PageHead.jsx";
import PortArt from "../components/PortArt.jsx";
import { asset } from "../asset.js";
import { Link, useContent, useLang } from "../i18n.jsx";

export default function Ports() {
  const { PORTS, PORT_IDS } = useContent();
  const { t } = useLang();
  return (
    <div className="page">
      <PageHead crumbs={[[t("Portos", "Ports")]]} title={t("Três portos, uma rede.", "Three ports, one network.")} lede={t("Os Portos de Sines e do Algarve têm como hinterland direto toda a zona sul e centro de Portugal, posicionando-se de forma muito competitiva nas regiões espanholas da Extremadura e da Andalucía e em todo o corredor até Madrid.", "The Ports of Sines and the Algarve serve all of southern and central Portugal directly, and are highly competitive in the Spanish regions of Extremadura and Andalusia and along the whole corridor to Madrid.")} />
      <div className="wrap">
        <div className="bento">
          {PORT_IDS.map((id, i) => {
            const p = PORTS[id];
            return (
              <Link key={id} to={"/portos/" + id} className={"tile tile-link " + (i === 0 ? "dark c-12" : "c-6")} style={{ minHeight: i === 0 ? "340px" : "300px" }}>
                <span className="portlogo" style={{ alignSelf: "flex-start" }}><img src={asset(`brand/${id}.png`)} alt="" /></span>
                <span className="mono muted">{p.coord}</span>
                <h3 className="port-title">{t("Porto de ", "Port of ")}{p.name}</h3>
                <p className="muted" style={{ maxWidth: "44ch" }}>{p.short}</p>
                <div className="terminals">{p.terminals.map(x => <span className="pill" key={x}>{x}</span>)}</div>
                <span className="foot arrow-link">{t("Ver o porto", "View the port")}</span>
                <PortArt id={id} />
              </Link>
            );
          })}
        </div>
      </div>
      <section className="section">
        <div className="wrap two">
          <div className="tile"><span className="mono muted">{t("Ligações", "Connections")}</span><h3>{t("Ligações diretas semanais aos principais mercados mundiais.", "Direct weekly services to the world's main markets.")}</h3><p className="muted">{t("O Porto de Sines integra o Corredor Atlântico da Rede Transeuropeia de Transporte e tem forte intermodalidade marítimo-ferroviária para o hinterland.", "The Port of Sines is part of the Atlantic Corridor of the Trans-European Transport Network, with strong sea-rail links to its hinterland.")}</p></div>
          <div className="tile"><span className="mono muted">{t("Investimentos", "Investment")}</span><h3>{t("Molhe Leste, descarbonização e Agenda NEXUS", "East Breakwater, decarbonisation and the NEXUS Agenda")}</h3><p className="muted">{t("A 3ª fase de ampliação do Molhe Leste, a nova subestação de alta tensão e a mobilidade elétrica preparam Sines para o futuro.", "The third phase of the East Breakwater extension, the new high-voltage substation and electric mobility are getting Sines ready for the future.")}</p><div className="foot"><Link className="arrow-link" to="/noticias">{t("Notícias sobre investimentos", "Investment news")}</Link></div></div>
        </div>
      </section>
    </div>
  );
}
