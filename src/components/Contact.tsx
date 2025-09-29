'use client'

import { useState } from 'react'
// Icons replaced with emoji/text
import { personalInfo } from '@/data/personal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })

    // In a real app, you would send the data to your backend
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contactInfo.email,
      href: `mailto:${personalInfo.contactInfo.email}`,
      description: 'Respondo en 24h'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: personalInfo.contactInfo.phone,
      href: `tel:${personalInfo.contactInfo.phone}`,
      description: 'Lun-Vie 9AM-6PM'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: personalInfo.contactInfo.location,
      href: '#',
      description: 'Disponible para remoto'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.contactInfo.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.contactInfo.github,
      color: 'hover:text-gray-900'
    },
    {
      icon: ExternalLink,
      label: 'Portafolio',
      href: personalInfo.contactInfo.website || '#',
      color: 'hover:text-primary-600'
    }
  ]

  const projectTypes = [
    'Desarrollo Frontend',
    'Aplicación React/Next.js',
    'Testing y QA',
    'Consultoría Técnica',
    'Migración de Proyectos',
    'Optimización de Performance',
    'Otro'
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contacta Conmigo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <method.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{method.label}</h3>
                    <a
                      href={method.href}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {method.value}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Sígueme en:</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg shadow-md text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    aria-label={`${social.label} Profile`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h3 className="font-semibold text-gray-900">Estado de Disponibilidad</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Actualmente disponible para nuevos proyectos y colaboraciones.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Respuesta a emails:</span>
                  <span className="text-green-600 font-medium">24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span>Disponibilidad para reuniones:</span>
                  <span className="text-green-600 font-medium">Inmediata</span>
                </div>
                <div className="flex justify-between">
                  <span>Inicio de proyectos:</span>
                  <span className="text-green-600 font-medium">2-4 semanas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Envíame un Mensaje
              </h3>
              <p className="text-gray-600">
                Completa el formulario y me pondré en contacto contigo pronto
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-700">¡Mensaje enviado exitosamente!</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Proyecto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona un tipo de proyecto</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntame más sobre tu proyecto, timeline, presupuesto y cualquier detalle relevante..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium flex items-center justify-center"
              >
                {isSubmitted ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitted ? 'Mensaje Enviado' : 'Enviar Mensaje'}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Tiempo de respuesta promedio:</strong> 24 horas •
                <strong className="ml-2">Consulta inicial:</strong> Gratuita
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}