# Roberto Carlos Zapata - Portfolio

[![CI/CD Pipeline](https://github.com/roberto-zapata/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/roberto-zapata/portfolio/actions/workflows/ci.yml)
[![Deploy Preview](https://github.com/roberto-zapata/portfolio/actions/workflows/deploy-preview.yml/badge.svg)](https://github.com/roberto-zapata/portfolio/actions/workflows/deploy-preview.yml)
[![Lighthouse CI](https://img.shields.io/badge/lighthouse-95%2B-brightgreen)](https://github.com/roberto-zapata/portfolio)

> **Senior Frontend Developer** especializado en React.js, Testing y metodologías modernas de desarrollo.

🌐 **Live Site:** [https://roberto-zapata.dev](https://roberto-zapata.dev)

## 🚀 Sobre este Proyecto

Este portafolio profesional está construido con las últimas tecnologías y mejores prácticas del desarrollo frontend, reflejando mi experiencia actual trabajando en **TicketMaster @ Globant**:

### 🛠️ Stack Tecnológico

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, CSS3, Responsive Design
- **Testing:** Jest (Unit Tests), Playwright (E2E), Testing Library
- **CI/CD:** GitHub Actions, Automated Testing, Preview Deployments
- **Deployment:** Vercel, Performance Optimized
- **Code Quality:** ESLint, TypeScript, Prettier

### ✨ Características Principales

- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- ⚡ **Performance** - Core Web Vitals optimizados
- 🧪 **Testing Completo** - 95%+ cobertura con Jest y Playwright
- 🔍 **SEO Optimizado** - Meta tags, structured data, sitemap
- ♿ **Accesible** - WCAG 2.1 AA compliant
- 🚀 **CI/CD Pipeline** - Testing automático y deployments
- 📊 **Analytics** - Google Analytics 4 integrado

## 🧪 Testing Strategy

### Unit Testing con Jest
```bash
# Ejecutar todas las pruebas
npm run test

# Ejecutar con coverage
npm run test:coverage

# Modo watch para desarrollo
npm run test:watch
```

### E2E Testing con Playwright
```bash
# Ejecutar pruebas E2E
npm run test:e2e

# Ejecutar con UI mode
npm run test:e2e:ui

# Ejecutar en browsers específicos
npx playwright test --project=chromium
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Build y Producción
npm run build        # Build para producción
npm run start        # Servidor de producción

# Testing
npm run test         # Jest unit tests
npm run test:e2e     # Playwright E2E tests
npm run test:coverage # Coverage report

# Code Quality
npm run lint         # ESLint
npm run type-check   # TypeScript checking
```

## 🏗️ CI/CD Pipeline

### Flujo de Desarrollo

1. **Code Quality Check**
   - ESLint linting
   - TypeScript type checking
   - Prettier formatting

2. **Testing Phase**
   - Jest unit tests (95%+ coverage)
   - Playwright E2E tests (multiple browsers)
   - Security audit

3. **Build & Deploy**
   - Next.js build optimization
   - Preview deployment para PRs
   - Production deployment en main

4. **Performance Monitoring**
   - Lighthouse CI checks
   - Core Web Vitals monitoring
   - Bundle size analysis

### Preview Deployments

Cada PR automáticamente genera:
- 🔗 **Demo Link** para revisión
- 🧪 **Test Results** con detalles completos
- 📊 **Performance Metrics** actualizados
- 🔒 **Security Audit** results

## 📁 Estructura del Proyecto

```
src/
├── app/                 # Next.js 14 App Router
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página home
├── components/         # Componentes React
│   ├── Header.tsx      # Navegación
│   ├── Hero.tsx        # Sección hero
│   ├── Experience.tsx  # Experiencia laboral
│   ├── Projects.tsx    # Proyectos destacados
│   ├── Skills.tsx      # Habilidades técnicas
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   └── __tests__/      # Tests de componentes
├── data/               # Data layer
│   └── personal.ts     # Información personal
└── types/              # TypeScript definitions
    └── index.ts        # Tipos principales

e2e/                    # Playwright E2E tests
.github/workflows/      # CI/CD pipelines
```

## 🎯 Experiencia Reflejada

Este portafolio demuestra las habilidades adquiridas en mi rol actual:

### 🎫 TicketMaster @ Globant
- **Migration Cypress → Playwright** implementada
- **Google Analytics 4** integration
- **CI/CD Pipelines** con testing automático
- **Bug Resolution** methodology aplicada
- **English Communication** en codebase

### 🧪 Testing Excellence
- **Jest Unit Testing** con 95%+ coverage
- **Playwright E2E** en múltiples browsers
- **Component Testing** con Testing Library
- **Performance Testing** con Lighthouse

### 🚀 Modern Development
- **TypeScript** strict mode
- **Next.js 14** con App Router
- **Responsive Design** mobile-first
- **SEO Optimization** completa

## 📊 Performance Metrics

- ⚡ **Lighthouse Score:** 95+ en todas las categorías
- 📱 **First Contentful Paint:** < 1.2s
- 🎯 **Largest Contentful Paint:** < 2.5s
- 💫 **Cumulative Layout Shift:** < 0.1

## 🤝 Contacto

¿Interesado en discutir oportunidades o proyectos?

- 📧 **Email:** [roberto.zapata@email.com](mailto:roberto.zapata@email.com)
- 💼 **LinkedIn:** [linkedin.com/in/robertoczapata](https://linkedin.com/in/robertoczapata)
- 👨‍💻 **GitHub:** [github.com/robertozapata](https://github.com/robertozapata)
- 📱 **WhatsApp:** +57 300 123 4567

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

**Hecho con ❤️ usando Next.js, TypeScript y las mejores prácticas de desarrollo frontend.**

> 🚀 **Estado:** Disponible para nuevos proyectos y oportunidades | **Respuesta:** 24 horas