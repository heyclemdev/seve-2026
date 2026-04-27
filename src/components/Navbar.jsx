import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
        <a href="#concept">Le restaurant</a>
        <Link to="/menu">Menu</Link>
        <a href="#notre-histoire">Notre histoire</a>
        <a href="#reservation" className="nav-cta">
          Réserver une table
        </a>
      </div>
    </nav>
  );
}
