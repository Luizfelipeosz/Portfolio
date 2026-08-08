import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <div className="contact__number">
          07
        </div>

        <p className="contact__eyebrow">
          ENTRE EM CONTATO
        </p>

        <h2>
          Vamos construir
          <span> algo.</span>
        </h2>

        <p className="contact__description">
          Estou aberto a oportunidades, projetos e
          conversas que possam gerar novas possibilidades.
        </p>

        <a
          href="mailto:luizfelipeolsouz@gmail.com"
          className="contact__email"
        >
          <span>luizfelipeolsouz@gmail.com</span>

          <FaArrowUpRightFromSquare />
        </a>

        <div className="contact__links">
          <a
            href="https://www.linkedin.com/in/luiz-felipe-o-souza-9a488b372/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>

          <a
            href="https://github.com/Luizfelipeosz"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a href="mailto:luizfelipeolsouz@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;