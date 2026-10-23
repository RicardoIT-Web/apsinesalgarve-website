import { useEffect, useMemo, useRef, useState } from "react";
import { useContent, useLang, useLangNavigate } from "../i18n.jsx";

const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// Site-wide search, opened with ⌘K / Ctrl+K or "/".
export default function Palette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef(null);
  const navigate = useLangNavigate();
  const { ROUTES, EXTRA, NEWS } = useContent();
  const { lang, t } = useLang();

  const all = useMemo(() => [
    ...ROUTES.map(r => ({ k: t("Página", "Page"), t: r.label, to: r.path })),
    ...EXTRA.map(r => ({ k: t("Página", "Page"), t: r.label, to: r.path })),
    { k: t("Serviço", "Service"), t: t("JUL - Janela Única Logística", "JUL - Logistics Single Window"), to: "/sistemas" },
    { k: t("Serviço", "Service"), t: t("CUP - Cartão Único Portuário", "CUP - Single Port Card"), to: "/sistemas" },
    { k: t("Serviço", "Service"), t: "Express Gate", to: "/sistemas" },
    ...NEWS.map(n => ({ k: n.day + " " + n.m, t: n.t, to: "/noticias" }))
  ], [lang]);

  useEffect(() => {
    if (!open) return;
    setQ(""); setSel(0);
    setTimeout(() => input.current?.focus(), 10);
  }, [open]);

  const items = useMemo(() => {
    if (!q) return all.slice(0, 9);
    const nq = norm(q);
    return all.filter(i => norm(i.t).includes(nq)).slice(0, 12);
  }, [q, all]);

  if (!open) return null;

  const pick = item => { if (!item) return; onClose(); navigate(item.to); };
  const onKey = e => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel(Math.min(sel + 1, items.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSel(Math.max(sel - 1, 0)); }
    if (e.key === "Enter") pick(items[sel]);
    if (e.key === "Escape") onClose();
  };

  return (
    <div className="pal-back" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className="pal" role="dialog" aria-label={t("Pesquisar no site", "Search the site")}>
        <input ref={input} id="pal-q" value={q} onChange={e => { setQ(e.target.value); setSel(0); }} onKeyDown={onKey} placeholder={t("Pesquisar páginas, serviços e notícias", "Search pages, services and news")} aria-label={t("Pesquisar", "Search")} />
        {items.length ? (
          <ul role="listbox">
            {items.map((i, n) => (
              <li key={i.k + i.t}>
                <button type="button" role="option" aria-selected={n === sel} onMouseEnter={() => setSel(n)} onClick={() => pick(i)}>
                  <span>{i.t}</span><span className="k">{i.k}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : <p className="empty">{t("Sem resultados para", "No results for")} “{q}”.</p>}
        <div className="hint"><span>↑↓ {t("navegar", "move")}</span><span>↵ {t("abrir", "open")}</span><span>esc {t("fechar", "close")}</span></div>
      </div>
    </div>
  );
}
