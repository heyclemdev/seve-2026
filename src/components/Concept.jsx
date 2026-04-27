import { useEffect, useRef } from 'react'
import './Concept.css'

const IconPlace = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="10" width="24" height="18" rx="1.5" stroke="#7A9B7E" strokeWidth="1.2"/>
    <path d="M11 28 L11 20 Q11 17 16 17 Q21 17 21 20 L21 28" stroke="#7A9B7E" strokeWidth="1.2" fill="none"/>
    <path d="M2 12 L16 3 L30 12" stroke="#7A9B7E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="13" y="11" width="6" height="5" rx="0.5" stroke="#7A9B7E" strokeWidth="1"/>
  </svg>
)

const IconTeam = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="10" r="4.5" stroke="#7A9B7E" strokeWidth="1.2"/>
    <path d="M7 27 C7 21.5 11 18 16 18 C21 18 25 21.5 25 27" stroke="#7A9B7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <circle cx="7" cy="12" r="3" stroke="#7A9B7E" strokeWidth="1"/>
    <path d="M1 26 C1 22 3.5 19.5 7 19.5" stroke="#7A9B7E" strokeWidth="1" strokeLinecap="round" fill="none"/>
    <circle cx="25" cy="12" r="3" stroke="#7A9B7E" strokeWidth="1"/>
    <path d="M31 26 C31 22 28.5 19.5 25 19.5" stroke="#7A9B7E" strokeWidth="1" strokeLinecap="round" fill="none"/>
  </svg>
)

const IconExperience = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M8 6 L8 26" stroke="#7A9B7E" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 6 Q18 4 22 10 Q18 16 8 14" stroke="#7A9B7E" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
    <line x1="8" y1="14" x2="8" y2="18" stroke="#7A9B7E" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

export default function Concept() {
  const refs = useRef([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="concept" id="concept">
      <div className="concept-text reveal" ref={el => refs.current[0] = el}>
        <div className="section-label" style={{ color: 'var(--sage)' }}>Le restaurant</div>
        <h2>Un lieu,<br />une <em>table</em>,<br />une équipe</h2>
        <p>Sève occupe une ancienne épicerie fine du 6e arrondissement, entièrement rénovée dans un esprit chaleureux et dépouillé. 36 couverts, une terrasse ombragée, une cuisine ouverte.</p>
        <p>Ici, on mange bien, on boit bien, et on prend le temps.</p>
      </div>
      <div className="concept-visual reveal reveal-delay-2" ref={el => refs.current[1] = el}>
        <div className="concept-card featured">
          <div className="icon"><IconPlace /></div>
          <h4>Le lieu</h4>
          <p>Une salle intimiste de 36 couverts, une terrasse ombragée par un figuier centenaire, et une cuisine ouverte sur la salle.</p>
        </div>
        <div className="concept-card">
          <div className="icon"><IconTeam /></div>
          <h4>L'équipe</h4>
          <p>Deux chefs, un sommelier passionné, et une équipe de salle attentive sans être formelle.</p>
        </div>
        <div className="concept-card">
          <div className="icon"><IconExperience /></div>
          <h4>L'expérience</h4>
          <p>Pas de menu imposé, pas de chrono. Juste une succession de plats qui racontent la saison.</p>
        </div>
      </div>
    </section>
  )
}
