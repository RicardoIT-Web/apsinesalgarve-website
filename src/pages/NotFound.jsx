import { Link } from "react-router-dom";
import PageHead from "../components/PageHead.jsx";

export default function NotFound() {
  return (
    <div className="page">
      <PageHead crumbs={[["Página não encontrada"]]} title="Esta página não existe." lede="O endereço pode ter mudado com o novo site. Use a pesquisa (⌘K) ou volte ao início.">
        <div className="actions"><Link to="/" className="btn btn-primary">Ir para o início</Link></div>
      </PageHead>
    </div>
  );
}
