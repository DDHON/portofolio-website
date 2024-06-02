import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  logo2,
  job,
  work2,
  work3,
  work1,
} from "../public/assets/index";
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Next Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
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
];

const experiences = [
  {
    title: "Intern Frontend Developer",
    company_name: "Batu Kumbung, West Lombok",
    icon: logo2,
    iconBg: "#383E56",
    date: "Juny 2021 - August 2021",
    points: [
      " Developed an e-commerce platform to support local small and medium enterprises (SMEs) in the village.",
      "Collaborated with small business owners to digitalize their products and expand market reach.",
      " Enhancedtechnical and communication skills through direct interaction with end-users and local stakeholders.",
    ],
  },
  {
    title: "Freelance React Developer",
    company_name: "",
    icon: job,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed responsive websites for several small clients using Next.js.",
      "Collaborated with clients to understand their needs and provide effective and user-friendly solutions.",
      "Assisted family businesses in creating websites to expandtheir client reach.",
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
    name: "Devflow",
    description:
      "DevFlow is a comprehensive full-stack project that I developed during a course at JavaScript Mastery. The project showcases my proficiency in modern web development technologies and tools",
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
    image: work2,
    source_code_link: "https://github.com/DDHON/stack-overflow-nextjs13",
  },
  {
    name: "Travelo",
    description:
      "Travelo is a captivating landing page project developed in collaboration with my web designer colleague, Irfan Rahmat. The landing page serves as a comprehensive travel website where users can book trips, read trip reviews, explore services offered by Travelo, and subscribe to receive the latest events via email",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Landing page",
        color: "green-text-gradient",
      },
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: work3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portofolio",
    description: "This is Portofolio website what you see now",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: work1,
    source_code_link: "https://github.com/DDHON/portofolio-website",
  },
];
export { services, technologies, experiences, testimonials, projects };
