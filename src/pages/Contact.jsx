import { useEffect } from 'react'
import { fadeUp, waitForGSAP } from '../utils/motion'
import './Contact.css'
export default function Contact() {
  useEffect(()=>{ waitForGSAP(()=>{ fadeUp('.contact-title','.contact',{y:60,duration:1,ease:'power4.out',start:'top 75%'}); fadeUp('.contact-email','.contact',{y:30,start:'top 65%'}) }) },[])
  return (
    <section className="contact" id="contact">
      <p className="contact-eyebrow">— Get In Touch</p>
      <h2 className="contact-title">Let's<br/>Build.</h2>
      <p className="contact-sub">Open to full-time .NET Full-Stack Developer roles. Let's build something great together.</p>
      <a className="contact-email" href="mailto:charandusa123@gmail.com">charandusa123@gmail.com</a>
      <div className="contact-links">
        <a href="https://github.com/CHARAN-DUSA" target="_blank" rel="noopener">GitHub ↗</a>
        <a href="https://linkedin.com/in/charan-dusa" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a href="tel:+917013745632">+91 70137 45632</a>
      </div>
    </section>
  )
}
