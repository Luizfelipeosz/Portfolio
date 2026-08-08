import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Redes sociais">
      <div className="sidebar__line" />

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

      <a
        href="mailto:seuemail@email.com"
        aria-label="Enviar email"
      >
        <FaEnvelope />
      </a>

      <div className="sidebar__line" />
    </aside>
  );
};

export default Sidebar;