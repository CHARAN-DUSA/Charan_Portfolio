import { useEffect } from 'react'
import './CustomCursor.css'
export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursorDot')
    const ring = document.getElementById('cursorRing')
    if (!dot || !ring) return
    const onMove = e => { if(!window.gsap)return; window.gsap.to(dot,{x:e.clientX,y:e.clientY,duration:.1}); window.gsap.to(ring,{x:e.clientX,y:e.clientY,duration:.25}) }
    const onEnter = () => { if(!window.gsap)return; window.gsap.to(ring,{width:56,height:56,borderColor:'#ff4d1c',duration:.3}); window.gsap.to(dot,{scale:0,duration:.3}) }
    const onLeave = () => { if(!window.gsap)return; window.gsap.to(ring,{width:36,height:36,borderColor:'#1a1a1a',duration:.3}); window.gsap.to(dot,{scale:1,duration:.3}) }
    window.addEventListener('mousemove', onMove)
    setTimeout(() => {
      document.querySelectorAll('a,button,.work-item,.skill-pill,.skill-card,.edu-item').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }, 500)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return (<><div className="cursor-dot" id="cursorDot" /><div className="cursor-ring" id="cursorRing" /></>)
}
