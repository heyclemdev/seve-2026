import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const menuData = {
  Entrées: [
    { num: '01.', name: 'Burrata des Pouilles, tomates rôties', desc: "Burrata crémeuse sur lit de tomates confites au thym, huile d'olive de première pression, fleur de sel.", price: '16€', badge: 'Végétarien', type: 'veg' },
    { num: '02.', name: 'Tartare de daurade, citron confit', desc: 'Daurade de Méditerranée en tartare fin, citron confit maison, câpres de Pantelleria, huile vierge.', price: '19€', badge: 'Nouveau', type: 'new' },
    { num: '03.', name: 'Velouté de courge, noisettes torréfiées', desc: 'Courge muscade des Alpilles, crème légère, noisettes torréfiées, huile de noisette et ciboulette.', price: '13€', badge: 'Végétarien', type: 'veg' },
  ],
  Plats: [
    { num: '01.', name: "Agneau des Alpilles, jus réduit", desc: "Carré d'agneau rôti, jus corsé aux herbes de Provence, gratin dauphinois et légumes du moment.", price: '32€', badge: 'Signature', type: 'new' },
    { num: '02.', name: "Loup en croûte d'herbes", desc: 'Loup de Méditerranée, croûte herbes fraîches, émulsion beurre blanc et pommes de terre écrasées.', price: '28€', badge: 'Nouveau', type: 'new' },
    { num: '03.', name: 'Risotto aux cèpes, parmesan', desc: 'Risotto crémeux aux cèpes sauvages, parmesan 24 mois, huile de truffe et copeaux.', price: '22€', badge: 'Végétarien', type: 'veg' },
  ],
  Desserts: [
    { num: '01.', name: 'Tarte tatin, crème calvados', desc: 'Pommes caramélisées au beurre salé, pâte feuilletée maison, crème fouettée au calvados.', price: '11€', badge: 'Maison', type: '' },
    { num: '02.', name: 'Panna cotta, fruits rouges', desc: 'Panna cotta vanille, coulis de fruits rouges du marché, financier aux amandes.', price: '9€', badge: 'Végétarien', type: 'veg' },
    { num: '03.', name: 'Fondant chocolat, glace fleur de sel', desc: 'Fondant chocolat grand cru 70%, cœur coulant, glace vanille-fleur de sel artisanale.', price: '13€', badge: 'Nouveau', type: 'new' },
  ],
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Entrées')
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header reveal" ref={headerRef}>
        <div>
          <div className="section-label">Carte du moment</div>
          <h2>Ce que nous<br />cuisinons ce soir</h2>
        </div>
        <div className="menu-tabs">
          {Object.keys(menuData).map(tab => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <Link to="/menu" className="menu-see-all">Voir la carte complète →</Link>

      <div className="menu-grid">
        {menuData[activeTab].map((item, i) => (
          <div className="menu-item" key={`${activeTab}-${i}`} style={{ animationDelay: `${i * 0.08}s` }}>
            <span className="menu-item-num">{item.num}</span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="menu-item-footer">
              <span className="menu-item-price">{item.price}</span>
              {item.badge && <span className={`menu-item-badge ${item.type}`}>{item.badge}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
