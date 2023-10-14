import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    tailwind,
    git,
    figma,
    spacetourism,
    tictactoe,
    calculator,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Video Corsi Online e Progetti individuali",
      iconBg: "#80BCA3",
      date: "May 2023 - Present",
      points: [
        "Oltre 50 ore di video corsi HTML CSS JAVASCRIPT Beginner-Intermediate-Advanced.",
        "20+ ore video corsi libreria React e React-three per sviluppo web 3D.",
        "10+ ore di corsi TailwindCSS.",
        "Utilizzo Figma per sviluppo progetti web presenti su FrontEnd Challenges.",
      ],
    },
    {
      title: "Store Manager",
      company_name: "S&V EssilorLuxottica",
      iconBg: "#F3B562",
      date: "May 2023 - Present",
      points: [
        "Organizzare le attività all'interno dello store: dall'arrivo delle merci ai turni del proprio team",
        "Analizzare i dati e misurare i risultati ottenuti, mettendo in atto azioni specifiche per raggiungere gli obiettivi di fatturato",
        "Formare e supervisionare il team",
        "Problem Solving e precisione",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Space Tourism",
      description:
        "Sito web dedicato al turismo nello spazio, dove puoi navigare tra diverse pagine per scoprire le destinazioni spaziali, conoscere la squadra e le tecnologie all'avanguardia.",
      tags: [
        {
          name: "HTML",
          color: "text-[#004256] drop-shadow-md",
        },
        {
          name: "CSS",
          color: "text-[#004256] drop-shadow-md",
        },
        {
          name: "JavaScript",
          color: "text-[#004256] drop-shadow-md",
        },
      ],
      image: spacetourism,
      source_code_link: "https://github.com/AdrianFRC/space-toursim-website",
    },
    {
      name: "Tic Tac Toe",
      description:
        "Applicazione Web che ti permette di giocare al classico gioco TRIS tra effetti grafici e colori accattivanti, sviluppato in Vanilla HTML CSS JS e rifatto con la libreria React.",
      tags: [
        {
          name: "react",
          color: "text-[#004256] drop-shadow-md",
        },
        {
          name: "typescript",
          color: "text-[#004256] drop-shadow-md",
        },
        {
          name: "CSS",
          color: "text-[#004256] drop-shadow-md",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/AdrianFRC/Tic-Tac-Toe-Project-React-Refactor",
    },
    {
      name: "Calculator",
      description:
        "Applicazione Web della classica calcolatrice che permette di effettuari le operazioni basilari, una sfida divertente dove ho messo in pratica nozioni piu' avanzate di css.  ",
      tags: [
        {
          name: "HTML",
          color: "text-[#004256] drop-shadow-md",
        },
        {
          name: "CSS",
          color: "text-[#004256] drop-shadow-md",
        },
        {
          name: "JavaScript",
          color: "text-[#004256] drop-shadow-md",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/AdrianFRC/calculator-app-main",
    },
  ];
  
  export { services, technologies, experiences, projects };