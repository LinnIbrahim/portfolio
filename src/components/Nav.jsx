import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const SECTIONS = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Path', '#path'],
  ['Community', '#community'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark" aria-label={`${profile.name} — home`}>
          {profile.name}
        </a>
        <div className="nav-links">
          {SECTIONS.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
