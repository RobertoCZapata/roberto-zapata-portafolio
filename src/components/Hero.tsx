'use client'

import { personalInfo } from '@/data/personal'

export default function Hero() {

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary-300/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-700">
                RZ
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            {personalInfo.fullName}
          </h1>

          <div className="h-16 mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-600 font-medium">
              Senior Frontend Developer
            </p>
          </div>

          {/* Summary */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up">
            {personalInfo.summary}
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              <span>6+ años de experiencia</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              <span>Bucaramanga, Colombia</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>Disponible para proyectos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Contactar
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 font-medium"
            >
              Ver Proyectos
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={personalInfo.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href={personalInfo.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.contactInfo.email}`}
              className="px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Email Contact"
            >
              Email
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#experience"
              className="inline-block p-2 text-gray-400 hover:text-primary-600 transition-colors"
              aria-label="Scroll to next section"
            >
              ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}