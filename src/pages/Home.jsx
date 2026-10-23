import Ocean from "../components/Ocean.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { IconBox } from "../components/Icon.jsx";
import { asset } from "../asset.js";
import { Link, useContent, useLang } from "../i18n.jsx";

export default function Home() {
  const { NEWS, PORTS, PORT_IDS } = useContent();
  const { t } = useLang();
  return (
    <div className="page">
      <div className="hero-wrap">
        <section className="hero">
          <span className="watermark" aria-hidden="true" style={{ "--mark": `url(${asset("brand/emblem.png")})` }} />
          <Ocean glow={false} transparent />
          <div className="hero-inner">
            <span className="kicker">{t("Administração dos Portos de Sines e do Algarve", "Sines and Algarve Ports Authority")}</span>
            <h1>{t(<>A porta atlântica <span className="grad">do sul.</span></>, <>The Atlantic gateway <span className="grad">of the south.</span></>)}</h1>
            <p className="lede">{t("A APS administra os portos de Sines, de Faro e de Portimão, visando a sua exploração económica, conservação e desenvolvimento.", "APS manages the ports of Sines, Faro and Portimão, overseeing their commercial operation, upkeep and development.")}</p>
            <div className="hero-actions">
              <Link to="/portos" className="btn btn-primary">{t("Explorar os portos", "Explore the ports")}</Link>
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
            <div><span className="kicker">{t("Em números", "In numbers")}</span><h2>{t("O maior porto de Portugal está no sul.", "Portugal's largest port is in the south.")}</h2></div>
            <p>{t("Sines lidera a carga e os contentores no país. Faro e Portimão servem a economia e o turismo do Algarve.", "Sines leads the country in cargo and containers. Faro and Portimão serve the Algarve's economy and tourism.")}</p>
          </div>
          <div className="bento">
            <div className="tile dark c-7" style={{ minHeight: "300px" }}>
              <span className="mono muted">{t("Porto de Sines", "Port of Sines")}</span>
              <div className="big">{t("1.º", "No. 1")}</div>
              <h3 style={{ maxWidth: "26ch" }}>{t("porto nacional no total de carga movimentada e em contentores", "port in Portugal for total cargo handled and for containers")}</h3>
              <div className="foot terminals">{PORTS.sines.terminals.map(x => <span className="pill" key={x}>{x}</span>)}</div>
            </div>
            <div className="tile cobalt c-5">
              <span className="mono muted">{t("Zona Industrial e Logística", "Industrial and Logistics Zone")}</span>
              <div className="big">{t("2.000+ ha", "2,000+ ha")}</div>
              <p className="muted">{t("de ZILS na retaguarda do Porto de Sines, com a ZALSINES.", "of ZILS behind the Port of Sines, including ZALSINES.")}</p>
              <div className="foot"><Link to="/portos/sines" className="arrow-link">{t("Porto de Sines", "Port of Sines")}</Link></div>
            </div>
            <div className="tile c-4"><span className="mono muted">Portimão</span><div className="big">215 m</div><p className="muted">{t("comprimento máximo de navio de cruzeiro, até 2.000 passageiros.", "maximum cruise ship length, with up to 2,000 passengers.")}</p></div>
            <div className="tile c-4"><span className="mono muted">Hinterland</span><h3>{t("Do sul de Portugal até Madrid", "From southern Portugal to Madrid")}</h3><p className="muted">{t("Competitivo na Extremadura, na Andalucía e em todo o corredor até Madrid. Sines integra o Corredor Atlântico da Rede Transeuropeia de Transporte.", "Competitive in Extremadura, Andalusia and the whole corridor to Madrid. Sines is part of the Atlantic Corridor of the Trans-European Transport Network.")}</p></div>
            <div className="tile c-4"><span className="mono muted">{t("Desde", "Since")}</span><div className="big">1977</div><p className="muted">{t("Criada a 14 de dezembro pelo Decreto-Lei Nº 508/77.", "Founded on 14 December by Decree-Law No. 508/77.")}</p><div className="foot"><Link to="/aps" className="arrow-link">{t("História da APS", "APS history")}</Link></div></div>
          </div>
        </div>
      </section>

      <section className="section pt0">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">{t("Serviços", "Services")}</span><h2>{t("Acesso rápido", "Quick access")}</h2></div></div>
          <div className="svc">
            <Link to="/sistemas"><IconBox n="jul" /><b>JUL</b><span>{t("Janela Única Logística, para navios, mercadorias e comboios.", "Logistics Single Window for ships, cargo and trains.")}</span></Link>
            <Link to="/sistemas"><IconBox n="cup" /><b>CUP</b><span>{t("Cartão Único Portuário: pedidos de acesso às áreas do porto.", "Single Port Card: requests to access port areas.")}</span></Link>
            <Link to="/sistemas"><IconBox n="gate" /><b>Express Gate</b><span>{t("Agendamento rodoviário de contentores em Sines.", "Road booking for containers in Sines.")}</span></Link>
            <Link to="/estatisticas"><IconBox n="stat" /><b>{t("Estatísticas", "Statistics")}</b><span>{t("Estatística mensal de Sines e dos portos do Algarve.", "Monthly statistics for Sines and the Algarve ports.")}</span></Link>
          </div>
        </div>
      </section>

      <section className="section pt0">
        <div className="wrap">
          <div className="s-head"><div><span className="kicker">{t("Notícias", "News")}</span><h2>{t("O que está a acontecer", "What's happening")}</h2></div><Link to="/noticias" className="btn btn-ghost">{t("Todas as notícias", "All news")}</Link></div>
          <div className="rail">{NEWS.slice(0, 8).map(n => <NewsCard key={n.i} n={n} />)}</div>
        </div>
      </section>

      <section className="section pt0">
        <div className="wrap">
          <div className="bento">
            <div className="tile event c-8">
              <span className="mono">{t("Próximo evento · 28 e 29 de outubro de 2026", "Next event · 28 and 29 October 2026")}</span>
              <h3>{t("Do Risco à Resiliência", "From Risk to Resilience")}</h3>
              <p>{t("Conferência Ambiente, Proteção e Segurança.", "Environment, Protection and Safety Conference.")}</p>
              <div className="foot"><Link className="btn btn-light" to="/noticias">{t("Saber mais", "Learn more")}</Link></div>
            </div>
            <Link to="/recrutamento" className="tile tile-link c-4">
              <IconBox n="job" />
              <h3>{t("Trabalhar na APS", "Work at APS")}</h3>
              <p className="muted">{t("Concurso em curso: Técnico/a Superior (M/F). Candidaturas espontâneas sempre abertas.", "Open position: Senior Technician (M/F). Unsolicited applications always welcome.")}</p>
              <span className="foot arrow-link accent">{t("Recrutamento", "Careers")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
