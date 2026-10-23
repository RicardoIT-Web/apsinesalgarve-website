import BrandLogo from "./BrandLogo.jsx";
import { SOCIAL } from "../data/content.js";
import { Link, useLang } from "../i18n.jsx";

export default function Footer() {
  const { t } = useLang();
  const columns = [
    [t("A APS", "About APS"), [[t("História", "History"), "/aps#historia"], [t("Órgãos Sociais", "Governing Bodies"), "/aps#orgaos"], [t("Governo da Sociedade", "Corporate Governance"), "/aps/governo"], [t("Galeria", "Gallery"), "/galeria"]]],
    [t("Portos", "Ports"), [[t("Porto de Sines", "Port of Sines"), "/portos/sines"], [t("Porto de Faro", "Port of Faro"), "/portos/faro"], [t("Porto de Portimão", "Port of Portimão"), "/portos/portimao"], [t("Estatísticas", "Statistics"), "/estatisticas"]]],
    [t("Serviços", "Services"), [["JUL", "/sistemas"], ["CUP", "/sistemas"], ["Express Gate", "/sistemas"], [t("Visitas", "Visits"), "/contactos/visitas"]]],
    [t("Comunicação", "Communication"), [[t("Notícias", "News"), "/noticias"], [t("Recrutamento", "Careers"), "/recrutamento"], [t("Contactos", "Contacts"), "/contactos"], [t("Reclamações e sugestões", "Complaints and suggestions"), "/contactos#formulario"]]]
  ];
  return (
    <footer>
      <div className="footbox">
        <div className="foot-top">
          <div>
            <BrandLogo />
            <p className="big" style={{ marginTop: "24px" }}>Sines. Faro. Portimão.<br />{t("Os portos do sul de Portugal.", "The ports of southern Portugal.")}</p>
            <p style={{ marginTop: "16px", maxWidth: "40ch" }}>APS - Administração dos Portos de Sines e do Algarve, S.A. · Rua do Porto Industrial, 7520-203 Sines · {t("NIPC", "Tax no.")} 501 208 950</p>
            <div className="social">{SOCIAL.map(([n, u]) => <a key={n} href={u}>{n}</a>)}</div>
          </div>
          {columns.map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>{links.map(([label, to]) => <li key={label}><Link to={to}>{label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© APS - Administração dos Portos de Sines e do Algarve, S.A. {new Date().getFullYear()}</span>
          <span>{t("Política de Privacidade · Reclamações · Exercício de direitos", "Privacy Policy · Complaints · Exercising your rights")}</span>
        </div>
      </div>
    </footer>
  );
}
