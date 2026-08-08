export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Noir Avenue",
    category: "Web Application",
    description:
      "Aplicação web desenvolvida com React e TypeScript, com autenticação, dashboard, perfil, favoritos, histórico e navegação protegida.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
    ],
    image: "",
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "Devyssey",
    category: "Web Application",
    description:
      "Aplicação web voltada para organização e acompanhamento da jornada de desenvolvimento.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    image: "",
    github: "#",
    demo: "#",
  },

  {
    id: 3,
    title: "PIG Bank",
    category: "Financial Application",
    description:
      "Interface de aplicação financeira desenvolvida com foco em organização visual e experiência do usuário.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    image: "",
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    title: "Relaxant's",
    category: "Web Application",
    description:
      "Aplicação web desenvolvida com foco em interface, navegação e experiência do usuário.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    image: "",
    github: "#",
    demo: "#",
  },
];