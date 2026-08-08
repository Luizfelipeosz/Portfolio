import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiVite } from "react-icons/si";

import "./Stack.css";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: FaReact,
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: FaJs,
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: SiNextdotjs,
  },
  {
    name: "Vite",
    category: "Tooling",
    icon: SiVite,
  },
  {
    name: "HTML5",
    category: "Markup",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: FaCss3Alt,
  },
  {
    name: "Git",
    category: "Version Control",
    icon: FaGitAlt,
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: FaNodeJs,
  },
];

const Stack = () => {
  return (
    <section className="stack" id="stack">
      <div className="stack__container container">
        <div className="stack__heading">
          <span className="stack__number">05</span>

          <p className="stack__eyebrow">
            TECNOLOGIAS
          </p>

          <h2>
            Minha
            <span> stack.</span>
          </h2>
        </div>

        <div className="stack__grid">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                className="stack__item"
                key={technology.name}
              >
                <Icon />

                <div>
                  <h3>{technology.name}</h3>
                  <span>{technology.category}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stack;