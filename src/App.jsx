import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Palette from "./components/Palette.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Governance from "./pages/Governance.jsx";
import Ports from "./pages/Ports.jsx";
import PortPage from "./pages/PortPage.jsx";
import Stats from "./pages/Stats.jsx";
import Systems from "./pages/Systems.jsx";
import News from "./pages/News.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contacts from "./pages/Contacts.jsx";
import Visits from "./pages/Visits.jsx";
import Careers from "./pages/Careers.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useContent, useLang } from "./i18n.jsx";

function useTitle() {
  const { ROUTES, EXTRA } = useContent();
  const { lang, path } = useLang();
  useEffect(() => {
    const page = [...ROUTES, ...EXTRA].find(r => r.path === path);
    document.title = path === "/" || !page ? (lang === "en" ? "Ports of Sines and the Algarve" : "Portos de Sines e do Algarve") : `${page.label} · APS`;
    document.documentElement.lang = lang === "en" ? "en" : "pt-PT";
  }, [path, lang]);
}

// Every page, mounted once at "/" (Portuguese) and once under "/en" (English).
const PAGES = (
  <>
    <Route index element={<Home />} />
    <Route path="aps" element={<About />} />
    <Route path="aps/governo" element={<Governance />} />
    <Route path="portos" element={<Ports />} />
    <Route path="portos/:id" element={<PortPage />} />
    <Route path="estatisticas" element={<Stats />} />
    <Route path="sistemas" element={<Systems />} />
    <Route path="noticias" element={<News />} />
    <Route path="galeria" element={<Gallery />} />
    <Route path="contactos" element={<Contacts />} />
    <Route path="contactos/visitas" element={<Visits />} />
    <Route path="recrutamento" element={<Careers />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default function App() {
  const [search, setSearch] = useState(false);
  const { pathname, hash } = useLocation();
  useTitle();

  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    // Links such as /aps#orgaos: scroll to the section once the page has rendered.
    const id = setTimeout(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView(), 30);
    return () => clearTimeout(id);
  }, [pathname, hash]);
  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setSearch(s => !s); }
      if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); setSearch(true); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="stripe" aria-hidden="true" />
      <Nav onSearch={() => setSearch(true)} />
      <main key={pathname}>
        <Routes>
          <Route path="/en">{PAGES}</Route>
          <Route path="/">{PAGES}</Route>
        </Routes>
      </main>
      <Footer />
      <Palette open={search} onClose={() => setSearch(false)} />
    </>
  );
}
