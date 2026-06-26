import { useEffect } from 'react'
import { fadeUp, waitForGSAP } from '../utils/motion'
import './Experience.css'
const jobs = [{
  period:'Jul 2025 – Present', company:'Salesforce', role:'CRM Trainee',
  bullets:['Completed 40+ Salesforce Trailhead modules and earned 35+ badges across CRM, automation, and platform development.','Built automation workflows, validation rules, approval processes, and custom dashboards.','Hands-on with Apex, SOQL, Flow Builder, Lightning Components, and role-based security models.'],
}]
export default function Experience() {
  useEffect(()=>{ waitForGSAP(()=>{ fadeUp('.exp-item','.exp-section',{stagger:.15,y:40}) }) },[])
  return (
    <section className="exp-section" id="experience">
      <p className="exp-eyebrow">— Work History</p>
      <h2 className="exp-title">Experi<span className="accent">ence</span></h2>
      {jobs.map(j=>(
        <div key={j.company} className="exp-item">
          <div className="exp-meta"><p className="exp-period">{j.period}</p><p className="exp-company">{j.company}</p></div>
          <div className="exp-body">
            <h3 className="exp-body-role">{j.role}</h3>
            <ul className="exp-body-desc">{j.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>
          </div>
        </div>
      ))}
    </section>
  )
}
