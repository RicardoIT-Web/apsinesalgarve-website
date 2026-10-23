import PageHead from "../components/PageHead.jsx";
import Copy from "../components/Copy.jsx";
import { useContent, useLang } from "../i18n.jsx";

export default function Visits() {
  const { PORTS } = useContent();
  const { t } = useLang();
  return (
    <div className="page">
      <PageHead crumbs={[[t("Contactos", "Contacts"), "/contactos"], [t("Visitas", "Visits")]]} title={t("Visite o Porto de Sines.", "Visit the Port of Sines.")} lede={t("O Porto de Sines recebe visitas de estudo e institucionais, previamente marcadas e de acordo com a disponibilidade de agenda.", "The Port of Sines welcomes study and institutional visits, booked in advance and subject to availability.")} />
      <div className="wrap"><div className="bento">
        <div className="tile dark c-7">
          <span className="mono muted">{t("Circuito de aprox. 60 min", "Tour of about 60 min")}</span>
          <h3>{t("Os cinco terminais especializados", "The five specialised terminals")}</h3>
          <div className="terminals">{PORTS.sines.terminals.map(x => <span className="pill" key={x}>{x}</span>)}</div>
          <p className="muted">{t("Inclui a Zona de Atividades Logísticas, o Porto de Pesca, o Porto de Recreio e a Praia Vasco da Gama. A visita é feita no autocarro trazido pela entidade visitante.", "It includes the Logistics Activities Zone, the Fishing Port, the Marina and Vasco da Gama Beach. The tour is made on the coach brought by the visiting group.")}</p>
        </div>
        <div className="tile c-5">
          <span className="mono muted">{t("Como marcar", "How to book")}</span>
          <ol className="steps">
            <li>{t("Envie email para comunicacao@apsinesalgarve.pt com a entidade, o objetivo, o número de pessoas e a data pretendida.", "Email comunicacao@apsinesalgarve.pt with your organisation, the purpose, the number of people and the preferred date.")}</li>
            <li>{t("Aguarde a confirmação de disponibilidade por email.", "Wait for confirmation of availability by email.")}</li>
            <li>{t("Preencha o formulário de participantes, que segue para a GNR-UCCF. Grupos com mais de 31 pessoas preenchem 2 ou 3 formulários.", "Fill in the participants form, which is sent to GNR-UCCF. Groups of more than 31 people fill in 2 or 3 forms.")}</li>
          </ol>
          <div className="inline"><b>comunicacao@apsinesalgarve.pt</b><Copy value="comunicacao@apsinesalgarve.pt" /></div>
        </div>
        <div className="tile c-12">
          <span className="mono muted">{t("Dados de cada participante", "Details for each participant")}</span>
          <p className="muted">{t("Nome completo, data de nascimento, nacionalidade, telemóvel e email, função, e documento de identificação com número e validade. Não são aceites documentos expirados.", "Full name, date of birth, nationality, mobile number and email, job title, and an ID document with its number and expiry date. Expired documents are not accepted.")}</p>
        </div>
      </div></div>
    </div>
  );
}
