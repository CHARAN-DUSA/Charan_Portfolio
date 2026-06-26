import { useEffect } from 'react'
import { fadeLeft, fadeUp, waitForGSAP } from '../utils/motion'
import './Skills.css'
const cards = [
  {label:'Backend',title:'Server-Side',span:4,tags:['ASP.NET Core 8','Web API','Entity Framework Core','SignalR','Hangfire','REST APIs','C#']},
  {label:'Frontend',title:'Client-Side',span:4,tags:['Angular 17+','Angular Material','TypeScript','React','Tailwind CSS','HTML5','CSS3']},
  {label:'Database',title:'Data Layer',span:4,tags:['SQL Server','PostgreSQL','MongoDB','Redis','LINQ','EF Migrations']},
  {label:'Architecture',title:'Design',span:3,tags:['Clean Architecture','SOLID','Repository Pattern','CQRS / MediatR','Dependency Injection']},
  {label:'Security',title:'Auth',span:3,tags:['JWT','Refresh Tokens','OAuth 2.0','BCrypt','TOTP 2FA','Role-Based Auth']},
  {label:'DevOps & Cloud',title:'Infra & Tools',span:6,tags:['Docker','GitHub Actions','CI/CD','Azure','Vercel','Render','Git','Postman','Swagger','Razorpay','Brevo SMTP','Python','Salesforce']},
]
export default function Skills() {
  useEffect(()=>{ waitForGSAP(()=>{ fadeLeft('.skills-title','.skills-section'); fadeUp('.skill-card','.skills-grid',{stagger:.1,y:50,start:'top 85%'}) }) },[])
  return (
    <section className="skills-section" id="skills">
      <p className="skills-eyebrow">— Technical Arsenal</p>
      <h2 className="skills-title">My <span className="accent">Skills</span></h2>
      <div className="skills-grid">
        {cards.map((c,i)=>(
          <div key={i} className={`skill-card span-${c.span}`}>
            <p className="skill-card-label">{c.label}</p>
            <h3 className="skill-card-title">{c.title}</h3>
            <div className="skill-tags">{c.tags.map(t=><span key={t} className="skill-tag">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
