'use client'

import { useState } from 'react'
import { personalInfo } from '@/data/personal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, CheckCircle, Send } from 'lucide-react'

export default function Contact() {
  const { language } = useLanguage()
  const t = useTranslations()
  const info = personalInfo[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)

    setFormData({ name: '', email: '', subject: '', message: '' })

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
      value: info.contactInfo.email,
      href: `mailto:${info.contactInfo.email}`,
      description: t.contact.methods.emailDescription
    },
    {
      icon: Phone,
      label: language === 'es' ? 'Teléfono' : 'Phone',
      value: info.contactInfo.phone,
      href: `tel:${info.contactInfo.phone}`,
      description: t.contact.methods.phoneDescription
    },
    {
      icon: MapPin,
      label: language === 'es' ? 'Ubicación' : 'Location',
      value: info.contactInfo.location,
      href: '#',
      description: t.contact.methods.locationDescription
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: info.contactInfo.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: info.contactInfo.github,
      color: 'hover:text-gray-900'
    },
    {
      icon: ExternalLink,
      label: language === 'es' ? 'Portafolio' : 'Portfolio',
      href: info.contactInfo.website || '#',
      color: 'hover:text-primary-600'
    }
  ]

  const projectTypes = t.contact.projectTypes

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
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
              <h3 className="font-semibold text-gray-900 mb-4">{t.contact.socialHeading}</h3>
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
                <h3 className="font-semibold text-gray-900">{t.contact.availability.heading}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t.contact.availability.description}
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>{t.contact.availability.responseTimeLabel}</span>
                  <span className="text-green-600 font-medium">{t.contact.availability.responseTimeValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.availability.meetingsLabel}</span>
                  <span className="text-green-600 font-medium">{t.contact.availability.meetingsValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.availability.projectsLabel}</span>
                  <span className="text-green-600 font-medium">{t.contact.availability.projectsValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.contact.form.title}
              </h3>
              <p className="text-gray-600">
                {t.contact.form.subtitle}
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-700">{t.contact.form.successMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.projectTypeLabel}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">{t.contact.form.projectTypePlaceholder}</option>
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
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
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
                {isSubmitted ? t.contact.form.submitted : t.contact.form.submit}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>{t.contact.extraInfo.responseTime}</strong>
                {' • '}
                <strong className="ml-2">{t.contact.extraInfo.consultation}</strong> {t.contact.extraInfo.consultationValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
