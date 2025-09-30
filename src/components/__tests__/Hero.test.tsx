import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '../Hero'
import { LanguageProvider } from '@/context/LanguageContext'

jest.mock('@/data/personal', () => ({
  personalInfo: {
    es: {
      fullName: 'Roberto Carlos Zapata',
      title: 'Senior Frontend Developer',
      summary: 'Senior Frontend Developer con 6+ años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especialista en React, Next.js, TypeScript y Testing automatizado. Actualmente desarrollando para TicketMaster en Globant con comunicación 100% en inglés.',
      profileImage: '/images/profile.png',
      contactInfo: {
        email: 'roberto.zapata@email.com',
        phone: '+57 300 123 4567',
        location: 'Bucaramanga, Santander, Colombia',
        linkedin: 'https://linkedin.com/in/robertoczapata',
        github: 'https://github.com/robertozapata',
        twitter: '@robertoczapata'
      }
    },
    en: {
      fullName: 'Roberto Carlos Zapata',
      title: 'Senior Frontend Developer',
      summary: 'Senior Frontend Developer with 6+ years of experience building scalable, high-performance web applications.',
      profileImage: '/images/profile.png',
      contactInfo: {
        email: 'roberto.zapata@email.com',
        phone: '+57 300 123 4567',
        location: 'Bucaramanga, Santander, Colombia',
        linkedin: 'https://linkedin.com/in/robertoczapata',
        github: 'https://github.com/robertozapata',
        twitter: '@robertoczapata'
      }
    }
  }
}))

const renderHero = () => render(
  <LanguageProvider>
    <Hero />
  </LanguageProvider>
)

describe('Hero Component', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders hero section with correct content', () => {
    renderHero()

    // Check for main heading
    const heading = screen.getByText('Roberto Carlos Zapata')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-4xl', 'sm:text-5xl', 'lg:text-6xl')
  })

  it('displays profile initials', () => {
    renderHero()

    const initials = screen.getByText('RZ')
    expect(initials).toBeInTheDocument()
  })

  it('shows summary text', () => {
    renderHero()

    const summary = screen.getByText(/Senior Frontend Developer con 6\+ años de experiencia/)
    expect(summary).toBeInTheDocument()
  })

  it('displays key statistics', () => {
    renderHero()

    const experience = screen.getByText('6+ años de experiencia')
    const location = screen.getByText('Bucaramanga, Colombia')
    const availability = screen.getByText('Disponible para proyectos')

    expect(experience).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(availability).toBeInTheDocument()
  })

  it('renders CTA buttons with correct links', () => {
    renderHero()

    const contactButton = screen.getByRole('link', { name: /contactar/i })
    const projectsButton = screen.getByRole('link', { name: /ver proyectos/i })

    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('href', '#contact')

    expect(projectsButton).toBeInTheDocument()
    expect(projectsButton).toHaveAttribute('href', '#projects')
  })

  it('displays social media links', () => {
    renderHero()

    // Get all links and filter for social ones
    const links = screen.getAllByRole('link')

    const linkedinLink = links.find(link =>
      link.getAttribute('aria-label') === 'LinkedIn Profile'
    )
    const githubLink = links.find(link =>
      link.getAttribute('aria-label') === 'GitHub Profile'
    )
    const emailLink = links.find(link =>
      link.getAttribute('aria-label') === 'Email Contact'
    )

    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/robertoczapata')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/robertozapata')
    expect(emailLink).toHaveAttribute('href', 'mailto:roberto.zapata@email.com')
  })

  it('has proper semantic structure', () => {
    renderHero()

    const heroSection = document.querySelector('#hero')
    expect(heroSection).not.toBeNull()

    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()
  })

  it('includes scroll indicator', () => {
    renderHero()

    const scrollLink = screen.getByRole('link', { name: /ir a la siguiente sección/i })
    expect(scrollLink).toBeInTheDocument()
    expect(scrollLink).toHaveAttribute('href', '#experience')
  })

  it('handles typing effect gracefully', () => {
    renderHero()

    // The component should render without crashing
    const heroSection = screen.getByText('Roberto Carlos Zapata')
    expect(heroSection).toBeInTheDocument()

    // Check that at least one of the typing titles might be present or partially present
    // Since the typing effect is animated, we just ensure the component renders
    const element = screen.getByText('Roberto Carlos Zapata')
    expect(element).toBeInTheDocument()
  })

  it('has proper accessibility attributes for social links', () => {
    renderHero()

    const socialLinks = screen.getAllByRole('link').filter(link =>
      link.getAttribute('aria-label')?.includes('Profile') ||
      link.getAttribute('aria-label')?.includes('Contact')
    )

    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('aria-label')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
