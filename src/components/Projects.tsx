'use client'

import { useState, useRef } from 'react'
import { projects } from '@/data/personal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'
import ProjectPlaceholder from '@/components/ui/ProjectPlaceholder'
import { useFocusTrap } from '@/lib/hooks/useFocusTrap'
import { useEscapeKey } from '@/lib/hooks/useEscapeKey'
import { Github, ExternalLink, CheckCircle } from 'lucide-react'
import type { Project } from '@/types'

export default function Projects() {
  const { language } = useLanguage()
  const t = useTranslations()
  const projectList = projects[language]
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Accessibility: Close modal with Escape key
  useEscapeKey(() => setSelectedProject(null))

  // Accessibility: Trap focus within modal when open
  useFocusTrap(modalRef, selectedProject !== null)

  const categories = [
    { id: 'all', label: t.projects.categories.all, count: projectList.length },
    { id: 'web', label: t.projects.categories.web, count: projectList.filter((p) => p.category === 'web').length },
    { id: 'tool', label: t.projects.categories.tool, count: projectList.filter((p) => p.category === 'tool').length },
    { id: 'api', label: t.projects.categories.api, count: projectList.filter((p) => p.category === 'api').length },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projectList
      : projectList.filter((project) => project.category === selectedCategory)

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700'
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
    }
  }

  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return t.projects.status.completed
      case 'in-progress':
        return t.projects.status.inProgress
      case 'planned':
        return t.projects.status.planned
      default:
        return t.projects.status.unknown
    }
  }

  const formatExtraTechLabel = (count: number) => {
    return language === 'es' ? `+${count} más` : `+${count} more`
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">
            {t.projects.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-center ${
                selectedCategory === category.id
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-surface text-gray-700 dark:text-dark-text-primary hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 auto-rows-fr">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Placeholder */}
              <ProjectPlaceholder
                category={project.category}
                title={project.title}
              />

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-primary line-clamp-2">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">
                        {formatExtraTechLabel(project.technologies.length - 3)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      <span className="text-sm">{t.projects.codeLabel}</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span className="text-sm">{t.projects.demoLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div
              ref={modalRef}
              className="bg-white dark:bg-dark-surface rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3
                      id="modal-title"
                      className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-2"
                    >
                      {selectedProject.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)}`}>
                      {getStatusLabel(selectedProject.status)}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-2xl font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded-lg px-2"
                    aria-label={t.projects.modalClose}
                  >
                    ×
                  </button>
                </div>

                {/* Long Description */}
                <p
                  id="modal-description"
                  className="text-gray-700 dark:text-dark-text-secondary mb-6 leading-relaxed"
                >
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-3">{t.projects.featuresTitle}</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-3">{t.projects.stackTitle}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.projects.viewCode}
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.projects.viewDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
