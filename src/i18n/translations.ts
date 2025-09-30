import { useLanguage } from '@/context/LanguageContext'
import type { Language } from '@/context/LanguageContext'

interface HeaderTranslations {
  nav: {
    home: string
    experience: string
    projects: string
    skills: string
    contact: string
  }
  cta: {
    downloadCv: string
    contact: string
  }
  mobileCta: {
    downloadCv: string
    contact: string
  }
  languageToggle: {
    ariaLabel: string
    enLabel: string
    esLabel: string
  }
}

interface HeroTranslations {
  stats: {
    experience: string
    availability: string
  }
  buttons: {
    contact: string
    projects: string
  }
  scrollAriaLabel: string
}

interface ExperienceTranslations {
  title: string
  subtitle: string
  currentBadge: string
  remoteLabel: string
  achievementsTitle: string
  technologiesTitle: string
  ctaTitle: string
  ctaDescription: string
  contactButton: string
  downloadCvButton: string
}

interface ProjectsTranslations {
  title: string
  subtitle: string
  categories: {
    all: string
    web: string
    tool: string
    api: string
  }
  status: {
    completed: string
    inProgress: string
    planned: string
    unknown: string
  }
  codeLabel: string
  demoLabel: string
  featuresTitle: string
  stackTitle: string
  modalClose: string
  viewCode: string
  viewDemo: string
}

interface SkillsTranslations {
  title: string
  subtitle: string
  categories: {
    all: string
    frontend: string
    testing: string
    backend: string
    tools: string
    soft: string
  }
  levelText: {
    expert: string
    advanced: string
    intermediate: string
    beginner: string
  }
  levelRange: {
    min: string
    max: string
  }
  stats: {
    expert: string
    advanced: string
  }
  yearsOfExperience: {
    singular: string
    plural: string
  }
  certificationsTitle: string
  certificationsSubtitle: string
  certifications: Array<{ title: string; description: string }>
}

interface ContactTranslations {
  title: string
  subtitle: string
  methods: {
    emailDescription: string
    phoneDescription: string
    locationDescription: string
  }
  socialHeading: string
  availability: {
    heading: string
    description: string
    responseTimeLabel: string
    responseTimeValue: string
    meetingsLabel: string
    meetingsValue: string
    projectsLabel: string
    projectsValue: string
  }
  form: {
    title: string
    subtitle: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    projectTypeLabel: string
    projectTypePlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    submitted: string
    successMessage: string
  }
  projectTypes: string[]
  extraInfo: {
    responseTime: string
    consultation: string
    consultationValue: string
  }
}

interface FooterTranslations {
  role: string
  about: string
  quickLinksTitle: string
  downloadCv: string
  stackTitle: string
  currentStatusTitle: string
  currentStatus: string
  availability: string
  builtWith: string
  backToTop: string
  developedWith: string
  viewSource: string
}

interface GeneralTranslations {
  locationLabel: string
  availableForProjects: string
  backToTop: string
}

export interface Translations {
  header: HeaderTranslations
  hero: HeroTranslations
  experience: ExperienceTranslations
  projects: ProjectsTranslations
  skills: SkillsTranslations
  contact: ContactTranslations
  footer: FooterTranslations
  general: GeneralTranslations
}

export const translations: Record<Language, Translations> = {
  es: {
    header: {
      nav: {
        home: 'Inicio',
        experience: 'Experiencia',
        projects: 'Proyectos',
        skills: 'Habilidades',
        contact: 'Contacto',
      },
      cta: {
        downloadCv: '📄 CV PDF',
        contact: 'Contactar →',
      },
      mobileCta: {
        downloadCv: '📄 Descargar CV',
        contact: 'Contactar →',
      },
      languageToggle: {
        ariaLabel: 'Cambiar idioma del portafolio',
        enLabel: 'ENG',
        esLabel: 'ESP',
      },
    },
    hero: {
      stats: {
        experience: '6+ años de experiencia',
        availability: 'Disponible para proyectos',
      },
      buttons: {
        contact: 'Contactar',
        projects: 'Ver Proyectos',
      },
      scrollAriaLabel: 'Ir a la siguiente sección',
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Mi trayectoria como desarrollador frontend trabajando con tecnologías modernas',
      currentBadge: 'Actual',
      remoteLabel: 'Remoto',
      achievementsTitle: 'Logros Principales:',
      technologiesTitle: 'Tecnologías:',
      ctaTitle: '¿Interesado en mi experiencia?',
      ctaDescription:
        'Estoy disponible para nuevos retos y oportunidades. Contacta conmigo para conocer más detalles sobre mi experiencia.',
      contactButton: 'Contactar',
      downloadCvButton: 'Descargar CV',
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Una selección de proyectos que demuestran mi experiencia técnica y enfoque en la calidad',
      categories: {
        all: 'Todos',
        web: 'Web Apps',
        tool: 'Herramientas',
        api: 'APIs',
      },
      status: {
        completed: 'Completado',
        inProgress: 'En progreso',
        planned: 'Planeado',
        unknown: 'Desconocido',
      },
      codeLabel: 'Código',
      demoLabel: 'Demo',
      featuresTitle: 'Características principales:',
      stackTitle: 'Stack Tecnológico:',
      modalClose: 'Cerrar',
      viewCode: 'Ver Código',
      viewDemo: 'Ver Demo',
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Mi stack tecnológico y competencias desarrolladas a lo largo de mi carrera',
      categories: {
        all: 'Todas las habilidades',
        frontend: 'Frontend',
        testing: 'Testing',
        backend: 'Backend',
        tools: 'Herramientas',
        soft: 'Habilidades blandas',
      },
      levelText: {
        expert: 'Experto',
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        beginner: 'Principiante',
      },
      levelRange: {
        min: 'Principiante',
        max: 'Experto',
      },
      stats: {
        expert: 'experto',
        advanced: 'avanzado',
      },
      yearsOfExperience: {
        singular: '1 año de experiencia',
        plural: '{years} años de experiencia',
      },
      certificationsTitle: 'Certificaciones y Formación Continua',
      certificationsSubtitle:
        'Mantengo mis habilidades actualizadas con certificaciones oficiales y formación continua',
      certifications: [
        { title: '🃏 Jest Testing', description: 'Framework de Testing' },
        { title: '🎭 Playwright', description: 'Testing E2E' },
        { title: '📊 Google Analytics 4', description: 'Analítica Web' },
        { title: '🏃 Scrum Master', description: 'Metodologías Ágiles' },
      ],
    },
    contact: {
      title: 'Contacta Conmigo',
      subtitle: '¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte',
      methods: {
        emailDescription: 'Respondo en 24h',
        phoneDescription: 'Lun-Vie 9AM-6PM',
        locationDescription: 'Disponible para remoto',
      },
      socialHeading: 'Sígueme en:',
      availability: {
        heading: 'Estado de disponibilidad',
        description: 'Actualmente disponible para nuevos proyectos y colaboraciones.',
        responseTimeLabel: 'Respuesta a emails:',
        responseTimeValue: '24 horas',
        meetingsLabel: 'Disponibilidad para reuniones:',
        meetingsValue: 'Inmediata',
        projectsLabel: 'Inicio de proyectos:',
        projectsValue: '2-4 semanas',
      },
      form: {
        title: 'Envíame un mensaje',
        subtitle: 'Completa el formulario y me pondré en contacto contigo pronto',
        nameLabel: 'Nombre completo *',
        namePlaceholder: 'Tu nombre completo',
        emailLabel: 'Email *',
        emailPlaceholder: 'tu@email.com',
        projectTypeLabel: 'Tipo de proyecto *',
        projectTypePlaceholder: 'Selecciona un tipo de proyecto',
        messageLabel: 'Mensaje *',
        messagePlaceholder:
          'Cuéntame más sobre tu proyecto, timeline, presupuesto y cualquier detalle relevante...',
        submit: 'Enviar mensaje',
        submitted: 'Mensaje enviado',
        successMessage: '¡Mensaje enviado exitosamente!',
      },
      projectTypes: [
        'Desarrollo Frontend',
        'Aplicación React/Next.js',
        'Testing y QA',
        'Consultoría Técnica',
        'Migración de Proyectos',
        'Optimización de Performance',
        'Otro',
      ],
      extraInfo: {
        responseTime: 'Tiempo de respuesta promedio: 24 horas',
        consultation: 'Consulta inicial:',
        consultationValue: 'Gratuita',
      },
    },
    footer: {
      role: 'Senior Frontend Developer',
      about:
        'Especialista en React.js y testing automatizado, actualmente desarrollando para TicketMaster en Globant. Apasionado por crear aplicaciones web escalables y de alta calidad.',
      quickLinksTitle: 'Enlaces rápidos',
      downloadCv: 'Descargar CV',
      stackTitle: 'Stack principal',
      currentStatusTitle: 'Estado actual',
      currentStatus: 'Trabajando en TicketMaster @ Globant',
      availability: 'Disponible para freelance',
      builtWith: '© {year} Roberto Carlos Zapata. Hecho con ❤️ usando Next.js y TypeScript',
      backToTop: 'Volver arriba',
      developedWith:
        'Desarrollado con Next.js 14, TypeScript, Tailwind CSS • Testing con Jest y Playwright • Desplegado en Vercel',
      viewSource: 'Ver código fuente',
    },
    general: {
      locationLabel: 'Bucaramanga, Colombia',
      availableForProjects: 'Disponible para proyectos',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    header: {
      nav: {
        home: 'Home',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      cta: {
        downloadCv: '📄 PDF Résumé',
        contact: 'Let’s talk →',
      },
      mobileCta: {
        downloadCv: '📄 Download Résumé',
        contact: 'Let’s talk →',
      },
      languageToggle: {
        ariaLabel: 'Switch portfolio language',
        enLabel: 'ENG',
        esLabel: 'ESP',
      },
    },
    hero: {
      stats: {
        experience: '6+ years of experience',
        availability: 'Open to new projects',
      },
      buttons: {
        contact: 'Contact',
        projects: 'See Projects',
      },
      scrollAriaLabel: 'Scroll to next section',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My journey as a frontend developer working with modern technologies',
      currentBadge: 'Current',
      remoteLabel: 'Remote',
      achievementsTitle: 'Key achievements:',
      technologiesTitle: 'Technologies:',
      ctaTitle: 'Interested in working together?',
      ctaDescription:
        'I’m open to new challenges and opportunities. Let’s connect to discuss how I can help your team.',
      contactButton: 'Contact me',
      downloadCvButton: 'Download résumé',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Selected work that showcases my technical expertise and focus on quality',
      categories: {
        all: 'All',
        web: 'Web Apps',
        tool: 'Tools',
        api: 'APIs',
      },
      status: {
        completed: 'Completed',
        inProgress: 'In progress',
        planned: 'Planned',
        unknown: 'Unknown',
      },
      codeLabel: 'Code',
      demoLabel: 'Live',
      featuresTitle: 'Key highlights:',
      stackTitle: 'Tech stack:',
      modalClose: 'Close',
      viewCode: 'View Code',
      viewDemo: 'View Live',
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'My technology stack and the capabilities built throughout my career',
      categories: {
        all: 'All skills',
        frontend: 'Frontend',
        testing: 'Testing',
        backend: 'Backend',
        tools: 'Tooling',
        soft: 'Soft skills',
      },
      levelText: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        beginner: 'Beginner',
      },
      levelRange: {
        min: 'Beginner',
        max: 'Expert',
      },
      stats: {
        expert: 'expert',
        advanced: 'advanced',
      },
      yearsOfExperience: {
        singular: '1 year of experience',
        plural: '{years} years of experience',
      },
      certificationsTitle: 'Certifications & Continuous Learning',
      certificationsSubtitle:
        'I keep my skills sharp with official certifications and ongoing training',
      certifications: [
        { title: '🃏 Jest Testing', description: 'Testing Framework' },
        { title: '🎭 Playwright', description: 'E2E Testing' },
        { title: '📊 Google Analytics 4', description: 'Web Analytics' },
        { title: '🏃 Scrum Master', description: 'Agile Practices' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have a project in mind? Let’s talk about how I can help.',
      methods: {
        emailDescription: 'Replies within 24h',
        phoneDescription: 'Mon-Fri 9AM-6PM',
        locationDescription: 'Available for remote work',
      },
      socialHeading: 'Follow me:',
      availability: {
        heading: 'Availability status',
        description: 'Currently available for new projects and collaborations.',
        responseTimeLabel: 'Email response time:',
        responseTimeValue: '24 hours',
        meetingsLabel: 'Meeting availability:',
        meetingsValue: 'Immediate',
        projectsLabel: 'Project kickoff:',
        projectsValue: '2-4 weeks',
      },
      form: {
        title: 'Send me a message',
        subtitle: 'Fill out the form and I’ll get back to you shortly',
        nameLabel: 'Full name *',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email *',
        emailPlaceholder: 'you@email.com',
        projectTypeLabel: 'Project type *',
        projectTypePlaceholder: 'Select a project type',
        messageLabel: 'Message *',
        messagePlaceholder:
          'Tell me about your project, timeline, budget, and anything else I should know...',
        submit: 'Send message',
        submitted: 'Message sent',
        successMessage: 'Message sent successfully! Thank you.',
      },
      projectTypes: [
        'Frontend Development',
        'React/Next.js App',
        'Testing & QA',
        'Technical Consulting',
        'Project Migration',
        'Performance Optimization',
        'Other',
      ],
      extraInfo: {
        responseTime: 'Average response time: 24 hours',
        consultation: 'Initial consultation:',
        consultationValue: 'Complimentary',
      },
    },
    footer: {
      role: 'Senior Frontend Developer',
      about:
        'React.js and automated testing specialist currently building for TicketMaster at Globant. Passionate about creating scalable, high-quality web experiences.',
      quickLinksTitle: 'Quick links',
      downloadCv: 'Download résumé',
      stackTitle: 'Core stack',
      currentStatusTitle: 'Current status',
      currentStatus: 'Building TicketMaster @ Globant',
      availability: 'Open for freelance',
      builtWith: '© {year} Roberto Carlos Zapata. Crafted with ❤️ using Next.js and TypeScript',
      backToTop: 'Back to top',
      developedWith:
        'Built with Next.js 14, TypeScript, Tailwind CSS • Tested with Jest & Playwright • Deployed on Vercel',
      viewSource: 'View source code',
    },
    general: {
      locationLabel: 'Bucaramanga, Colombia',
      availableForProjects: 'Open to projects',
      backToTop: 'Back to top',
    },
  },
}

export function useTranslations() {
  const { language } = useLanguage()
  return translations[language]
}
