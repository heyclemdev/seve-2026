import { useEffect, useRef } from 'react'
import './Histoire.css'

export default function Histoire() {
  const refs = useRef([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="histoire" id="notre-histoire">
      {/* Image de fond — vieille ville de Marseille */}
      <div className="histoire-img-wrap">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80"
          alt="Marseille, Vieux-Port"
          className="histoire-img"
        />
        <div className="histoire-overlay" />
      </div>

      <div className="histoire-content">
        <div className="histoire-text reveal" ref={el => refs.current[0] = el}>
          <div className="section-label histoire-label">Notre histoire</div>
          <h2>Nés à Marseille,<br />formés par <em>la mer</em></h2>
        </div>

        <div className="histoire-body reveal reveal-delay-2" ref={el => refs.current[1] = el}>
          <div className="histoire-col">
            <p>
              Thomas Ferraro et Lisa Ambrogiani se sont rencontrés à l'école Ferrandi en 2012. 
              Dix ans de cuisine dans des maisons étoilées — à Lyon, à Barcelone, à Palerme — 
              avant de revenir là où tout a commencé : Marseille.
            </p>
            <p>
              En 2022, ils ouvrent Sève dans l'ancienne épicerie Moretti, rue de la Paix. 
              L'idée était simple : cuisiner les produits qu'ils avaient vus pousser, être pêchés, être élevés. 
              Pas de circuit long, pas de compromis.
            </p>
          </div>
          <div className="histoire-col">
            <blockquote>
              "On voulait un endroit où les gens viennent sans savoir ce qu'ils vont manger — 
              et repartent en ayant tout compris."
              <cite>— Thomas Ferraro, chef co-fondateur</cite>
            </blockquote>
          </div>
        </div>

        <div className="histoire-stats reveal reveal-delay-3" ref={el => refs.current[2] = el}>
          {[
            { num: '2022', label: 'Ouverture' },
            { num: '36', label: 'Couverts' },
            { num: '12', label: 'Producteurs partenaires' },
            { num: '52', label: 'Cartes dans l\'année' },
          ].map(s => (
            <div className="histoire-stat" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
