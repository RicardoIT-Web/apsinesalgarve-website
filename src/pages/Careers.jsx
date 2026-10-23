import PageHead from "../components/PageHead.jsx";
import { Link, useLang } from "../i18n.jsx";

export default function Careers() {
  const { t } = useLang();
  return (
    <div className="page">
      <PageHead crumbs={[[t("Contactos", "Contacts"), "/contactos"], [t("Recrutamento", "Careers")]]} title={t("Construa a sua carreira no porto.", "Build your career at the port.")} lede={t("Concursos de admissão externos e candidaturas espontâneas para os Portos de Sines e do Algarve.", "Open recruitment and unsolicited applications for the Ports of Sines and the Algarve.")} />
      <div className="wrap two">
        <Link className="tile tile-link" to="/contactos#formulario" style={{ minHeight: "220px" }}>
          <span className="pill pill-accent">{t("Concurso em curso", "Open position")}</span>
          <h3>{t("Técnico/a Superior (M/F)", "Senior Technician (M/F)")}</h3>
          <p className="muted">{t("Engenharia Mecânica, Engenharia Eletromecânica ou Engenharia de Máquinas Marítimas, em Sines. Para o aviso de abertura, os requisitos e os prazos, contacte os Recursos Humanos.", "Mechanical, Electromechanical or Marine Engineering, based in Sines. For the full notice, requirements and deadlines, contact Human Resources.")}</p>
          <span className="foot arrow-link accent">{t("Contactar Recursos Humanos", "Contact Human Resources")}</span>
        </Link>
        <Link className="tile tile-link" to="/contactos#formulario" style={{ minHeight: "220px" }}>
          <span className="pill" style={{ alignSelf: "flex-start" }}>{t("Sempre aberto", "Always open")}</span>
          <h3>{t("Candidaturas espontâneas", "Unsolicited applications")}</h3>
          <p className="muted">{t("Envie a sua candidatura para futuras oportunidades na APS, escolhendo Recursos Humanos no formulário de contacto.", "Send your application for future opportunities at APS by choosing Human Resources in the contact form.")}</p>
          <span className="foot arrow-link">{t("Candidatar", "Apply")}</span>
        </Link>
      </div>
    </div>
  );
}
