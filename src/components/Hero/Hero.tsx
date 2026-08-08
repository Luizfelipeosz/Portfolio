  import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaCode,
  } from "react-icons/fa6";

  import Perfil from "../../assets/img/Perfil.jpeg";

  import "./Hero.css";

  const Hero = () => {
  return ( <section className="hero" id="home"> <div className="hero__background"> <div className="hero__grid" />


      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
    </div>

    <div className="hero__container container">
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__status" />

          <span>FRONT-END DEVELOPER JR.</span>
        </div>

        <p className="hero__role">
          REACT · TYPESCRIPT · NEXT.JS
        </p>

        <h1 className="hero__title">
          Luiz Felipe
          <span>Oliveira Souza</span>
        </h1>

        <p className="hero__description">
          Desenvolvo aplicações web modernas com foco
          em arquitetura Front-End, experiência do usuário
          e evolução contínua de produtos.
        </p>

        <div className="hero__actions">
          <a
            href="#projects"
            className="hero__button hero__button--primary"
          >
            Ver projetos
            <FaArrowDown />
          </a>

          <a
            href="#contact"
            className="hero__button hero__button--secondary"
          >
            Entrar em contato
            <FaArrowUpRightFromSquare />
          </a>
        </div>

        <div className="hero__stack">
          <span>
            <FaCode />
            React
          </span>

          <span>TypeScript</span>
          <span>Next.js</span>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__visual-decoration hero__visual-decoration--top">
          <span />
          <span />
          <span />
        </div>

        <div className="hero__photo">
          <img
            src={Perfil}
            alt="Luiz Felipe Oliveira Souza"
          />
        </div>

        <div className="hero__badge">
          <div className="hero__badge-icon">
            <FaCode />
          </div>

          <div>
            <strong>Front-End</strong>

            <span>
              Building digital experiences
            </span>
          </div>
        </div>

        <div className="hero__number">
          <span>01</span>

          <small>INTRODUCTION</small>
        </div>
      </div>
    </div>

    <a href="#projects" className="hero__scroll">
      <span>SCROLL TO EXPLORE</span>

      <FaArrowDown />
    </a>
  </section>


  );
  };

  export default Hero;
