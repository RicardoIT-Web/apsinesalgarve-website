import { useEffect, useState } from "react";
import { Link as RawLink, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo.jsx";
import Icon from "./Icon.jsx";
import { Link, NavLink, useContent, useLang } from "../i18n.jsx";

function readTheme() {
  try { return localStorage.getItem("aps-theme") || ""; } catch { return ""; }
}

export default function Nav({ onSearch }) {
  const [sheet, setSheet] = useState(false);
  const [theme, setTheme] = useState(readTheme);
  const { pathname, hash } = useLocation();
  const { ROUTES } = useContent();
  const { lang, t, path } = useLang();

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme); else root.removeAttribute("data-theme");
    try { localStorage.setItem("aps-theme", theme); } catch { /* storage unavailable */ }
  }, [theme]);
  useEffect(() => setSheet(false), [pathname]);

  const isDark = theme ? theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  // The same page in the other language.
  const other = (lang === "en" ? path : path === "/" ? "/en" : "/en" + path) + hash;

  return (
    <>
      <div className="nav-shell">
        <nav className="nav" aria-label={t("Principal", "Main")}>
          <Link to="/" className="logo" aria-label={t("Início", "Home")}><BrandLogo /></Link>
          <div className="nav-links">
            {ROUTES.slice(1).map(r => (
              <NavLink key={r.id} to={r.path} aria-current={path.startsWith(r.path) ? "page" : undefined}>{r.label}</NavLink>
            ))}
          </div>
          <div className="nav-tools">
            <button type="button" className="icon-btn" onClick={onSearch} aria-label={t("Pesquisar", "Search")}>
              <Icon n="search" size={16} /><span className="search-label">{t("Pesquisar", "Search")}</span><kbd className="search-label">⌘K</kbd>
            </button>
            <button type="button" className="icon-btn" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={isDark ? t("Mudar para tema claro", "Switch to light theme") : t("Mudar para tema escuro", "Switch to dark theme")}>
              {isDark ? "☀" : "☾"}
            </button>
            <LangSwitch to={other} lang={lang} />
            <button type="button" className="icon-btn burger" aria-expanded={sheet} onClick={() => setSheet(!sheet)}>{sheet ? t("Fechar", "Close") : "Menu"}</button>
          </div>
        </nav>
      </div>
      {sheet && (
        <div className="sheet">
          {ROUTES.map((r, i) => <Link key={r.id} to={r.path}>{r.label}<span>0{i + 1}</span></Link>)}
          <LangSwitch to={other} lang={lang} sheet />
        </div>
      )}
    </>
  );
}

// Language switch. Uses the plain router link because `to` already has the right prefix.
function LangSwitch({ to, lang, sheet }) {
  const label = lang === "en" ? "PT" : "EN";
  const name = lang === "en" ? "Português" : "English";
  if (sheet) return <RawLink to={to} hrefLang={lang === "en" ? "pt" : "en"}>{name}<span>{label}</span></RawLink>;
  return <RawLink className="icon-btn lang-btn" to={to} hrefLang={lang === "en" ? "pt" : "en"} aria-label={name}>{label}</RawLink>;
}
