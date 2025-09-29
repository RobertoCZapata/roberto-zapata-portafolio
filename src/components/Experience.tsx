'use client'

// Icons replaced with emoji/text
import { experiences } from '@/data/personal'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mi trayectoria como desarrollador frontend trabajando con tecnologías modernas
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-600 rounded-full border-4 border-white shadow-lg md:transform md:-translate-x-1.5"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {experience.position}
                        </h3>
                        {experience.endDate === null && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            Actual
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center">
                          <span className="font-semibold text-primary-600">{experience.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                          {experience.isRemote && (
                            <span className="ml-1 text-blue-600">(Remote)</span>
                          )}
                        </div>
                      </div>

                      {experience.projectName && (
                        <div className="flex items-center text-sm">
                          <ExternalLink className="w-4 h-4 mr-1 text-primary-500" />
                          <span className="text-primary-600 font-medium">{experience.projectName}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Logros Principales:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-100 hover:text-primary-800 transition-colors"
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
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Interesado en mi experiencia?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estoy disponible para nuevos retos y oportunidades. Contacta conmigo para conocer más detalles sobre mi experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Contactar
              </a>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-medium"
              >
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}