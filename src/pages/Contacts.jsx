import { Link } from "react-router-dom";
import PageHead from "../components/PageHead.jsx";
import Copy from "../components/Copy.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { OLD } from "../data/content.js";

const COORDS = [["Edifício Sede", "37°57′07″N 8°52′35″W"], ["Edifício Técnico", "37°57′15″N 8°52′43″W"], ["ZALSINES", "37°56′39″N 8°51′16″W"], ["Portaria do Porto de Faro", "37°00′15″N 7°55′18″W"], ["Portaria do Porto de Portimão", "37°07′36″N 8°31′51″W"]];

export default function Contacts() {
  return (
    <div className="page">
      <PageHead crumbs={[["Contactos"]]} title="Fale connosco." lede="Escolha o departamento certo e a sua mensagem chega diretamente à equipa responsável.">
        <div className="subnav"><Link to="/contactos/visitas">Visitas ao porto</Link><Link to="/recrutamento">Recrutamento</Link><a href={OLD + "/localização-e-comunicação/"}>Reclamações e sugestões</a><a href={OLD + "/localização-e-comunicação/"}>Canal de Denúncias</a></div>
      </PageHead>
      <div className="wrap cgrid">
        <div className="stack">
          <div className="tile dark">
            <span className="mono muted">Edifício Sede</span>
            <h3 className="addr">Rua do Porto Industrial<br />7520-203 Sines</h3>
            <p className="muted">Apartado 16, EC Sines · 7521-953 Sines · Portugal</p>
            <div className="stack-sm">
              <div className="inline"><a href="tel:+351269860600"><b>(+351) 269 860 600</b></a><Copy value="+351269860600" /></div>
              <div className="inline"><a href="mailto:geral@apsinesalgarve.pt"><b>geral@apsinesalgarve.pt</b></a><Copy value="geral@apsinesalgarve.pt" /></div>
              <span className="mono muted">Fax (+351) 269 860 690 · NIPC 501 208 950</span>
            </div>
          </div>
          <div className="tile">
            <span className="mono muted">Coordenadas GPS</span>
            <div className="list flat">{COORDS.map(([k, v]) => <div className="row" key={k}><span className="s">{k}</span><span className="r">{v}</span></div>)}</div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
