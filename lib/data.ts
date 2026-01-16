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
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadncn"],
  },
  {
    company: "Sutrix Solutions",
    role: "Frontend Developer",
    period: "2020 - 2022",
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
    period: "2019 - 2020",
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
    tech: ["Nextjs", "React", "Tailwind CSS", "Shadcn"],
    github: "https://github.com/tuongle2604/next-movie",
    demo: "https://next-movie.tuongle.dev/",
    featured: true,
  },
  {
    name: "Next Store",
    description:
      "Simple ecommerce website using nextjs, tailwindcss, shadcn integrated with payloadcms for content management.",
    tech: ["Nextjs", "React", "Tailwind CSS", "Shadcn"],
    github: "https://github.com/tuongle2604/next-store-with-payloadcms",
    demo: "https://next-store.tuongle.dev/",
    featured: true,
  },
  {
    name: "Next Store CMS",
    description:
      "A cms for ecommerce website using nextjs, payloadcms and postgresql for managing products and content.",
    tech: ["Next.js", "PayloadCMS", "Neon", "PostgreSQL"],
    github: "https://github.com/tuongle2604/next-store-with-payloadcms",
    demo: "https://next-store-cms.tuongle.dev/",
    featured: true,
  },
  // {
  //   name: "E-commerce Platform",
  //   description: "Full-stack e-commerce solution with SSR optimization and dynamic pricing.",
  //   tech: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
  // {
  //   name: "Analytics CLI Tool",
  //   description: "Command-line tool for analyzing and reporting on web performance metrics.",
  //   tech: ["Node.js", "TypeScript", "Commander.js"],
  //   github: "https://github.com",
  // },
  // {
  //   name: "Design System Documentation",
  //   description: "Comprehensive documentation site for design system with live component previews.",
  //   tech: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
]

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "React Hooks", "Server Components", "Client Components"],
  },
  {
    name: "UI & Design",
    skills: ["Tailwind CSS", "shadcn/ui", "Radix UI", "CSS Modules", "Responsive Design", "Accessibility (WCAG)"],
  },
  {
    name: "Performance & Security",
    skills: ["Web Vitals Optimization", "Code Splitting", "XSS Prevention", "CSP", "CORS", "Performance Auditing"],
  },
  {
    name: "Tooling",
    skills: ["Vite", "Turbopack", "ESLint", "Prettier", "Vitest", "Playwright", "Git"],
  },
  {
    name: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Supabase", "Authentication"],
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
