import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fadeUp, fadeLeft, waitForGSAP } from '../utils/motion'
import './Projects.css'

const projects = [
  {
    number: '01',
    span: 'wide',
    tag: 'ASP.NET Core 8 · Angular · SQL Server · SignalR · Razorpay · Docker',
    name: 'MediSphere',
    id: 'medisphere',
    desc: 'Production-ready healthcare appointment platform with 50+ RESTful API endpoints, 3 user roles (Patient, Doctor, Admin), real-time notifications via SignalR, Razorpay payments, JWT auth with refresh token rotation, and Docker-containerised deployment.',
    links: [{ href: 'https://github.com/CHARAN-DUSA', label: 'Source Code →' }],
  },
  {
    number: '02',
    span: 'tall',
    tag: 'ASP.NET Core · Angular · Redis · SignalR · AI Chatbot',
    name: 'FinWise India',
    id: 'finwise',
    desc: 'AI-powered financial planning platform with 20+ calculators (SIP, EMI, retirement, tax), Redis caching, real-time dashboard updates, and a multilingual chatbot supporting English, Hindi & Hinglish.',
    links: [],
  },
  {
    number: '03',
    span: 'tall',
    tag: 'ASP.NET Core · Angular · Azure SQL · JWT · EF Core',
    name: 'Employee Management System',
    id: 'employee',
    desc: 'Full-stack HR platform supporting onboarding, attendance, payroll, and leave management for 100+ employee records, with role-based dashboards and self-service modules.',
    links: [{ href: 'https://github.com/CHARAN-DUSA', label: 'Source Code →' }],
  },
]

export default function Projects() {
  useEffect(() => {
    waitForGSAP(() => {
      fadeLeft('.work-title', '.work')
      fadeUp('.work-item', '.work-grid', { stagger: 0.15, y: 80 })
    })
  }, [])

  return (
    <section className="work" id="work">
      <div className="work-header">
        <p className="work-eyebrow">— Selected Projects</p>
        <h2 className="work-title">My <span className="accent">Work</span></h2>
      </div>
      <div className="work-grid">
        {projects.map((p) => (
          <div key={p.number} className={`work-item ${p.span}`}>
            <div className="work-number">{p.number}</div>
            <div className="work-info">
              <span className="work-tag">{p.tag}</span>
              <h3 className="work-name">{p.name}</h3>
              <p className="work-desc">{p.desc}</p>
              <div className="work-links">
                <Link to={`/projects/${p.id}`} className="work-link">
                  View Details →
                </Link>
                {p.links.map((l, i) => (
                  <a key={i} className="work-link secondary" href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
