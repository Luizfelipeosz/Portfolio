import { useState } from "react";
import {
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactToggle = () => {
    setContactOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" aria-label="Ir para o início">
          LF
        </a>

        <nav className="navbar__links" aria-label="Navegação principal">
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#journey">Trajetória</a>

          <div className="navbar__contact">
            <button
              type="button"
              className={`navbar__contact-button ${
                contactOpen ? "is-open" : ""
              }`}
              onClick={handleContactToggle}
              aria-expanded={contactOpen}
            >
              Contato
              <FaChevronDown />
            </button>

            {contactOpen && (
              <div className="navbar__contact-menu">
                <a
                  href="https://www.linkedin.com/in/luiz-felipe-o-souza-9a488b372/" target="_blank" rel="noreferrer"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/Luizfelipeosz" target="_blank" rel="noreferrer"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a href="mailto:luizfelipeolsouz@gmail.com" target="_blank" rel="noreferrer">
                  <FaEnvelope />
                  <span>Email</span>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;