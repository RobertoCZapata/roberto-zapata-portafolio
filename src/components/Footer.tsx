'use client'

import { personalInfo } from '@/data/personal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'
import { Linkedin, Github, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const { language } = useLanguage()
  const t = useTranslations()
  const info = personalInfo[language]

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: t.header.nav.experience, href: '#experience' },
    { label: t.header.nav.projects, href: '#projects' },
    { label: t.header.nav.skills, href: '#skills' },
    { label: t.header.nav.contact, href: '#contact' },
  ]

  const technologies = [
    'React.js',
    'Next.js',
    'TypeScript',
    'Jest',
    'Playwright',
  ]

  const builtWithText = t.footer.builtWith.replace('{year}', currentYear.toString())
  const [builtWithBeforeHeart, builtWithAfterHeart = ''] = builtWithText.split('❤️')

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{info.fullName}</h3>
              <p className="text-gray-400 text-lg mb-4">{t.footer.role}</p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                {t.footer.about}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={info.contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={info.contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${info.contactInfo.email}`}
                className="p-3 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={handlePrint}
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {t.footer.downloadCv}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footer.stackTitle}</h4>
            <div className="space-y-3">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="hover:text-white transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">{t.footer.currentStatusTitle}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t.footer.currentStatus}
              </p>
              <p className="text-green-400 text-sm mt-1">
                {t.footer.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>{builtWithBeforeHeart.trim()}</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>{builtWithAfterHeart.trim()}</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="mr-2 text-sm">{t.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="border-t border-gray-800 py-4">
          <div className="text-center text-xs text-gray-500">
            <p className="mb-2">
              {t.footer.developedWith}
            </p>
            <p>
              <a href="https://github.com/robertozapata/portfolio" className="hover:text-gray-300">
                {t.footer.viewSource}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function handlePrint() {
  window.print()
}
