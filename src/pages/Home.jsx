import { Link } from "react-router-dom";
import Ocean from "../components/Ocean.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { IconBox } from "../components/Icon.jsx";
import { NEWS, OLD, PORTS, PORT_IDS } from "../data/content.js";
import { asset } from "../asset.js";

const EVENT_URL = OLD + "/noticias/2026/conferência-ambiente-proteção-e-segurança-do-risco-à-resiliência-28-e-29-de-outubro/";

export default function Home() {
  return (
    <div className="page">
      <div className="hero-wrap">
        <section className="hero">
          <span className="watermark" aria-hidden="true" style={{ "--mark": `url(${asset("brand/emblem.png")})` }} />
          <Ocean glow={false} transparent />
          <div className="hero-inner">
            <span className="kicker">Administração dos Portos de Sines e do Algarve</span>
            <h1>A porta atlântica <span className="grad">do sul.</span></h1>
            <p className="lede">A APS administra os portos de Sines, de Faro e de Portimão, visando a sua exploração económica, conservação e desenvolvimento.</p>
            <div className="hero-actions">
              <Link to="/portos" className="btn btn-primary">Explorar os portos</Link>
              <Link to="/sistemas" className="btn btn-ghost">JUL · CUP · Express Gate</Link>
            </div>
            <div className="hero-ports">
              {PORT_IDS.map(id => {
                const p = PORTS[id];
                return (
                  <Link key={id} to={"/portos/" + id} className="hp">
                    <div className="hp-top"><b><span className="dot" style={{ background: p.color }} />{p.name}</b><span className="mono">{p.tag}</span></div>
                    <p>{p.short}</p>
                    <span className="mono">{p.coord}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="s-head">
            <div><span className="kicker">Em números</span><h2>O maior porto de Portugal está no sul.</h2></div>
            <p>Sines lidera a carga e os contentores no país. Faro e Portimão servem a economia e o turismo do Algarve.</p>
          </div>
          <div className="bento">
            <div className="tile dark c-7" style={{ minHeight: "300px" }}>
              <span className="mono muted">Porto de Sines</span>
              <div className="big">1.º</div>
              <h3 style={{ maxWidth: "26ch" }}>porto nacional no total de carga movimentada e em contentores</h3>
              <div className="foot terminals">{PORTS.sines.terminals.map(t => <span className="pill" key={t}>{t}</span>)}</div>
            </div>
            <div className="tile cobalt c-5">
              <span className="mono muted">Zona Industrial e Logística</span>
              <div className="big">2.000+ ha</div>
              <p className="muted">de ZILS na retaguarda do Porto de Sines, com a ZALSINES.</p>
              <div className="foot"><Link to="/portos/sines" className="arrow-link">Porto de Sines</Link></div>
            </div>
            <div className="tile c-4"><span className="mono muted">Portimão</span><div className="big">215 m</div><p className="muted">comprimento máximo de navio de cruzeiro, até 2.000 passageiros.</p></div>
            <div className="tile c-4"><span className="mono muted">Hinterland</span><h3>Do sul de Portugal até Madrid</h3><p className="muted">Competitivo na Extremadura, na Andalucía e em todo o corredor até Madrid. Sines integra o Corredor Atlântico da Rede Transeuropeia de Transporte.</p></div>
            <div className="tile c-4"><span className="mono muted">Desde</span><div className="big">1977</div><p className="muted">Criada a 14 de dezembro pelo Decreto-Lei Nº 508/77.</p><div className="foot"><Link to="/aps" className="arrow-link">História da APS</Link></div></div>
          </div>
        </div>
      </section>

      <section className="section pt0">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">Serviços</span><h2>Acesso rápido</h2></div></div>
          <div className="svc">
            <Link to="/sistemas"><IconBox n="jul" /><b>JUL</b><span>Janela Única Logística, para navios, mercadorias e comboios.</span></Link>
            <Link to="/sistemas"><IconBox n="cup" /><b>CUP</b><span>Cartão Único Portuário: pedidos de acesso às áreas do porto.</span></Link>
            <Link to="/sistemas"><IconBox n="gate" /><b>Express Gate</b><span>Agendamento rodoviário de contentores em Sines.</span></Link>
            <Link to="/estatisticas"><IconBox n="stat" /><b>Estatísticas</b><span>Estatística mensal de Sines e dos portos do Algarve.</span></Link>
          </div>
        </div>
      </section>

      <section className="section pt0">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">Notícias</span><h2>O que está a acontecer</h2></div><Link to="/noticias" className="btn btn-ghost">Todas as notícias</Link></div>
          <div className="rail">{NEWS.slice(0, 8).map(n => <NewsCard key={n.i} n={n} />)}</div>
        </div>
      </section>

      <section className="section pt0">
        <div className="wrap">
          <div className="bento">
            <div className="tile event c-8">
              <span className="mono">Próximo evento · 28 e 29 de outubro de 2026</span>
              <h3>Do Risco à Resiliência</h3>
              <p>Conferência Ambiente, Proteção e Segurança.</p>
              <div className="foot"><a className="btn btn-light" href={EVENT_URL}>Saber mais</a></div>
            </div>
            <Link to="/recrutamento" className="tile tile-link c-4">
              <IconBox n="job" />
              <h3>Trabalhar na APS</h3>
              <p className="muted">Concurso em curso: Técnico/a Superior (M/F). Candidaturas espontâneas sempre abertas.</p>
              <span className="foot arrow-link accent">Recrutamento</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
