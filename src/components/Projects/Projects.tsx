import { useEffect, useState } from "react";
import {
FaArrowLeft,
FaArrowRight,
FaExternalLinkAlt,
FaGithub,
FaCode,
} from "react-icons/fa";

import { projects } from "../../data/projects";

import dashboardImage from "../../assets/img/dashboard 2.png";

import "./Projects.css";

const Projects = () => {
const [activeIndex, setActiveIndex] = useState(0);

const totalProjects = projects.length;

const nextProject = () => {
setActiveIndex((current) =>
current === totalProjects - 1 ? 0 : current + 1,
);
};

const previousProject = () => {
setActiveIndex((current) =>
current === 0 ? totalProjects - 1 : current - 1,
);
};

useEffect(() => {
const handleKeyDown = (event: KeyboardEvent) => {
if (event.key === "ArrowRight") {
nextProject();
}


  if (event.key === "ArrowLeft") {
    previousProject();
  }
};

window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
};


}, [totalProjects]);

return ( <section className="projects" id="projects"> <div className="projects__container container"> <div className="section-heading"> <div> <span className="section-heading__number">
02 </span>


        <p className="section-heading__eyebrow">
          PROJETOS SELECIONADOS
        </p>

        <h2 className="section-heading__title">
          O que eu <span>construo.</span>
        </h2>
      </div>

      <p className="section-heading__description">
        Alguns dos projetos que representam minha evolução,
        minhas decisões técnicas e minha forma de transformar
        ideias em aplicações.
      </p>
    </div>

    <div className="projects__carousel">
      <div className="projects__track">
        {projects.map((project, index) => {
          const position = index - activeIndex;

          const isNoirAvenue =
            project.title.toLowerCase() === "noir avenue";

          return (
            <article
              key={project.id}
              className={`project-card ${
                position === 0
                  ? "project-card--active"
                  : ""
              }`}
              style={{
                transform: `
                  translateX(${position * 72}%)
                  scale(${position === 0 ? 1 : 0.86})
                `,
              }}
            >
              <div className="project-card__image">
                {isNoirAvenue ? (
                  <img
                    src={dashboardImage}
                    alt="Dashboard do projeto Noir Avenue"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                  />
                ) : (
                  <div className="project-card__placeholder">
                    <FaCode />

                    <span>{project.title}</span>

                    <small>
                      Screenshot do projeto
                    </small>
                  </div>
                )}

                <span className="project-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.category}</span>

                  <span>
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(totalProjects).padStart(2, "0")}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card__technologies">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver projeto
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="projects__navigation">
        <button
          type="button"
          onClick={previousProject}
          aria-label="Projeto anterior"
        >
          <FaArrowLeft />
        </button>

        <div className="projects__progress">
          <span>
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <div className="projects__progress-line">
            <div
              style={{
                width: `${
                  ((activeIndex + 1) /
                    totalProjects) *
                  100
                }%`,
              }}
            />
          </div>

          <span>
            {String(totalProjects).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          onClick={nextProject}
          aria-label="Próximo projeto"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  </div>
</section>


);
};

export default Projects;
