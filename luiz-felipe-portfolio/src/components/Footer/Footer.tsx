import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <a href="#home" className="footer__logo">
            LF
          </a>

          <p>
            Desenvolvido por Luiz Felipe.
            <br />
            React · TypeScript · Vite
          </p>

          <a
            href="#home"
            className="footer__back"
            aria-label="Voltar ao topo"
          >
            <FaArrowUp />
          </a>
        </div>

        <div className="footer__bottom">
          <span>
            © {currentYear} Luiz Felipe. Todos os direitos
            reservados.
          </span>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;