import { useState, useEffect } from 'react'
import './BottomNav.css'

const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
    <path d="M7 2v20"/>
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
  </svg>
)

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const navItems = [
  { id: 'accueil', label: 'Accueil', href: '#', Icon: IconHome },
  { id: 'menu',    label: 'Menu',    href: '#menu', Icon: IconMenu },
  { id: 'notre-histoire', label: 'Histoire', href: '#notre-histoire', Icon: IconLeaf },
  { id: 'reservation',   label: 'Réserver',  href: '#reservation', Icon: IconCalendar },
]

export default function BottomNav() {
  const [active, setActive] = useState('accueil')

  useEffect(() => {
    const targets = [
      { el: document.querySelector('.hero'), id: 'accueil' },
      { el: document.getElementById('menu'), id: 'menu' },
      { el: document.getElementById('notre-histoire'), id: 'notre-histoire' },
      { el: document.getElementById('reservation'), id: 'reservation' },
    ].filter(t => t.el)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const match = targets.find(t => t.el === entry.target)
            if (match) setActive(match.id)
          }
        })
      },
      { threshold: 0.35 }
    )

    targets.forEach(t => observer.observe(t.el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="bottom-nav">
      {navItems.map(({ id, label, href, Icon }) => (
        <a
          key={id}
          href={href}
          className={`bottom-nav-item ${active === id ? 'active' : ''}`}
        >
          <span className="bottom-nav-icon"><Icon /></span>
          <span className="bottom-nav-label">{label}</span>
        </a>
      ))}
    </nav>
  )
}
