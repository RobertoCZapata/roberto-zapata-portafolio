import { PersonalInfo, Experience, Project, Skill, Education, Certification } from '@/types'

export const personalInfo: PersonalInfo = {
  fullName: "Roberto Carlos Zapata",
  title: "Senior Frontend Developer",
  summary: "Senior Frontend Developer con 6+ años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especialista en React, Next.js, TypeScript y Testing automatizado. Actualmente desarrollando para TicketMaster en Globant con comunicación 100% en inglés.",
  profileImage: "/images/profile.jpg",
  contactInfo: {
    email: "robertozapataz25@gmail.com",
    phone: "+57 3102371684",
    location: "Bucaramanga, Santander, Colombia",
    website: "https://roberto-zapata.dev",
    linkedin: "https://linkedin.com/in/robertoczapata",
    github: "https://github.com/robertozapata",
    twitter: "@robertoczapata"
  }
}

export const experiences: Experience[] = [
  {
    id: "globant-2024",
    company: "Globant",
    position: "Senior Frontend Developer",
    duration: "Dic 2024 - Presente",
    startDate: "2024-12-04",
    endDate: null,
    location: "Bucaramanga, Colombia (Remote)",
    projectName: "TicketMaster Platform",
    description: "Desarrollo y mantenimiento de la plataforma global de TicketMaster utilizando React.js en ambiente 100% en inglés",
    achievements: [
      "Migré exitosamente el framework de testing de Cypress a Playwright, mejorando velocidad de ejecución 30%",
      "Implementé integración completa de Google Analytics 4 (G4A) para tracking avanzado de usuarios",
      "Resolví +50 bugs críticos reportados por cliente internacional",
      "Mantuve 95% cobertura de código con pruebas unitarias Jest",
      "Participé en pipelines CI/CD automatizados con linting y generación de demo links"
    ],
    technologies: [
      "React.js",
      "JavaScript ES6+",
      "Jest",
      "Playwright",
      "Cypress",
      "Google Analytics 4",
      "Git",
      "CI/CD Pipelines",
      "Scrum"
    ],
    isRemote: true
  },
  {
    id: "previous-experience",
    company: "Empresa Anterior",
    position: "Frontend Developer",
    duration: "2018 - 2024",
    startDate: "2018-01-01",
    endDate: "2024-11-30",
    location: "Bucaramanga, Colombia",
    description: "Desarrollo de aplicaciones web con React y tecnologías modernas",
    achievements: [
      "Desarrollé múltiples aplicaciones web usando React y Next.js",
      "Implementé arquitecturas escalables y reutilizables",
      "Colaboré en equipos multidisciplinarios usando metodologías ágiles",
      "Optimicé performance de aplicaciones web"
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js"
    ]
  }
]

export const projects: Project[] = [
  {
    id: "ticketmaster-migration",
    title: "TicketMaster Testing Migration",
    description: "Migración completa del framework de testing de Cypress a Playwright para TicketMaster",
    longDescription: "Lideré la migración del framework de testing end-to-end de Cypress a Playwright en el proyecto de TicketMaster, implementando mejores prácticas y optimizando la velocidad de ejecución de pruebas.",
    technologies: ["Playwright", "Cypress", "JavaScript", "React.js", "CI/CD"],
    features: [
      "Migración de +100 tests de Cypress a Playwright",
      "Mejora del 30% en velocidad de ejecución",
      "Integración con pipelines CI/CD",
      "Documentación completa del proceso"
    ],
    status: "completed",
    category: "web",
    githubUrl: "https://github.com/ticketmaster/testing-migration",
  },
  {
    id: "ga4-integration",
    title: "Google Analytics 4 Integration",
    description: "Implementación completa de Google Analytics 4 para tracking avanzado en TicketMaster",
    longDescription: "Desarrollo e implementación de sistema completo de tracking con Google Analytics 4, incluyendo eventos personalizados, conversiones y reporting avanzado para la plataforma de TicketMaster.",
    technologies: ["Google Analytics 4", "React.js", "JavaScript", "TypeScript"],
    features: [
      "Tracking de eventos personalizados",
      "Configuración de conversiones",
      "Dashboards de reporting",
      "Optimización de performance"
    ],
    status: "completed",
    category: "web"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Personal",
    description: "Sitio web personal desarrollado con Next.js, TypeScript y Tailwind CSS",
    longDescription: "Desarrollo de portafolio personal completo con Next.js 14, TypeScript, Tailwind CSS, testing con Jest y Playwright, y deployment automatizado con CI/CD.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Jest", "Playwright", "Vercel"],
    features: [
      "Diseño responsive y accesible",
      "SEO optimizado",
      "Testing automatizado completo",
      "CI/CD con GitHub Actions",
      "Performance optimizada"
    ],
    status: "completed",
    category: "web",
    githubUrl: "https://github.com/robertozapata/portfolio",
    liveUrl: "https://roberto-zapata.dev"
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: "expert", category: "frontend", years: 6, icon: "⚛️" },
  { name: "Next.js", level: "advanced", category: "frontend", years: 4, icon: "▲" },
  { name: "TypeScript", level: "advanced", category: "frontend", years: 3, icon: "🔷" },
  { name: "JavaScript", level: "expert", category: "frontend", years: 6, icon: "🟨" },
  { name: "HTML5", level: "expert", category: "frontend", years: 6, icon: "🌐" },
  { name: "CSS3", level: "expert", category: "frontend", years: 6, icon: "🎨" },
  { name: "Tailwind CSS", level: "advanced", category: "frontend", years: 3, icon: "💨" },
  { name: "Redux", level: "advanced", category: "frontend", years: 4, icon: "🔄" },

  // Testing
  { name: "Jest", level: "expert", category: "testing", years: 5, icon: "🃏" },
  { name: "Playwright", level: "advanced", category: "testing", years: 2, icon: "🎭" },
  { name: "Cypress", level: "advanced", category: "testing", years: 3, icon: "🌲" },
  { name: "Testing Library", level: "advanced", category: "testing", years: 4, icon: "🧪" },

  // Backend
  { name: "Node.js", level: "intermediate", category: "backend", years: 3, icon: "🟢" },
  { name: "Express.js", level: "intermediate", category: "backend", years: 2, icon: "🚂" },
  { name: "RESTful APIs", level: "advanced", category: "backend", years: 4, icon: "🔗" },

  // Tools
  { name: "Git", level: "expert", category: "tools", years: 6, icon: "🔧" },
  { name: "GitHub", level: "expert", category: "tools", years: 6, icon: "🐙" },
  { name: "CI/CD", level: "advanced", category: "tools", years: 3, icon: "🔄" },
  { name: "Docker", level: "intermediate", category: "tools", years: 2, icon: "🐳" },
  { name: "Webpack", level: "intermediate", category: "tools", years: 3, icon: "📦" },
  { name: "ESLint", level: "advanced", category: "tools", years: 4, icon: "✅" },

  // Soft Skills
  { name: "English Proficient", level: "advanced", category: "soft-skills", icon: "🌍" },
  { name: "Scrum/Agile", level: "advanced", category: "soft-skills", years: 5, icon: "🏃" },
  { name: "Team Leadership", level: "advanced", category: "soft-skills", icon: "👥" },
  { name: "Problem Solving", level: "expert", category: "soft-skills", icon: "🧩" },
]

export const education: Education[] = [
  {
    id: "uts-systems",
    institution: "Unidades Tecnológicas de Santander",
    degree: "Tecnólogo",
    field: "Sistemas de Información",
    startYear: "2001",
    endYear: "2012",
    location: "Bucaramanga, Santander",
    honors: ["Graduado con honores"]
  }
]

export const certifications: Certification[] = [
  {
    id: "jest-testing",
    name: "Jest Testing Framework Certification",
    issuer: "Testing Excellence Institute",
    issueDate: "2023-10-15",
    skills: ["Jest", "Unit Testing", "JavaScript Testing"]
  },
  {
    id: "playwright-cert",
    name: "Playwright End-to-End Testing",
    issuer: "Microsoft Learn",
    issueDate: "2024-01-20",
    skills: ["Playwright", "E2E Testing", "Test Automation"]
  },
  {
    id: "google-analytics",
    name: "Google Analytics 4 Certified",
    issuer: "Google",
    issueDate: "2024-02-10",
    credentialId: "GA4-2024-CERT-123",
    skills: ["Google Analytics 4", "Data Analysis", "Web Analytics"]
  },
  {
    id: "scrum-master",
    name: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    issueDate: "2023-08-05",
    skills: ["Scrum", "Agile Methodologies", "Team Leadership"]
  }
]