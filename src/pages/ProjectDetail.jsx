import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { waitForGSAP } from '../utils/motion'
import './ProjectDetail.css'

const projects = {
  medisphere: {
    number: '01',
    bgText: 'MEDISPHERE',
    tags: ['ASP.NET Core 8', 'Angular 20', 'SQL Server', 'SignalR', 'Razorpay', 'Docker'],
    name: 'Medi',
    nameAccent: 'Sphere',
    desc: 'Production-ready healthcare appointment platform with 50+ RESTful API endpoints, 3 user roles (Patient, Doctor, Admin), real-time notifications via SignalR, Razorpay payments, JWT auth with refresh token rotation, and Docker-containerised deployment.',
    github: 'https://github.com/CHARAN-DUSA',
    liveDemo: null,
    screenshots: [
      { label: 'Admin Dashboard' },
      { label: 'Doctor Panel' },
      { label: 'Patient Booking' },
    ],
    problem: `Healthcare scheduling is fragmented — patients chase appointments through phone calls, doctors lack real-time visibility, and admins manage everything manually.
    
MediSphere unifies the experience: patients book instantly, doctors receive real-time notifications, and admins oversee the entire platform from a single dashboard with revenue analytics and payout tracking.`,
    features: [
      '50+ RESTful API endpoints with Clean Architecture (Domain / Application / Infrastructure / API)',
      '3 role-based dashboards — Patient, Doctor, Admin — with JWT auth & refresh token rotation',
      'Real-time notifications and appointment updates via SignalR',
      'Razorpay payment gateway integration with transaction history',
      'Email notification system with cross-client HTML templates (Brevo API + SMTP fallback)',
      'Revenue Reports & Payout Analytics with platform fee, tax, and commission breakdowns',
      'Hangfire background jobs for scheduled reminders and cleanup tasks',
      'Docker-containerised deployment with Redis caching layer',
    ],
    tech: [
      { name: 'ASP.NET Core 8', role: 'Backend API' },
      { name: 'Angular 20', role: 'Frontend' },
      { name: 'SQL Server', role: 'Database' },
      { name: 'EF Core', role: 'ORM' },
      { name: 'SignalR', role: 'Real-time' },
      { name: 'Redis', role: 'Caching' },
      { name: 'Razorpay', role: 'Payments' },
      { name: 'Docker', role: 'Deployment' },
    ],
  },

  finwise: {
    number: '02',
    bgText: 'FINWISE INDIA',
    tags: ['ASP.NET Core', 'Angular', 'Redis', 'SignalR', 'AI Chatbot'],
    name: 'Fin',
    nameAccent: 'Wise India',
    desc: 'AI-powered financial planning platform with 20+ calculators (SIP, EMI, retirement, tax), Redis caching, real-time dashboard updates, and a multilingual chatbot supporting English, Hindi & Hinglish.',
    github: 'https://github.com/CHARAN-DUSA',
    liveDemo: null,
    screenshots: [
      { label: 'Financial Dashboard' },
      { label: 'SIP Calculator' },
      { label: 'AI Chatbot' },
    ],
    problem: `Financial literacy in India is low — most people don't have access to personalised financial guidance and struggle with complex instruments like SIPs, EMIs, and tax planning.

FinWise India democratises financial planning with intuitive calculators, real-time dashboards, and an AI chatbot that communicates in English, Hindi, and Hinglish — meeting users where they are.`,
    features: [
      '20+ financial calculators — SIP, EMI, retirement corpus, tax estimation, and more',
      'Multilingual AI chatbot supporting English, Hindi & Hinglish conversations',
      'Real-time dashboard updates via SignalR for live portfolio tracking',
      'Redis caching for fast repeated calculations and session state',
      'Clean Architecture backend with ASP.NET Core and CQRS/MediatR patterns',
      'Angular frontend with standalone component architecture and signals',
      'Responsive design optimised for mobile-first financial interactions',
      'Comprehensive error handling and input validation across all calculators',
    ],
    tech: [
      { name: 'ASP.NET Core', role: 'Backend API' },
      { name: 'Angular', role: 'Frontend' },
      { name: 'Redis', role: 'Caching' },
      { name: 'SignalR', role: 'Real-time' },
      { name: 'MediatR', role: 'CQRS' },
      { name: 'EF Core', role: 'ORM' },
      { name: 'SQL Server', role: 'Database' },
      { name: 'AI Chatbot', role: 'NLP Layer' },
    ],
  },

  employee: {
    number: '03',
    bgText: 'EMPLOYEE MGMT',
    tags: ['ASP.NET Core', 'Angular', 'Azure SQL', 'JWT', 'EF Core'],
    name: 'Employee',
    nameAccent: 'Management',
    desc: 'Full-stack HR platform supporting onboarding, attendance, payroll, and leave management for 100+ employee records, with role-based dashboards and self-service modules.',
    github: 'https://github.com/CHARAN-DUSA',
    liveDemo: null,
    screenshots: [
      { label: 'HR Dashboard' },
      { label: 'Employee Profiles' },
      { label: 'Leave Management' },
    ],
    problem: `HR teams in growing organisations are bogged down with manual processes — spreadsheet-based attendance, email leave requests, and fragmented payroll records slow everything down.

The Employee Management System centralises all HR operations into a single platform, giving admins full visibility and giving employees a self-service portal to manage their own records and requests.`,
    features: [
      'Role-based access control — HR Admin, Manager, and Employee self-service portals',
      'Onboarding module with document checklist and new-hire tracking',
      'Attendance management with check-in/check-out logging and monthly reports',
      'Leave management with approval workflows and balance tracking',
      'Payroll processing with salary breakdowns and payslip generation',
      'Employee profiles for 100+ records with full CRUD operations',
      'Azure SQL database with EF Core migrations and relational schema',
      'JWT authentication with role-based route guards on the Angular frontend',
    ],
    tech: [
      { name: 'ASP.NET Core', role: 'Backend API' },
      { name: 'Angular', role: 'Frontend' },
      { name: 'Azure SQL', role: 'Database' },
      { name: 'EF Core', role: 'ORM' },
      { name: 'JWT', role: 'Auth' },
      { name: 'Clean Arch', role: 'Architecture' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'CSS / SCSS', role: 'Styling' },
    ],
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects[id]
  const [lbSrc, setLbSrc] = useState('')
  const [lbOpen, setLbOpen] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    waitForGSAP(() => {
      const g = window.gsap
      const ST = window.ScrollTrigger
      g.registerPlugin(ST)

      g.from('.pd-screenshot-item', {
        opacity: 0, y: 60, duration: 0.7, stagger: 0.12,
        ease: 'power3.out', immediateRender: false,
        scrollTrigger: { trigger: '.pd-screenshots', start: 'top 80%', toggleActions: 'play reverse play reverse' },
      })
      g.from('.pd-detail-block', {
        opacity: 0, y: 50, duration: 0.7, stagger: 0.2,
        ease: 'power3.out', immediateRender: false,
        scrollTrigger: { trigger: '.pd-details', start: 'top 80%', toggleActions: 'play reverse play reverse' },
      })
      g.from('.pd-tech-card', {
        opacity: 0, y: 40, duration: 0.6, stagger: 0.07,
        ease: 'power3.out', immediateRender: false,
        scrollTrigger: { trigger: '.pd-tech-grid', start: 'top 85%', toggleActions: 'play reverse play reverse' },
      })
    })
  }, [id])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLbOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = lbOpen ? 'hidden' : ''
  }, [lbOpen])

  if (!project) return (
    <div style={{ padding: '10rem 3rem', minHeight: '100vh' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Project not found.</h2>
      <Link to="/" style={{ fontFamily: 'var(--font-body)', color: 'var(--accent)', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>← Back home</Link>
    </div>
  )

  const problemParagraphs = project.problem.trim().split('\n\n')

  return (
    <div ref={pageRef}>

      {/* Lightbox */}
      <div
        className={`pd-lightbox${lbOpen ? ' open' : ''}`}
        onClick={(e) => { if (e.target.classList.contains('pd-lightbox')) setLbOpen(false) }}
      >
        <button className="pd-lightbox-close" onClick={() => setLbOpen(false)}>✕</button>
        <img className="pd-lightbox-img" src={lbSrc} alt="screenshot" />
      </div>

      {/* Hero */}
      <section className="pd-hero" data-bg-text={project.bgText}>
        <div className="pd-hero-meta">
          <span className="pd-hero-number">{project.number}</span>
          {project.tags.map((t) => <span key={t} className="pd-hero-tag">{t}</span>)}
        </div>
        <h1 className="pd-hero-title">
          {project.name}<span className="accent">{project.nameAccent}</span>
        </h1>
        <div className="pd-hero-bottom">
          <p className="pd-hero-desc">{project.desc}</p>
          <div className="pd-hero-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="pd-btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="pd-btn-primary">
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="pd-screenshots">
        <p className="pd-section-label">— Screenshots</p>
        <div className="pd-screenshots-grid">
          {project.screenshots.map((s, i) => (
            <div
              key={i}
              className="pd-screenshot-item"
              onClick={() => { if (s.src) { setLbSrc(s.src); setLbOpen(true) } }}
            >
              {s.src
                ? <img src={s.src} alt={s.label} />
                : <div className="pd-screenshot-placeholder">{s.label}</div>
              }
              <div className="pd-screenshot-overlay"><span>{s.label}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="pd-details">
        <div className="pd-detail-block">
          <p className="pd-section-label">— The Problem</p>
          <h2>Why I <span className="accent">built</span> this</h2>
          {problemParagraphs.map((para, i) => (
            <p key={i} style={{ marginBottom: i < problemParagraphs.length - 1 ? '1.2rem' : 0 }}>
              {para.trim()}
            </p>
          ))}
        </div>
        <div className="pd-detail-block">
          <p className="pd-section-label">— Features</p>
          <h2>What it <span className="accent">does</span></h2>
          <ul className="pd-features-list">
            {project.features.map((f, i) => (
              <li key={i}><span className="pd-feature-dot" />{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pd-tech">
        <p className="pd-section-label">— Tech Stack</p>
        <h2>Built <span className="accent">with</span></h2>
        <div className="pd-tech-grid">
          {project.tech.map((t) => (
            <div key={t.name} className="pd-tech-card">
              <div className="pd-tech-name">{t.name}</div>
              <div className="pd-tech-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pd-cta">
        <div className="pd-cta-text">
          <h2>See the<br />source code</h2>
          <p>Full codebase available on GitHub</p>
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="pd-btn-white">
          View on GitHub →
        </a>
      </section>

    </div>
  )
}
