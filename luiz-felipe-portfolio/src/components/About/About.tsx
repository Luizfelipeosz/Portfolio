import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa6";

import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container container">
        <div className="about__heading">
          <span className="about__number">03</span>

          <p className="about__eyebrow">
            SOBRE MIM
          </p>

          <h2>
            Mais do que
            <span> código.</span>
          </h2>
        </div>

        <div className="about__content">
          <div className="about__intro">
            <p className="about__highlight">
              Sou Luiz Felipe, desenvolvedor Front-End
              focado em construir experiências web
              modernas e aplicações que façam sentido
              para quem está do outro lado da tela.
            </p>

            <p>
              Minha principal stack é baseada em React,
              TypeScript e tecnologias modernas do
              ecossistema JavaScript.
            </p>

            <p>
              Gosto de entender não apenas como uma
              interface funciona, mas também por que ela
              foi construída daquela maneira. Arquitetura,
              organização, experiência do usuário e
              evolução do produto fazem parte do meu
              processo.
            </p>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <div className="about__card-icon">
                <FaCode />
              </div>

              <span>01</span>

              <h3>
                Desenvolvimento
              </h3>

              <p>
                Interfaces e aplicações com React,
                TypeScript e ferramentas modernas.
              </p>
            </article>

            <article className="about__card">
              <div className="about__card-icon">
                <FaLaptopCode />
              </div>

              <span>02</span>

              <h3>
                Evolução contínua
              </h3>

              <p>
                Aprender, experimentar e melhorar
                constantemente minhas soluções.
              </p>
            </article>
          </div>
        </div>

        <div className="about__footer">
          <span>
            Atualmente focado em oportunidades como
            Front-End Developer Jr.
          </span>

          <a href="#contact">
            Vamos conversar
            <FaArrowUpRightFromSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;