'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslations()

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
    { label: t.header.nav.home, href: '#hero' },
    { label: t.header.nav.experience, href: '#experience' },
    { label: t.header.nav.projects, href: '#projects' },
    { label: t.header.nav.skills, href: '#skills' },
    { label: t.header.nav.contact, href: '#contact' },
  ]

  const isSpanish = language === 'es'
  const currentFlag = isSpanish ? '🇪🇸' : '🇺🇸'
  const currentCode = isSpanish ? 'ESP' : 'ENG'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
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
              onClick={toggleLanguage}
              aria-label={t.header.languageToggle.ariaLabel}
              aria-pressed={!isSpanish}
              className="inline-flex items-center gap-3 px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
            >
              <span aria-hidden="true" className="text-base">🌐</span>
              <span className="inline-flex items-center gap-2 font-semibold text-gray-900">
                <span aria-hidden="true" className="text-lg leading-none">{currentFlag}</span>
                {currentCode}
              </span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-all duration-200 text-sm font-medium"
            >
              {t.header.cta.downloadCv}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-200 text-sm font-medium"
            >
              {t.header.cta.contact}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              aria-label={t.header.languageToggle.ariaLabel}
              aria-pressed={!isSpanish}
              className="bg-gray-200 inline-flex items-center justify-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-300 transition-colors text-sm font-semibold"
            >
              <span aria-hidden="true" className="text-base">🌐</span>
              <span className="inline-flex items-center gap-2 font-semibold text-gray-900">
                <span aria-hidden="true" className="text-lg leading-none">{currentFlag}</span>
                {currentCode}
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-300 transition-colors"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? '✕' : '☰'}
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
                onClick={() => {
                  handleDownloadCV()
                  setIsMenuOpen(false)
                }}
                className="inline-flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-all duration-200 text-sm font-medium"
              >
                {t.header.mobileCta.downloadCv}
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.mobileCta.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
