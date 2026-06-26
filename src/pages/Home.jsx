import { useEffect, useRef } from 'react'
import { waitForGSAP } from '../utils/motion'
import './Home.css'
const phrases = ['ASP.NET Core 8 · Angular · SQL Server','I build scalable full-stack products.','Clean Architecture. Production-ready.','Open to .NET Developer roles.']
export default function Home() {
  const typedRef = useRef(null)
  useEffect(() => {
    let phraseIndex=0,charIndex=0,isDeleting=false,timer
    function type() {
      const el=typedRef.current; if(!el)return
      const current=phrases[phraseIndex]
      el.textContent=isDeleting?current.slice(0,charIndex-1):current.slice(0,charIndex+1)
      isDeleting?charIndex--:charIndex++
      let speed=isDeleting?40:70
      if(!isDeleting&&charIndex===current.length){speed=2000;isDeleting=true}
      else if(isDeleting&&charIndex===0){isDeleting=false;phraseIndex=(phraseIndex+1)%phrases.length;speed=400}
      timer=setTimeout(type,speed)
    }
    const s=setTimeout(type,2000)
    return()=>{clearTimeout(s);clearTimeout(timer)}
  },[])
  useEffect(()=>{
    waitForGSAP(()=>{
      window.gsap.timeline({delay:.2})
        .from('.hero-eyebrow',{opacity:0,y:20,duration:.6,ease:'power3.out'})
        .from('.hero-title .line',{opacity:0,y:'100%',duration:.8,stagger:.12,ease:'power4.out'},'-=.3')
        .from('.hero-sub',{opacity:0,y:30,duration:.6,ease:'power3.out'},'-=.3')
        .from('.hero-cta',{opacity:0,y:20,scale:.95,duration:.5,ease:'back.out(1.7)'},'-=.2')
    })
  },[])
  return (
    <section className="hero" id="hero">
      <p className="hero-eyebrow">Full-Stack .NET Developer — Hyderabad, India</p>
      <h1 className="hero-title">
        <span className="line">I build</span>
        <span className="line accent">full-stack</span>
        <span className="line">products</span>
        <span className="line">that scale.</span>
      </h1>
      <p className="hero-sub"><span ref={typedRef} className="typed-text"/><span className="typed-cursor">|</span></p>
      <a className="hero-cta" href="#work">See my work <span className="arrow">→</span></a>
    </section>
  )
}
