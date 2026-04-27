import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuPage.css'

const menuData = {
  Entrées: [
    { num: '01', name: 'Burrata des Pouilles, tomates rôties', desc: "Burrata crémeuse sur lit de tomates confites au thym, huile d'olive de première pression, fleur de sel.", price: '16€', badge: 'Végétarien', type: 'veg' },
    { num: '02', name: 'Tartare de daurade, citron confit', desc: 'Daurade de Méditerranée en tartare fin, citron confit maison, câpres de Pantelleria, huile vierge.', price: '19€', badge: 'Nouveau', type: 'new' },
    { num: '03', name: 'Velouté de courge, noisettes torréfiées', desc: 'Courge muscade des Alpilles, crème légère, noisettes torréfiées, huile de noisette et ciboulette.', price: '13€', badge: 'Végétarien', type: 'veg' },
  ],
  Plats: [
    { num: '01', name: "Agneau des Alpilles, jus réduit", desc: "Carré d'agneau rôti, jus corsé aux herbes de Provence, gratin dauphinois et légumes du moment.", price: '32€', badge: 'Signature', type: 'new' },
    { num: '02', name: "Loup en croûte d'herbes", desc: 'Loup de Méditerranée, croûte herbes fraîches, émulsion beurre blanc et pommes de terre écrasées.', price: '28€', badge: 'Nouveau', type: 'new' },
    { num: '03', name: 'Risotto aux cèpes, parmesan', desc: 'Risotto crémeux aux cèpes sauvages, parmesan 24 mois, huile de truffe et copeaux.', price: '22€', badge: 'Végétarien', type: 'veg' },
  ],
  Desserts: [
    { num: '01', name: 'Tarte tatin, crème calvados', desc: 'Pommes caramélisées au beurre salé, pâte feuilletée maison, crème fouettée au calvados.', price: '11€', badge: 'Maison', type: '' },
    { num: '02', name: 'Panna cotta, fruits rouges', desc: 'Panna cotta vanille, coulis de fruits rouges du marché, financier aux amandes.', price: '9€', badge: 'Végétarien', type: 'veg' },
    { num: '03', name: 'Fondant chocolat, glace fleur de sel', desc: 'Fondant chocolat grand cru 70%, cœur coulant, glace vanille-fleur de sel artisanale.', price: '13€', badge: 'Nouveau', type: 'new' },
  ],
}

const categories = Object.keys(menuData)

export default function MenuPage() {
  const [active, setActive] = useState('Entrées')
  const navigate = useNavigate()

  return (
    <div className="menu-page">
      <header className="menu-page-header">
        <button className="menu-back" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </button>
        <span className="menu-page-logo">Sève</span>
        <span className="menu-page-season">Carte du moment</span>
      </header>

      <div className="menu-page-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`menu-page-tab ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-page-list">
        {menuData[active].map((item, i) => (
          <div className="menu-page-item" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="menu-page-item-top">
              <div className="menu-page-item-left">
                <span className="menu-page-num">{item.num}</span>
                <h3 className="menu-page-name">{item.name}</h3>
              </div>
              <span className="menu-page-price">{item.price}</span>
            </div>
            <p className="menu-page-desc">{item.desc}</p>
            {item.badge && (
              <span className={`menu-page-badge ${item.type}`}>{item.badge}</span>
            )}
          </div>
        ))}
      </div>

      <div className="menu-page-cta">
        <a href="/#reservation" className="menu-page-reserve">Réserver une table</a>
      </div>
    </div>
  )
}
