import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </a>
          <a onClick={() => scrollToSection("about")} className="nav-link">
            About
          </a>
          <a onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </a>
          <a onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </a>
          <a onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </a>
        </div>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
