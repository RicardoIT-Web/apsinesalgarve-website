import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo.jsx";
import Icon from "./Icon.jsx";
import { OLD, ROUTES } from "../data/content.js";

function readTheme() {
  try { return localStorage.getItem("aps-theme") || ""; } catch { return ""; }
}

export default function Nav({ onSearch }) {
  const [sheet, setSheet] = useState(false);
  const [theme, setTheme] = useState(readTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme); else root.removeAttribute("data-theme");
    try { localStorage.setItem("aps-theme", theme); } catch { /* storage unavailable */ }
  }, [theme]);
  useEffect(() => setSheet(false), [pathname]);

  const isDark = theme ? theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <>
      <div className="nav-shell">
        <nav className="nav" aria-label="Principal">
          <Link to="/" className="logo" aria-label="Início"><BrandLogo /></Link>
          <div className="nav-links">
            {ROUTES.slice(1).map(r => (
              <NavLink key={r.id} to={r.path} aria-current={pathname.startsWith(r.path) ? "page" : undefined}>{r.label}</NavLink>
            ))}
          </div>
          <div className="nav-tools">
            <button type="button" className="icon-btn" onClick={onSearch} aria-label="Pesquisar">
              <Icon n="search" size={16} /><span className="search-label">Pesquisar</span><kbd className="search-label">⌘K</kbd>
            </button>
            <button type="button" className="icon-btn" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}>
              {isDark ? "☀" : "☾"}
            </button>
            <a className="icon-btn lang-btn" href={OLD + "/en/"} aria-label="English">EN</a>
            <button type="button" className="icon-btn burger" aria-expanded={sheet} onClick={() => setSheet(!sheet)}>{sheet ? "Fechar" : "Menu"}</button>
          </div>
        </nav>
      </div>
      {sheet && (
        <div className="sheet">
          {ROUTES.map((r, i) => <Link key={r.id} to={r.path}>{r.label}<span>0{i + 1}</span></Link>)}
        </div>
      )}
    </>
  );
}
