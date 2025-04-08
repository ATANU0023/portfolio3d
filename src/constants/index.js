import {

  backend,
  creator,
  web,
  javascript,

  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  priceapp,
  shopify,
  carrent,
  easyRecipe,
  tripguide,
  atenix,
  threejs,
  gemini,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "CBMO AI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing REST APIs and ensuring Databases compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Book Store",
    description:
      "Web-based platform that allows users to add, book, and delete, update books, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Easy Recipes",
    description:
      "Web application that enables users to search for food recipes ,user can get the ingridients information .",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: easyRecipe,
    source_code_link: "https://github.com/",
  },
  {
    name: "Price app",
    description:
      "A awsome place to say no more burgening, here you can track the price of the product and buy it at a less price.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "webScreping",
        color: "pink-text-gradient",
      },
      {
        name:"nodemailer",
        color: "blue-text-gradient"
      }
    ],
    image: priceapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Atenix theme",
    description: "a vscode dark thene for the developers",
    tags: [
      {
        name: "yo",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "microsoft",
        color: "pink-text-gradient",
      },
    ],
    image: atenix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gemini model",
    description: "clone of google gemini AI model, using gemini 1.0 model",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gemin 1.0",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
