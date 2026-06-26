import './ProjectCard.css'
export default function ProjectCard({ number, tag, name, desc, links=[], span='wide' }) {
  return (
    <div className={`work-item ${span}`}>
      <div className="work-number">{number}</div>
      <div className="work-info">
        <span className="work-tag">{tag}</span>
        <h3 className="work-name">{name}</h3>
        <p className="work-desc">{desc}</p>
        {links.length > 0 && (
          <div className="work-links">
            {links.map((l,i) => <a key={i} className={`work-link${l.secondary?' secondary':''}`} href={l.href} target="_blank" rel="noopener">{l.label}</a>)}
          </div>
        )}
      </div>
    </div>
  )
}
