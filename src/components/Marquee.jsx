import './Marquee.css'
const items = ['ASP.NET Core 8','Angular','SQL Server','Entity Framework','JWT Auth','SignalR','Redis','Docker','Clean Architecture','REST APIs']
export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}{i < doubled.length-1 && <span className="marquee-dot"> ✦ </span>}</span>
        ))}
      </div>
    </div>
  )
}
