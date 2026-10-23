import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EXTRA, NEWS, ROUTES } from "../data/content.js";

const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const ITEMS = [
  ...ROUTES.map(r => ({ k: "Página", t: r.label, to: r.path })),
  ...EXTRA.map(r => ({ k: "Página", t: r.label, to: r.path })),
  { k: "Serviço", t: "JUL - Janela Única Logística", to: "/sistemas" },
  { k: "Serviço", t: "CUP - Cartão Único Portuário", to: "/sistemas" },
  { k: "Serviço", t: "Express Gate", to: "/sistemas" },
  ...NEWS.map(n => ({ k: n.day + " " + n.m, t: n.t, to: "/noticias" }))
];

// Site-wide search, opened with ⌘K / Ctrl+K or "/".
export default function Palette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    setQ(""); setSel(0);
    setTimeout(() => input.current?.focus(), 10);
  }, [open]);

  const items = useMemo(() => {
    if (!q) return ITEMS.slice(0, 9);
    const nq = norm(q);
    return ITEMS.filter(i => norm(i.t).includes(nq)).slice(0, 12);
  }, [q]);

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
      <div className="pal" role="dialog" aria-label="Pesquisar no site">
        <input ref={input} id="pal-q" value={q} onChange={e => { setQ(e.target.value); setSel(0); }} onKeyDown={onKey} placeholder="Pesquisar páginas, serviços e notícias" aria-label="Pesquisar" />
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
        ) : <p className="empty">Sem resultados para “{q}”.</p>}
        <div className="hint"><span>↑↓ navegar</span><span>↵ abrir</span><span>esc fechar</span></div>
      </div>
    </div>
  );
}
