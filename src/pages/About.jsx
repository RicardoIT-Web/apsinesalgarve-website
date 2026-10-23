import { Link } from "react-router-dom";
import PageHead from "../components/PageHead.jsx";
import { OLD } from "../data/content.js";

const TIMELINE = [
  ["1973", "Começa a construção", "Início das obras do Porto de Sines."],
  ["1977", "Nasce a APS", "Criada a 14 de dezembro como instituto público, para gerir o Terminal Petroleiro. Decreto-Lei Nº 508/77."],
  ["1978", "Primeiras mercadorias", "Início do registo de mercadorias movimentadas em Sines."],
  ["1998", "APS, S.A.", "Sociedade anónima de capitais públicos, estruturada para concessões a operadores privados. Decreto-Lei Nº 337/98."],
  ["2014", "Sines e Algarve", "Transferência dos portos de Faro e de Portimão. Decreto-Lei Nº 44/2014."]
];
const BOARD = [["Dr. Pedro do Ó Ramos", "Presidente do Conselho de Administração"], ["Dr.ª Fernanda Nunes", "Vogal Executiva"], ["Eng. Jaime Puna", "Vogal Executivo"]];
const COMPANY = [["Firma", "APS - Administração dos Portos de Sines e do Algarve, S.A."], ["Sede", "Rua do Porto Industrial, 7520-203 Sines"], ["NIPC", "501 208 950"], ["Capital social", "80.000.000 €"]];
const initials = n => n.replace(/^(Dr\.ª|Dr\.|Eng\.)\s*/, "").split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("");

export default function About() {
  return (
    <div className="page">
      <PageHead crumbs={[["A APS"]]} title="Quase cinco décadas a construir o porto." lede="A APS, S.A. tem por objeto a administração dos portos de Sines, de Faro e de Portimão, visando a sua exploração económica, conservação e desenvolvimento, abrangendo o exercício das competências e prerrogativas de autoridade portuária.">
        <div className="subnav"><a href="#historia">História</a><a href="#orgaos">Órgãos Sociais</a><a href="#estrategia">Estratégia</a><Link to="/aps/governo">Governo da Sociedade</Link><a href="#identificacao">Identificação</a></div>
      </PageHead>

      <section className="section" id="historia" style={{ paddingTop: "8px" }}>
        <div className="wrap"><div className="tl">
          {TIMELINE.map(([y, h, p]) => <div className="tile" key={y}><span className="yr">{y}</span><h3 style={{ fontSize: "1.05rem" }}>{h}</h3><p className="muted" style={{ fontSize: ".9rem" }}>{p}</p></div>)}
        </div></div>
      </section>

      <section className="section pt0" id="orgaos">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">Órgãos Sociais</span><h2>Conselho de Administração</h2></div><p>A APS tem como órgãos sociais a Assembleia Geral, o Conselho de Administração e o Conselho Fiscal.</p></div>
          <div className="people">{BOARD.map(([n, r]) => <div className="person" key={n}><span className="avatar">{initials(n)}</span><div><b>{n}</b><span>{r}</span></div></div>)}</div>
          <div className="list" style={{ marginTop: "14px" }}>
            <div className="row"><div><div className="t">Assembleia Geral</div><div className="s">Presidente da Mesa: Presidente da Câmara Municipal de Sines · Secretário: Dra. Maria Teresa Figueiredo Alves Carvalho</div></div></div>
            <div className="row"><div><div className="t">Conselho Fiscal</div><div className="s">Presidente: Dr. Roberto José Lopes Cortegano · Vogais: Dra. Paula Maria Marques Serralheiro Costa Agostinho, Dra. Ana Elisabete de Assunção Militão · Suplente: Dr. Danilo Manuel Fontinha Costa</div></div></div>
            <div className="row"><div><div className="t">Revisor Oficial de Contas</div><div className="s">BDO & Associados – SROC, Lda., representada por Dr. António José Correia de Pina Fonseca · Suplente: João António de Carvalho Careca</div></div></div>
          </div>
        </div>
      </section>

      <section className="section pt0" id="estrategia">
        <div className="wrap"><div className="bento">
          <div className="tile dark c-7">
            <span className="mono muted">Opções Estratégicas 2020-2030</span>
            <h3 className="tile-title">Um Porto para o Mundo, trazendo o Mundo para o Porto.</h3>
            <p className="muted">Três eixos estratégicos para reforçar a centralidade e a conectividade, com um compromisso firme com a sustentabilidade ambiental e social, num futuro moderno, inovador, digital e eficiente.</p>
            <div className="foot"><a className="btn btn-light" href={OLD + "/media/3609/cegea_plano-estrategico-aps_apresentacao_ministroinfraestruturas_v40pptx.pdf"}>Apresentação (PDF, 2 MB)</a></div>
          </div>
          <div className="tile cobalt c-5"><span className="mono muted">Meta</span><div className="big">8%</div><p className="muted">de quota no comércio externo ibérico, através da captação de carga.</p></div>
          <div className="tile c-6"><span className="mono muted">Meta</span><div className="big">40%+</div><p className="muted">dos movimentos do porto vindos de novas atividades económicas.</p></div>
          <div className="tile c-6" id="identificacao">
            <span className="mono muted">Identificação da empresa</span>
            <div className="list flat">{COMPANY.map(([k, v]) => <div className="row" key={k}><span className="s">{k}</span><span className="r wrap-text">{v}</span></div>)}</div>
          </div>
        </div></div>
      </section>
    </div>
  );
}
