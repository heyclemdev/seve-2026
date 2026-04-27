import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const revealRefs = useRef([])

  useEffect(() => {
    const timer = setTimeout(() => {
      revealRefs.current.forEach((el, i) => {
        if (!el) return
        setTimeout(() => el.classList.add('visible'), i * 120)
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag reveal" ref={el => revealRefs.current[0] = el}>
          Restaurant · Marseille 6e
        </div>
        <h1 className="hero-title reveal" ref={el => revealRefs.current[1] = el}>
          La<br /><em>cuisine</em><br />vivante
        </h1>
        <p className="hero-sub reveal" ref={el => revealRefs.current[2] = el}>
          Des produits de saison, des producteurs de confiance, une carte qui évolue chaque semaine. La cuisine comme elle devrait toujours être.
        </p>
        <div className="hero-actions reveal" ref={el => revealRefs.current[3] = el}>
          <a href="#reservation" className="btn-primary">Réserver une table</a>
          <a href="#menu" className="btn-ghost">Voir le menu <span>↓</span></a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-img-wrap">
          <svg className="hero-plate" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="160" fill="white" opacity="0.85"/>
            <circle cx="200" cy="200" r="150" fill="none" stroke="#D9D2C8" strokeWidth="1"/>
            <circle cx="200" cy="200" r="110" fill="none" stroke="#EDE7DC" strokeWidth="0.5"/>
            <ellipse cx="200" cy="185" rx="28" ry="55" fill="#7A9B7E" opacity="0.85" transform="rotate(-15 200 185)"/>
            <ellipse cx="200" cy="185" rx="28" ry="55" fill="none" stroke="#4A6B4F" strokeWidth="0.8" transform="rotate(-15 200 185)"/>
            <line x1="180" y1="220" x2="220" y2="152" stroke="#4A6B4F" strokeWidth="0.8" opacity="0.6"/>
            <circle cx="155" cy="210" r="18" fill="#C4714A" opacity="0.7"/>
            <circle cx="155" cy="210" r="18" fill="none" stroke="#A05535" strokeWidth="0.5"/>
            <circle cx="245" cy="195" r="12" fill="#EDE7DC" stroke="#C4A882" strokeWidth="1"/>
            <ellipse cx="175" cy="240" rx="22" ry="10" fill="#4A6B4F" opacity="0.5" transform="rotate(20 175 240)"/>
            <ellipse cx="228" cy="232" rx="16" ry="7" fill="#7A9B7E" opacity="0.5" transform="rotate(-10 228 232)"/>
            <line x1="190" y1="165" x2="186" y2="155" stroke="#4A6B4F" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="200" y1="160" x2="198" y2="150" stroke="#4A6B4F" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="210" y1="162" x2="213" y2="153" stroke="#4A6B4F" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M130 180 Q145 175 155 185 Q165 195 158 205" fill="none" stroke="#EDE7DC" strokeWidth="8" strokeLinecap="round" opacity="0.7"/>
            <path d="M240 220 Q255 215 262 225" fill="none" stroke="#EDE7DC" strokeWidth="6" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>
        <div className="hero-scroll-hint">Défiler</div>
      </div>
    </section>
  )
}
