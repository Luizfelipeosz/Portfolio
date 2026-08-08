import { FaArrowRight } from "react-icons/fa6";

import "./Journey.css";

const journeyItems = [
  {
    year: "2025",
    title: "Transição para desenvolvimento",
    description:
      "Passei a direcionar minha carreira para desenvolvimento de software, concentrando meus estudos no ecossistema Front-End.",
  },
  {
    year: "2025 — 2026",
    title: "Construção de projetos",
    description:
      "Comecei a transformar conhecimento em aplicações reais, explorando React, TypeScript, arquitetura, APIs e boas práticas.",
  },
  {
    year: "2026",
    title: "Foco profissional",
    description:
      "Consolidei minha stack e passei a buscar oportunidades como desenvolvedor Front-End Jr., com projetos publicados e portfólio profissional.",
  },
];

const Journey = () => {
  return (
    <section className="journey" id="journey">
      <div className="journey__container container">
        <div className="journey__heading">
          <div>
            <span className="journey__number">06</span>

            <p className="journey__eyebrow">
              TRAJETÓRIA
            </p>

            <h2>
              Em
              <span> evolução.</span>
            </h2>
          </div>

          <p>
            Minha trajetória até aqui foi construída através
            de estudo, prática e principalmente projetos.
          </p>
        </div>

        <div className="journey__timeline">
          {journeyItems.map((item, index) => (
            <article
              className="journey__item"
              key={item.year}
            >
              <div className="journey__marker">
                <span />
              </div>

              <div className="journey__year">
                {item.year}
              </div>

              <div className="journey__content">
                <span>0{index + 1}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="journey__footer">
          <span>
            Próximo capítulo:
          </span>

          <strong>
            minha primeira oportunidade profissional.
          </strong>

          <a href="#contact" aria-label="Ir para contato">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;