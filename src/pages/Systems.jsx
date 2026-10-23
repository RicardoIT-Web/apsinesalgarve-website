import PageHead from "../components/PageHead.jsx";
import { IconBox } from "../components/Icon.jsx";
import { useLang } from "../i18n.jsx";

export default function Systems() {
  const { t } = useLang();
  const cupLinks = [
    [t("Novo pedido CUP", "New CUP request"), "https://jul.nsw.pt/web/#/cup/public/create-request"],
    [t("Acesso simplificado (ZAL)", "Simplified access (ZAL)"), "https://jul.nsw.pt/web/#/cup/public/access-logistic"],
    [t("Consultar pedido", "Check a request"), "https://jul.nsw.pt/web/#/cup/public"]
  ];
  const gateSteps = [
    t("Registe a empresa na área reservada da JUL.", "Register your company in the JUL private area."),
    t("Registe os motoristas na área empresa do CUP-JUL.", "Register your drivers in the CUP-JUL company area."),
    t("Envie email ao Suporte CUP com os nomes dos motoristas, o pedido CUP e uma proposta de dia e hora.", "Email CUP Support with the drivers' names, the CUP request and a proposed date and time."),
    t("Aguarde a confirmação do Suporte CUP.", "Wait for confirmation from CUP Support.")
  ];
  return (
    <div className="page">
      <PageHead crumbs={[[t("Sistemas", "Systems")]]} title={t("Sistemas de Informação", "Information Systems")} lede={t("A JUL é a plataforma digital comum aos três portos. O CUP e o Express Gate são partes integrantes da JUL.", "JUL is the digital platform shared by the three ports. CUP and Express Gate are part of JUL.")} />
      <div className="wrap"><div className="bento">
        <div className="tile dark c-12" style={{ minHeight: "260px" }}>
          <span className="mono muted">{t("JUL · Janela Única Logística", "JUL · Logistics Single Window")}</span>
          <h3 className="tile-title" style={{ maxWidth: "20ch" }}>{t("Uma janela única para o mar e para a terra.", "One single window for sea and land.")}</h3>
          <p className="muted" style={{ maxWidth: "62ch" }}>{t("O Porto de Sines é caracterizado por uma forte intermodalidade marítimo–ferroviária. A JUL estende o conceito de janela única ao transporte terrestre, com grande ênfase nas escalas de comboio, em parceria com todas as Administrações Portuárias nacionais, Agentes Económicos e Autoridades. Segurança da informação certificada ISO/IEC 27001.", "The Port of Sines has strong sea-rail intermodality. JUL extends the single window concept to land transport, with a strong focus on train calls, in partnership with all Portuguese Port Authorities, businesses and public authorities. Information security certified to ISO/IEC 27001.")}</p>
          <div className="foot actions"><a className="btn btn-light" href="https://jul.nsw.pt/">{t("Entrar na JUL", "Sign in to JUL")}</a><span className="pill">Helpdesk 24x7 · 269 860 780</span><span className="pill">suporte.informatico@apsinesalgarve.pt</span></div>
        </div>
        <div className="tile c-6">
          <IconBox n="cup" />
          <h3>{t("CUP · Cartão Único Portuário", "CUP · Single Port Card")}</h3>
          <p className="muted">{t("Pedido, aprovação, credenciação e controlo de acessos em todas as áreas do porto, com validade simultânea para as Autoridades de Fronteira, Marítima e Portuária.", "Request, approval, accreditation and access control for every area of the port, valid at the same time for the Border, Maritime and Port Authorities.")}</p>
          <div className="list">{cupLinks.map(([x, u]) => <a className="row" key={u} href={u}><span className="t">{x}</span><span className="r">→</span></a>)}</div>
          <p className="mono muted">{t("Suporte CUP · 269 860 662 · dias úteis 09h–17h · suporte.cup@apsinesalgarve.pt", "CUP Support · 269 860 662 · weekdays 9am–5pm · suporte.cup@apsinesalgarve.pt")}</p>
        </div>
        <div className="tile c-6">
          <IconBox n="gate" />
          <h3>{t("Express Gate · só em Sines", "Express Gate · Sines only")}</h3>
          <p className="muted">{t("Agendamento de entrega e levante de contentores (GAS) para planear o transporte rodoviário.", "Booking of container deliveries and pick-ups (GAS) to plan road transport.")}</p>
          <ol className="steps">{gateSteps.map(s => <li key={s}>{s}</li>)}</ol>
        </div>
      </div></div>
    </div>
  );
}
