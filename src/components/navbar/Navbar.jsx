import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";


const Navbar = ({ activeSection, scrollToSection, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
   <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="navbar-container">
        <div className="logo">Portfolio</div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["home", "about", "projects", "skills", "education", "contact"].map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item ? "active" : ""}`}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
