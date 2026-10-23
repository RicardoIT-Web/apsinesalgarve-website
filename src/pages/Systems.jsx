import PageHead from "../components/PageHead.jsx";
import { IconBox } from "../components/Icon.jsx";

const CUP_LINKS = [
  ["Novo pedido CUP", "https://jul.nsw.pt/web/#/cup/public/create-request"],
  ["Acesso simplificado (ZAL)", "https://jul.nsw.pt/web/#/cup/public/access-logistic"],
  ["Consultar pedido", "https://jul.nsw.pt/web/#/cup/public"]
];
const GATE_STEPS = [
  "Registe a empresa na área reservada da JUL.",
  "Registe os motoristas na área empresa do CUP-JUL.",
  "Envie email ao Suporte CUP com os nomes dos motoristas, o pedido CUP e uma proposta de dia e hora.",
  "Aguarde a confirmação do Suporte CUP."
];

export default function Systems() {
  return (
    <div className="page">
      <PageHead crumbs={[["Sistemas"]]} title="Sistemas de Informação" lede="A JUL é a plataforma digital comum aos três portos. O CUP e o Express Gate são partes integrantes da JUL." />
      <div className="wrap"><div className="bento">
        <div className="tile dark c-12" style={{ minHeight: "260px" }}>
          <span className="mono muted">JUL · Janela Única Logística</span>
          <h3 className="tile-title" style={{ maxWidth: "20ch" }}>Uma janela única para o mar e para a terra.</h3>
          <p className="muted" style={{ maxWidth: "62ch" }}>O Porto de Sines é caracterizado por uma forte intermodalidade marítimo–ferroviária. A JUL estende o conceito de janela única ao transporte terrestre, com grande ênfase nas escalas de comboio, em parceria com todas as Administrações Portuárias nacionais, Agentes Económicos e Autoridades. Segurança da informação certificada ISO/IEC 27001.</p>
          <div className="foot actions"><a className="btn btn-light" href="https://jul.nsw.pt/">Entrar na JUL</a><span className="pill">Helpdesk 24x7 · 269 860 780</span><span className="pill">suporte.informatico@apsinesalgarve.pt</span></div>
        </div>
        <div className="tile c-6">
          <IconBox n="cup" />
          <h3>CUP · Cartão Único Portuário</h3>
          <p className="muted">Pedido, aprovação, credenciação e controlo de acessos em todas as áreas do porto, com validade simultânea para as Autoridades de Fronteira, Marítima e Portuária.</p>
          <div className="list">{CUP_LINKS.map(([t, u]) => <a className="row" key={t} href={u}><span className="t">{t}</span><span className="r">→</span></a>)}</div>
          <p className="mono muted">Suporte CUP · 269 860 662 · dias úteis 09h–17h · suporte.cup@apsinesalgarve.pt</p>
        </div>
        <div className="tile c-6">
          <IconBox n="gate" />
          <h3>Express Gate · só em Sines</h3>
          <p className="muted">Agendamento de entrega e levante de contentores (GAS) para planear o transporte rodoviário.</p>
          <ol className="steps">{GATE_STEPS.map(s => <li key={s}>{s}</li>)}</ol>
        </div>
      </div></div>
    </div>
  );
}
