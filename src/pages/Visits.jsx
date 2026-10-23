import PageHead from "../components/PageHead.jsx";
import Copy from "../components/Copy.jsx";
import { PORTS } from "../data/content.js";

export default function Visits() {
  return (
    <div className="page">
      <PageHead crumbs={[["Contactos", "/contactos"], ["Visitas"]]} title="Visite o Porto de Sines." lede="O Porto de Sines recebe visitas de estudo e institucionais, previamente marcadas e de acordo com a disponibilidade de agenda." />
      <div className="wrap"><div className="bento">
        <div className="tile dark c-7">
          <span className="mono muted">Circuito de aprox. 60 min</span>
          <h3>Os cinco terminais especializados</h3>
          <div className="terminals">{PORTS.sines.terminals.map(t => <span className="pill" key={t}>{t}</span>)}</div>
          <p className="muted">Inclui a Zona de Atividades Logísticas, o Porto de Pesca, o Porto de Recreio e a Praia Vasco da Gama. A visita é feita no autocarro trazido pela entidade visitante.</p>
        </div>
        <div className="tile c-5">
          <span className="mono muted">Como marcar</span>
          <ol className="steps">
            <li>Envie email para comunicacao@apsinesalgarve.pt com a entidade, o objetivo, o número de pessoas e a data pretendida.</li>
            <li>Aguarde a confirmação de disponibilidade por email.</li>
            <li>Preencha o formulário de participantes, que segue para a GNR-UCCF. Grupos com mais de 31 pessoas preenchem 2 ou 3 formulários.</li>
          </ol>
          <div className="inline"><b>comunicacao@apsinesalgarve.pt</b><Copy value="comunicacao@apsinesalgarve.pt" /></div>
        </div>
        <div className="tile c-12">
          <span className="mono muted">Dados de cada participante</span>
          <p className="muted">Nome completo, data de nascimento, nacionalidade, telemóvel e email, função, e documento de identificação com número e validade. Não são aceites documentos expirados.</p>
        </div>
      </div></div>
    </div>
  );
}
