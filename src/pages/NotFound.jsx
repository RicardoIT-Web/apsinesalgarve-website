import PageHead from "../components/PageHead.jsx";
import { Link, useLang } from "../i18n.jsx";

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="page">
      <PageHead crumbs={[[t("Página não encontrada", "Page not found")]]} title={t("Esta página não existe.", "This page doesn't exist.")} lede={t("O endereço pode ter mudado com o novo site. Use a pesquisa (⌘K) ou volte ao início.", "The address may have changed with the new site. Use search (⌘K) or go back to the home page.")}>
        <div className="actions"><Link to="/" className="btn btn-primary">{t("Ir para o início", "Go to the home page")}</Link></div>
      </PageHead>
    </div>
  );
}
