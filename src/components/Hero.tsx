'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'
import { personalInfo } from '@/data/personal'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const titles = [
    'Senior Frontend Developer',
    'React.js Specialist',
    'Testing Expert',
    'English Proficient'
  ]

  useEffect(() => {
    let titleIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const currentTitle = titles[titleIndex]

      if (!isDeleting) {
        setCurrentText(currentTitle.slice(0, charIndex + 1))
        charIndex++

        if (charIndex === currentTitle.length) {
          setTimeout(() => {
            isDeleting = true
          }, 2000)
        }
      } else {
        setCurrentText(currentTitle.slice(0, charIndex - 1))
        charIndex--

        if (charIndex === 0) {
          isDeleting = false
          titleIndex = (titleIndex + 1) % titles.length
        }
      }
    }

    const interval = setInterval(typeEffect, isDeleting ? 50 : 100)
    return () => clearInterval(interval)
  }, [titles])

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
              {currentText}
              <span className={`inline-block w-0.5 h-8 bg-primary-600 ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
            </p>
          </div>

          {/* Summary */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up">
            {personalInfo.summary}
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary-500" />
              <span>6+ años de experiencia</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary-500" />
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
              <Mail className="w-5 h-5 mr-2" />
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
              className="p-3 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-blue-600 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.contactInfo.email}`}
              className="p-3 text-gray-600 hover:text-red-600 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#experience"
              className="inline-block p-2 text-gray-400 hover:text-primary-600 transition-colors"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}