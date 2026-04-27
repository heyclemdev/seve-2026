import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">Sève</div>
      <div className="nav-links">
        <button onClick={() => scrollTo('concept')}>Le restaurant</button>
        <Link to="/menu">Menu</Link>
        <button onClick={() => scrollTo('notre-histoire')}>Notre histoire</button>
        <button onClick={() => scrollTo('reservation')} className="nav-cta">
          Réserver une table
        </button>
      </div>
    </nav>
  );
}
