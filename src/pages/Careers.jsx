import PageHead from "../components/PageHead.jsx";
import { OLD } from "../data/content.js";

export default function Careers() {
  return (
    <div className="page">
      <PageHead crumbs={[["Contactos", "/contactos"], ["Recrutamento"]]} title="Construa a sua carreira no porto." lede="Concursos de admissão externos e candidaturas espontâneas para os Portos de Sines e do Algarve." />
      <div className="wrap two">
        <a className="tile tile-link" href={OLD + "/noticias/2026/recrutamento-técnicoa-superior-mf/"} style={{ minHeight: "220px" }}>
          <span className="pill pill-accent">Concurso em curso</span>
          <h3>Técnico/a Superior (M/F)</h3>
          <p className="muted">Engenharia Mecânica, Engenharia Eletromecânica ou Engenharia de Máquinas Marítimas, em Sines. Consulte o aviso de abertura, os requisitos e os prazos.</p>
          <span className="foot arrow-link accent">Ver concurso</span>
        </a>
        <a className="tile tile-link" href={OLD + "/recrutamento/"} style={{ minHeight: "220px" }}>
          <span className="pill" style={{ alignSelf: "flex-start" }}>Sempre aberto</span>
          <h3>Candidaturas espontâneas</h3>
          <p className="muted">Envie a sua candidatura para futuras oportunidades na APS.</p>
          <span className="foot arrow-link">Candidatar</span>
        </a>
      </div>
    </div>
  );
}
