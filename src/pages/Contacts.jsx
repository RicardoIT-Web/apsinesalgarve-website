import PageHead from "../components/PageHead.jsx";
import Copy from "../components/Copy.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { Link, useLang } from "../i18n.jsx";

export default function Contacts() {
  const { t } = useLang();
  const coords = [[t("Edifício Sede", "Head Office"), "37°57′07″N 8°52′35″W"], [t("Edifício Técnico", "Technical Building"), "37°57′15″N 8°52′43″W"], ["ZALSINES", "37°56′39″N 8°51′16″W"], [t("Portaria do Porto de Faro", "Port of Faro gate"), "37°00′15″N 7°55′18″W"], [t("Portaria do Porto de Portimão", "Port of Portimão gate"), "37°07′36″N 8°31′51″W"]];
  return (
    <div className="page">
      <PageHead crumbs={[[t("Contactos", "Contacts")]]} title={t("Fale connosco.", "Get in touch.")} lede={t("Escolha o departamento certo e a sua mensagem chega diretamente à equipa responsável.", "Choose the right department and your message goes straight to the team in charge.")}>
        <div className="subnav"><Link to="/contactos/visitas">{t("Visitas ao porto", "Port visits")}</Link><Link to="/recrutamento">{t("Recrutamento", "Careers")}</Link><Link to="/contactos#formulario">{t("Reclamações e sugestões", "Complaints and suggestions")}</Link></div>
      </PageHead>
      <div className="wrap cgrid">
        <div className="stack">
          <div className="tile dark">
            <span className="mono muted">{t("Edifício Sede", "Head Office")}</span>
            <h3 className="addr">Rua do Porto Industrial<br />7520-203 Sines</h3>
            <p className="muted">Apartado 16, EC Sines · 7521-953 Sines · Portugal</p>
            <div className="stack-sm">
              <div className="inline"><a href="tel:+351269860600"><b>(+351) 269 860 600</b></a><Copy value="+351269860600" /></div>
              <div className="inline"><a href="mailto:geral@apsinesalgarve.pt"><b>geral@apsinesalgarve.pt</b></a><Copy value="geral@apsinesalgarve.pt" /></div>
              <span className="mono muted">Fax (+351) 269 860 690 · {t("NIPC", "Tax no.")} 501 208 950</span>
            </div>
          </div>
          <div className="tile">
            <span className="mono muted">{t("Coordenadas GPS", "GPS coordinates")}</span>
            <div className="list flat">{coords.map(([k, v]) => <div className="row" key={k}><span className="s">{k}</span><span className="r">{v}</span></div>)}</div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
