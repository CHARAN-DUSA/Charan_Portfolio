import { useEffect } from 'react'
import { fadeLeft, fadeUp, waitForGSAP } from '../utils/motion'
import './Education.css'
const edu = [
  {year:'2022 – 2026',degree:'B.Tech — AI & Data Science',school:'Guru Nanak Institute of Technical Campus, Hyderabad',score:'CGPA 8.55 / 10'},
  {year:'2020 – 2022',degree:'Intermediate (10+2)',school:'TSRJC, Korutla',score:'96.5%'},
]
const certs = ['AWS Cloud Practitioner','IBM SkillBuild — Web Dev','Salesforce — 35+ Badges','Ethical Hacking & Cyber Security']
export default function Education() {
  useEffect(()=>{ waitForGSAP(()=>{ fadeLeft('.edu-title','.edu-section'); fadeUp('.edu-item','.edu-grid',{stagger:.15,y:50,start:'top 85%'}); fadeUp('.cert-pill','.cert-grid',{stagger:.08,y:20,start:'top 90%'}) }) },[])
  return (
    <section className="edu-section" id="education">
      <p className="edu-eyebrow">— Background</p>
      <h2 className="edu-title">Education &amp;<br/><span className="accent">Certs</span></h2>
      <div className="edu-grid">
        {edu.map(e=>(
          <div key={e.year} className="edu-item">
            <p className="edu-year">{e.year}</p>
            <h3 className="edu-degree">{e.degree}</h3>
            <p className="edu-school">{e.school}</p>
            <span className="edu-score">{e.score}</span>
          </div>
        ))}
      </div>
      <div className="cert-grid">{certs.map(c=><span key={c} className="cert-pill">{c}</span>)}</div>
    </section>
  )
}
