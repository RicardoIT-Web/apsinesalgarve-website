import { THUMBS } from "../data/content.js";
import { Link } from "../i18n.jsx";

export default function NewsCard({ n }) {
  const [a, b] = THUMBS[n.i % THUMBS.length];
  return (
    <Link to="/noticias" className="ncard">
      <div className="thumb" style={{ background: `radial-gradient(120% 90% at 85% 10%, ${a} 0%, transparent 60%), linear-gradient(160deg, ${b}, #141518)` }}>
        <span className="mono">{n.c}{n.topic ? " · " + n.topic : ""}</span>
      </div>
      <div className="body">
        <div className="meta mono"><span>{n.day} {n.m} 2026</span></div>
        <h3>{n.t}</h3>
      </div>
    </Link>
  );
}
