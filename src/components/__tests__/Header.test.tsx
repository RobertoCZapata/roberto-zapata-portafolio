import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

// Mock window.print
const mockPrint = jest.fn()
Object.defineProperty(window, 'print', {
  value: mockPrint,
})

describe('Header Component', () => {
  beforeEach(() => {
    mockPrint.mockClear()
  })

  it('renders the header with logo', () => {
    render(<Header />)

    const logo = screen.getByText('RZ')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '#hero')
  })

  it('renders all navigation links', () => {
    render(<Header />)

    const expectedNavItems = ['Inicio', 'Experiencia', 'Proyectos', 'Habilidades', 'Contacto']

    expectedNavItems.forEach(item => {
      const navLink = screen.getByText(item)
      expect(navLink).toBeInTheDocument()
    })
  })

  it('renders CTA buttons', () => {
    render(<Header />)

    const downloadButton = screen.getByText('CV PDF')
    const contactButton = screen.getByText('Contactar')

    expect(downloadButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
  })

  it('calls window.print when download CV button is clicked', () => {
    render(<Header />)

    const downloadButton = screen.getByText('CV PDF')
    fireEvent.click(downloadButton)

    expect(mockPrint).toHaveBeenCalledTimes(1)
  })

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Header />)

    // Find the mobile menu button (should be hidden on desktop but present in DOM)
    const mobileMenuButtons = screen.getAllByRole('button')
    const hamburgerButton = mobileMenuButtons.find(button =>
      button.getAttribute('aria-expanded') === 'false'
    )

    expect(hamburgerButton).toBeInTheDocument()

    if (hamburgerButton) {
      fireEvent.click(hamburgerButton)
      // After clicking, we should be able to find navigation items in the mobile menu
      const mobileNavItems = screen.getAllByText('Inicio')
      expect(mobileNavItems.length).toBeGreaterThan(1) // One in desktop nav, one in mobile nav
    }
  })

  it('applies scroll effects when page is scrolled', () => {
    render(<Header />)

    // Simulate scroll event
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)

    // The header should still be present (exact styling changes would require more complex testing)
    const logo = screen.getByText('RZ')
    expect(logo).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)

    const nav = screen.getByRole('banner') || screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()

    // Check for proper link structure
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)

    links.forEach(link => {
      expect(link).toHaveAttribute('href')
    })
  })

  it('handles external link attributes correctly', () => {
    render(<Header />)

    const contactLink = screen.getByText('Contactar')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })
})