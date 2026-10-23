import PageHead from "../components/PageHead.jsx";
import { Link, useLang } from "../i18n.jsx";

const BOARD = [["Dr. Pedro do Ó Ramos", "Presidente do Conselho de Administração", "Chairman of the Board of Directors"], ["Dr.ª Fernanda Nunes", "Vogal Executiva", "Executive Director"], ["Eng. Jaime Puna", "Vogal Executivo", "Executive Director"]];
const initials = n => n.replace(/^(Dr\.ª|Dr\.|Eng\.)\s*/, "").split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("");

export default function About() {
  const { t } = useLang();
  const timeline = [
    ["1973", t("Começa a construção", "Construction begins"), t("Início das obras do Porto de Sines.", "Work starts on the Port of Sines.")],
    ["1977", t("Nasce a APS", "APS is founded"), t("Criada a 14 de dezembro como instituto público, para gerir o Terminal Petroleiro. Decreto-Lei Nº 508/77.", "Created on 14 December as a public institute to run the Oil Terminal. Decree-Law No. 508/77.")],
    ["1978", t("Primeiras mercadorias", "First cargo"), t("Início do registo de mercadorias movimentadas em Sines.", "Sines starts recording the cargo it handles.")],
    ["1998", "APS, S.A.", t("Sociedade anónima de capitais públicos, estruturada para concessões a operadores privados. Decreto-Lei Nº 337/98.", "A state-owned public limited company, set up to grant concessions to private operators. Decree-Law No. 337/98.")],
    ["2014", t("Sines e Algarve", "Sines and the Algarve"), t("Transferência dos portos de Faro e de Portimão. Decreto-Lei Nº 44/2014.", "The ports of Faro and Portimão are transferred to APS. Decree-Law No. 44/2014.")]
  ];
  const company = [[t("Firma", "Company name"), "APS - Administração dos Portos de Sines e do Algarve, S.A."], [t("Sede", "Head office"), "Rua do Porto Industrial, 7520-203 Sines"], [t("NIPC", "Tax no."), "501 208 950"], [t("Capital social", "Share capital"), t("80.000.000 €", "€80,000,000")]];
  return (
    <div className="page">
      <PageHead crumbs={[[t("A APS", "About APS")]]} title={t("Quase cinco décadas a construir o porto.", "Almost five decades building the port.")} lede={t("A APS, S.A. tem por objeto a administração dos portos de Sines, de Faro e de Portimão, visando a sua exploração económica, conservação e desenvolvimento, abrangendo o exercício das competências e prerrogativas de autoridade portuária.", "APS, S.A. manages the ports of Sines, Faro and Portimão, overseeing their commercial operation, upkeep and development, and exercises the powers of the port authority.")}>
        <div className="subnav"><Link to="/aps#historia">{t("História", "History")}</Link><Link to="/aps#orgaos">{t("Órgãos Sociais", "Governing Bodies")}</Link><Link to="/aps#estrategia">{t("Estratégia", "Strategy")}</Link><Link to="/aps/governo">{t("Governo da Sociedade", "Corporate Governance")}</Link><Link to="/aps#identificacao">{t("Identificação", "Company details")}</Link></div>
      </PageHead>

      <section className="section" id="historia" style={{ paddingTop: "8px" }}>
        <div className="wrap"><div className="tl">
          {timeline.map(([y, h, p]) => <div className="tile" key={y}><span className="yr">{y}</span><h3 style={{ fontSize: "1.05rem" }}>{h}</h3><p className="muted" style={{ fontSize: ".9rem" }}>{p}</p></div>)}
        </div></div>
      </section>

      <section className="section pt0" id="orgaos">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">{t("Órgãos Sociais", "Governing Bodies")}</span><h2>{t("Conselho de Administração", "Board of Directors")}</h2></div><p>{t("A APS tem como órgãos sociais a Assembleia Geral, o Conselho de Administração e o Conselho Fiscal.", "The governing bodies of APS are the General Meeting, the Board of Directors and the Supervisory Board.")}</p></div>
          <div className="people">{BOARD.map(([n, pt, en]) => <div className="person" key={n}><span className="avatar">{initials(n)}</span><div><b>{n}</b><span>{t(pt, en)}</span></div></div>)}</div>
          <div className="list" style={{ marginTop: "14px" }}>
            <div className="row"><div><div className="t">{t("Assembleia Geral", "General Meeting")}</div><div className="s">{t("Presidente da Mesa: Presidente da Câmara Municipal de Sines · Secretário: Dra. Maria Teresa Figueiredo Alves Carvalho", "Chair: Mayor of Sines · Secretary: Dra. Maria Teresa Figueiredo Alves Carvalho")}</div></div></div>
            <div className="row"><div><div className="t">{t("Conselho Fiscal", "Supervisory Board")}</div><div className="s">{t("Presidente: Dr. Roberto José Lopes Cortegano · Vogais: Dra. Paula Maria Marques Serralheiro Costa Agostinho, Dra. Ana Elisabete de Assunção Militão · Suplente: Dr. Danilo Manuel Fontinha Costa", "Chair: Dr. Roberto José Lopes Cortegano · Members: Dra. Paula Maria Marques Serralheiro Costa Agostinho, Dra. Ana Elisabete de Assunção Militão · Alternate: Dr. Danilo Manuel Fontinha Costa")}</div></div></div>
            <div className="row"><div><div className="t">{t("Revisor Oficial de Contas", "Statutory Auditor")}</div><div className="s">{t("BDO & Associados – SROC, Lda., representada por Dr. António José Correia de Pina Fonseca · Suplente: João António de Carvalho Careca", "BDO & Associados – SROC, Lda., represented by Dr. António José Correia de Pina Fonseca · Alternate: João António de Carvalho Careca")}</div></div></div>
          </div>
        </div>
      </section>

      <section className="section pt0" id="estrategia">
        <div className="wrap"><div className="bento">
          <div className="tile dark c-7">
            <span className="mono muted">{t("Opções Estratégicas 2020-2030", "Strategic Options 2020-2030")}</span>
            <h3 className="tile-title">{t("Um Porto para o Mundo, trazendo o Mundo para o Porto.", "A Port for the World, bringing the World to the Port.")}</h3>
            <p className="muted">{t("Três eixos estratégicos para reforçar a centralidade e a conectividade, com um compromisso firme com a sustentabilidade ambiental e social, num futuro moderno, inovador, digital e eficiente.", "Three strategic pillars to strengthen centrality and connectivity, with a firm commitment to environmental and social sustainability, towards a modern, innovative, digital and efficient future.")}</p>
            <div className="foot"><Link className="btn btn-light" to="/aps/governo">{t("Governo da Sociedade", "Corporate Governance")}</Link></div>
          </div>
          <div className="tile cobalt c-5"><span className="mono muted">{t("Meta", "Target")}</span><div className="big">8%</div><p className="muted">{t("de quota no comércio externo ibérico, através da captação de carga.", "share of Iberian foreign trade, by attracting new cargo.")}</p></div>
          <div className="tile c-6"><span className="mono muted">{t("Meta", "Target")}</span><div className="big">40%+</div><p className="muted">{t("dos movimentos do porto vindos de novas atividades económicas.", "of port traffic coming from new economic activities.")}</p></div>
          <div className="tile c-6" id="identificacao">
            <span className="mono muted">{t("Identificação da empresa", "Company details")}</span>
            <div className="list flat">{company.map(([k, v]) => <div className="row" key={k}><span className="s">{k}</span><span className="r wrap-text">{v}</span></div>)}</div>
          </div>
        </div></div>
      </section>
    </div>
  );
}
