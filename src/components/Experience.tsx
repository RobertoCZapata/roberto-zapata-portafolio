'use client'

import { experiences } from '@/data/personal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'
import { Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react'

export default function Experience() {
  const { language } = useLanguage()
  const t = useTranslations()
  const items = experiences[language]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">
            {t.experience.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {items.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-dark-surface shadow-lg md:transform md:-translate-x-1.5"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-primary">
                          {experience.position}
                        </h3>
                        {experience.endDate === null && (
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">
                            {t.experience.currentBadge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-dark-text-secondary mb-2">
                        <div className="flex items-center">
                          <span className="font-semibold text-primary-600 dark:text-primary-400">{experience.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                          {experience.isRemote && (
                            <span className="ml-1 text-blue-600 dark:text-blue-400">({t.experience.remoteLabel})</span>
                          )}
                        </div>
                      </div>

                      {experience.projectName && (
                        <div className="flex items-center text-sm">
                          <ExternalLink className="w-4 h-4 mr-1 text-primary-500 dark:text-primary-400" />
                          <span className="text-primary-600 dark:text-primary-400 font-medium">{experience.projectName}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-dark-text-secondary mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-3">{t.experience.achievementsTitle}</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-dark-text-secondary text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-3">{t.experience.technologiesTitle}</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">
              {t.experience.ctaTitle}
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              {t.experience.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto sm:min-w-[200px] inline-flex items-center justify-center px-8 py-4 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium text-center"
              >
                {t.experience.contactButton}
              </a>
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto sm:min-w-[200px] inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors font-medium text-center"
              >
                {t.experience.downloadCvButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function handlePrint() {
  window.print()
}
