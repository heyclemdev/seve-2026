import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Sève</h3>
          <p>
            Restaurant franco-méditerranéen. Cuisine du marché, vins naturels,
            terrasse ensoleillée.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {["Le restaurant", "La carte", "Les vins", "Réservation"].map(
              (l) => (
                <li key={l}>{l}</li>
              ),
            )}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Infos</h4>
          <ul>
            {[
              "Menus groupes",
              "Privatisation",
              "Offrir un repas",
              "Presse",
            ].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Horaires</h4>
          <ul>
            {[
              "Mar – Ven : 12h–14h30",
              "Mar – Sam : 19h–22h30",
              "Dim – Lun : fermé",
            ].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Sève — Tous droits réservés</p>
        <p>
          Réalisé par <a href="https://heyclem.dev">HeyClem</a>
        </p>
      </div>
    </footer>
  );
}
