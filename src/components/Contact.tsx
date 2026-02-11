'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { personalInfo } from '@/data/personal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'
import { contactFormSchema, contactFormSchemaEN, type ContactFormData } from '@/lib/utils/validation'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, CheckCircle, Send, AlertCircle, Loader2 } from 'lucide-react'

export default function Contact() {
  const { language } = useLanguage()
  const t = useTranslations()
  const info = personalInfo[language]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // Use appropriate schema based on language
  const validationSchema = language === 'es' ? contactFormSchema : contactFormSchemaEN

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(validationSchema),
    mode: 'onBlur', // Validate on blur for better UX
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || t.contact.form.successMessage,
        })
        reset() // Clear form on success
      } else {
        // Handle different error types
        if (response.status === 429) {
          setSubmitStatus({
            type: 'error',
            message: result.message || 'Por favor espera antes de enviar otro mensaje.',
          })
        } else if (response.status === 400) {
          setSubmitStatus({
            type: 'error',
            message: 'Por favor verifica los campos del formulario.',
          })
        } else {
          setSubmitStatus({
            type: 'error',
            message: result.message || 'No se pudo enviar el mensaje. Por favor intenta de nuevo.',
          })
        }
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor verifica tu internet e intenta de nuevo.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-bg dark:to-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
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
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <method.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-dark-text-primary">{method.label}</h3>
                    <a
                      href={method.href}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      {method.value}
                    </a>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm mt-1">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-4">{t.contact.socialHeading}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-dark-surface rounded-lg shadow-md dark:shadow-gray-900/50 text-gray-600 dark:text-gray-400 ${social.color} dark:hover:text-primary-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    aria-label={`${social.label} Profile`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg dark:shadow-gray-900/50">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text-primary">{t.contact.availability.heading}</h3>
              </div>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                {t.contact.availability.description}
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                <div className="flex justify-between">
                  <span>{t.contact.availability.responseTimeLabel}</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">{t.contact.availability.responseTimeValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.availability.meetingsLabel}</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">{t.contact.availability.meetingsValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.availability.projectsLabel}</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">{t.contact.availability.projectsValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-surface rounded-xl shadow-lg dark:shadow-gray-900/50 p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-2">
                {t.contact.form.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                {t.contact.form.subtitle}
              </p>
            </div>

            {/* Success Message */}
            {submitStatus.type === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-green-700">{submitStatus.message}</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus.type === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                  <span className="text-red-700">{submitStatus.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text-primary focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t.contact.form.namePlaceholder}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text-primary focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t.contact.form.emailPlaceholder}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.form.projectTypeLabel}
                </label>
                <select
                  id="subject"
                  {...register('subject')}
                  className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text-primary focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">{t.contact.form.projectTypePlaceholder}</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text-primary focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t.contact.form.messagePlaceholder}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 dark:bg-primary-500 text-white py-4 px-8 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium flex items-center justify-center text-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {language === 'es' ? 'Enviando...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary text-center">
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
