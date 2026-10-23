import { Link } from "react-router-dom";

// Breadcrumbs, title and intro at the top of each inner page.
// crumbs: [[label, path?], ...]
export default function PageHead({ crumbs, title, lede, children }) {
  return (
    <div className="wrap phead">
      <div className="crumbs">
        <Link to="/">Início</Link>
        {crumbs.map(([label, to]) => (
          <span key={label} style={{ display: "contents" }}>
            <span>/</span>
            {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
          </span>
        ))}
      </div>
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </div>
  );
}
