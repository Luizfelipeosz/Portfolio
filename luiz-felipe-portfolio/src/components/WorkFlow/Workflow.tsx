import {
  FaMagnifyingGlass,
  FaCode,
  FaScrewdriverWrench,
  FaRocket,
} from "react-icons/fa6";

import "./Workflow.css";

const workflowSteps = [
  {
    number: "01",
    icon: FaMagnifyingGlass,
    title: "Entender",
    description:
      "Antes de escrever código, procuro entender o problema, os objetivos e quem vai utilizar a solução.",
  },
  {
    number: "02",
    icon: FaScrewdriverWrench,
    title: "Estruturar",
    description:
      "Penso na organização da aplicação, componentes, responsabilidades e tecnologias que fazem sentido para o projeto.",
  },
  {
    number: "03",
    icon: FaCode,
    title: "Construir",
    description:
      "Transformo a ideia em uma interface funcional, responsiva e com código organizado.",
  },
  {
    number: "04",
    icon: FaRocket,
    title: "Evoluir",
    description:
      "Testo, identifico problemas e continuo refinando a aplicação conforme novas necessidades aparecem.",
  },
];

const Workflow = () => {
  return (
    <section className="workflow">
      <div className="workflow__container container">
        <div className="workflow__heading">
          <div>
            <span className="workflow__number">04</span>

            <p className="workflow__eyebrow">
              PROCESSO
            </p>

            <h2>
              Como eu
              <span> trabalho.</span>
            </h2>
          </div>

          <p>
            Desenvolvimento não começa no editor de código.
            Meu processo passa por entender, estruturar,
            construir e evoluir.
          </p>
        </div>

        <div className="workflow__steps">
          {workflowSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className="workflow__step"
                key={step.number}
              >
                <div className="workflow__step-top">
                  <span>{step.number}</span>

                  <Icon />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;