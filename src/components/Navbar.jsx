import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = ['work','skills','about','education','contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isDetail = location.pathname.startsWith('/projects/') || location.pathname === '/connect'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      let current = ''
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id')
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { document.body.classList.toggle('menu-open', menuOpen) }, [menuOpen])

  return (
    <nav className={`main-nav${scrolled ? ' scrolled' : ''}${isDetail ? ' on-dark' : ''}`}>
      <Link className="nav-logo" to="/">Charan Dusa</Link>
      {isDetail ? (
        <Link to="/#work" className="nav-back-link">
          <span className="back-arrow">←</span> Back to Work
        </Link>
      ) : (
        <>
          <ul className="nav-desktop">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l}`} className={active === l ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {[0,1,2].map(i => <span key={i} style={{ background: menuOpen ? '#f5f0e8' : '#1a1a1a' }} />)}
          </button>
          <ul className={`nav-mobile${menuOpen ? ' open' : ''}`}>
            {links.map(l => (
              <li key={l}>
                <a href={`#${l}`} onClick={() => setMenuOpen(false)}>{l}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  )
}
