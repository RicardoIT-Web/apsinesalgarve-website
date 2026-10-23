import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo.jsx";
import { OLD, SOCIAL } from "../data/content.js";

const COLUMNS = [
  ["A APS", [["História", "/aps"], ["Órgãos Sociais", "/aps"], ["Governo da Sociedade", "/aps/governo"], ["Revista da APS", OLD + "/aps/revista-da-aps/"]]],
  ["Portos", [["Porto de Sines", "/portos/sines"], ["Porto de Faro", "/portos/faro"], ["Porto de Portimão", "/portos/portimao"], ["Estatísticas", "/estatisticas"]]],
  ["Serviços", [["JUL", "/sistemas"], ["CUP", "/sistemas"], ["Express Gate", "/sistemas"], ["Visitas", "/contactos/visitas"]]],
  ["Comunicação", [["Notícias", "/noticias"], ["Recrutamento", "/recrutamento"], ["Contactos", "/contactos"], ["Canal de Denúncias", OLD + "/localização-e-comunicação/"]]]
];

export default function Footer() {
  return (
    <footer>
      <div className="footbox">
        <div className="foot-top">
          <div>
            <BrandLogo />
            <p className="big" style={{ marginTop: "24px" }}>Sines. Faro. Portimão.<br />Os portos do sul de Portugal.</p>
            <p style={{ marginTop: "16px", maxWidth: "40ch" }}>APS - Administração dos Portos de Sines e do Algarve, S.A. · Rua do Porto Industrial, 7520-203 Sines · NIPC 501 208 950</p>
            <div className="social">{SOCIAL.map(([n, u]) => <a key={n} href={u}>{n}</a>)}</div>
          </div>
          {COLUMNS.map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>{links.map(([label, to]) => <li key={label}>{to.startsWith("http") ? <a href={to}>{label}</a> : <Link to={to}>{label}</Link>}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© APS - Administração dos Portos de Sines e do Algarve, S.A. {new Date().getFullYear()}</span>
          <span>Política de Privacidade · Reclamações · Exercício de direitos</span>
        </div>
      </div>
    </footer>
  );
}
