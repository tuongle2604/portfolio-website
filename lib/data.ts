export interface Experience {
  company: string
  role: string
  period: string
  // description: string
  bullets: string[]
  tech: string[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface Article {
  title: string
  description: string
  url: string
  date: string
}

export interface Contact {
  title: string
  link: string
  content: string
}

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    company: "FPT Telecom",
    role: "Frontend Developer",
    period: "01/2021 - 03/2025",
    // description: "Led frontend architecture and performance optimization initiatives",
    bullets: [
      "Built and maintained production web applications using React and Next.js, serving marketing and business-facing use cases with strong SEO and accessibility requirements",
      "Translated Figma designs and business requirements into scalable, reusable UI components andpage layouts",
      "Collaborated closely with backend and system teams to integrate APIs, resolve build and deployment issues, and ensure stable releases",
      "Improved front-end performance by optimizing rendering behavior, bundle size, and caching strategies",
      "Supported team members by resolving UI issues and reviewing pull requests to maintain code quality and standards",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadncn"],
  },
  {
    company: "Sutrix Solutions",
    role: "Frontend Developer",
    period: "10/2018 - 7/2020",
    // description: "Developed and maintained customer-facing applications",
    bullets: [
      "Developed front-end applications based on design specifications using Vue.js",
      "Analyzed user stories and collaborated with backend teams to integrate APIs",
      "Improved application performance through code splitting and lazy loading",
      "Delivered reusable UI components and ensured cross-browser compatibility",
    ],
    tech: ["Vuejs", "Vue custom element"],
  },
  {
    company: "Datamart Vietnam",
    role: "Web developer",
    period: "10/2017 - 10/2018",
    // description: "Built features for early-stage SaaS product",
    bullets: [
      "Built and maintained web applications using Vuejs",
      "Developed and maintained backend APIs using Express.jsand MySQL",
      "Gained experience working across the full web stack in a production environment",
    ],
    tech: ["Nodejs", "Expressjs", "Mysql", "Vuejs"],
  },
]

export const projects: Project[] = [
  {
    name: "Next Movie",
    description:
      "Movies app demo built using nextjs, tailwindcss, shadcn and The Movie Database API with multilanguage support.",
    tech: ["Nextjs", "React", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/tuongle2604/next-movie",
    demo: "https://next-movie.tuongle.dev/",
    featured: true,
  },
  {
    name: "Next Store",
    description:
      "Simple ecommerce website using nextjs, tailwindcss, shadcn integrated with payloadcms for content management.",
    tech: ["Nextjs", "React", "Tailwind CSS", "Monorepo"],
    github: "https://github.com/tuongle2604/next-store-with-payloadcms",
    demo: "https://next-store.tuongle.dev/",
    featured: true,
  },
  {
    name: "Next Store CMS",
    description:
      "A cms for ecommerce website using nextjs, payloadcms and postgresql for managing products and content.",
    tech: ["Nextjs", "PayloadCMS", "Neon", "PostgreSQL", "Monorepo"],
    github: "https://github.com/tuongle2604/next-store-with-payloadcms",
    demo: "https://next-store-cms.tuongle.dev/",
    featured: true,
  },
]

export const contacts: Contact[] = [
  {
    title: "Email",
    content: "tuongle2604@gmail.com",
    link: "mailto:tuongle2604@gmail.com"
  },
  {
    title: "Github",
    content: "github.com/tuongle2604",
    link: "http://github.com/tuongle2604"
  },
  {
    title: "Linkedin",
    content: "linkedin.com/in/tuong-le-fe96",
    link: "https://www.linkedin.com/in/tuong-le-fe96"
  }
] 
