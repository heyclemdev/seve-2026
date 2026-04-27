import { useState, useEffect, useRef } from "react";
import "./Reservation.css";

export default function Reservation() {
  const refs = useRef([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleReserve = () => setShowPopup(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="reservation" id="reservation">
      <div className="resa-text reveal" ref={(el) => (refs.current[0] = el)}>
        <div className="section-label">Table</div>
        <h2>
          Réservez
          <br />
          votre soirée
        </h2>
        <p>
          Ouvert du mardi au samedi, midi et soir. Capacité de 36 couverts —
          nous vous recommandons de réserver.
        </p>
        <div className="resa-infos">
          {[
            { ico: "📍", label: "14 rue de la Paix, Marseille 6e", info: "" },
            { ico: "📞", label: "04 91 00 00 00", info: "Lun–Sam 10h–22h" },
            { ico: "🕐", label: "Service du soir", info: "19h – 22h30" },
            { ico: "🕐", label: "Service du midi", info: "12h – 14h30" },
          ].map((line, i) => (
            <div className="resa-info-line" key={i}>
              <span className="ico">{line.ico}</span>
              <strong>{line.label}</strong>
              {line.info && <span>{line.info}</span>}
            </div>
          ))}
        </div>
      </div>

      <div
        className="resa-form reveal reveal-delay-2"
        ref={(el) => (refs.current[1] = el)}
      >
        <div className="form-row">
          <div className="form-group">
            <label>Prénom</label>
            <input type="text" placeholder="Lucas" />
          </div>
          <div className="form-group">
            <label>Nom</label>
            <input type="text" placeholder="Martin" />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="lucas@mail.fr" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Nombre de couverts</label>
            <select defaultValue="2">
              {[
                "1 personne",
                "2 personnes",
                "3 personnes",
                "4 personnes",
                "5 personnes",
                "6+ personnes",
              ].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Service</label>
          <select>
            <option>Déjeuner (12h – 14h30)</option>
            <option>Dîner (19h – 22h30)</option>
          </select>
        </div>
        <button className="btn-reserve" onClick={handleReserve}>
          Confirmer la réservation →
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <span className="popup-icon">✓</span>
            <h3>Réservation confirmée</h3>
            <p>
              Nous vous attendons ! Un email de confirmation vous sera envoyé.
            </p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
}
