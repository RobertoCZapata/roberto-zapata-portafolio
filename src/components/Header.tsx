'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download, ExternalLink } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadCV = () => {
    window.print()
  }

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
            >
              RZ
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-all duration-200 text-sm font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              CV PDF
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-200 text-sm font-medium"
            >
              Contactar
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-300 transition-colors"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-3 py-2">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-all duration-200 text-sm font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactar
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}