'use client'

import { useMemo, useState } from 'react'
import { skills } from '@/data/personal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'
import type { Skill } from '@/types'

export default function Skills() {
  const { language } = useLanguage()
  const t = useTranslations()
  const skillset = skills[language]
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = useMemo(
    () => [
      { id: 'all', label: t.skills.categories.all },
      { id: 'frontend', label: t.skills.categories.frontend },
      { id: 'testing', label: t.skills.categories.testing },
      { id: 'backend', label: t.skills.categories.backend },
      { id: 'tools', label: t.skills.categories.tools },
      { id: 'soft-skills', label: t.skills.categories.soft },
    ],
    [t]
  )

  const filteredSkills = selectedCategory === 'all'
    ? skillset
    : skillset.filter(skill => skill.category === selectedCategory)

  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500'
      case 'advanced':
        return 'bg-blue-500'
      case 'intermediate':
        return 'bg-yellow-500'
      case 'beginner':
        return 'bg-gray-400'
      default:
        return 'bg-gray-400'
    }
  }

  const getLevelText = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return t.skills.levelText.expert
      case 'advanced':
        return t.skills.levelText.advanced
      case 'intermediate':
        return t.skills.levelText.intermediate
      case 'beginner':
        return t.skills.levelText.beginner
      default:
        return 'N/A'
    }
  }

  const getLevelWidth = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'w-full'
      case 'advanced':
        return 'w-4/5'
      case 'intermediate':
        return 'w-3/5'
      case 'beginner':
        return 'w-2/5'
      default:
        return 'w-1/5'
    }
  }

  const getCategoryIcon = (category: Skill['category']) => {
    switch (category) {
      case 'frontend':
        return '🎨'
      case 'testing':
        return '🧪'
      case 'backend':
        return '⚙️'
      case 'tools':
        return '🛠️'
      case 'soft-skills':
        return '💬'
      default:
        return '📋'
    }
  }

  const getCategoryStats = () => {
    const stats = categories.slice(1).map(category => {
      const categorySkills = skillset.filter(skill => skill.category === category.id)
      const expertCount = categorySkills.filter(skill => skill.level === 'expert').length
      const advancedCount = categorySkills.filter(skill => skill.level === 'advanced').length

      return {
        ...category,
        total: categorySkills.length,
        expert: expertCount,
        advanced: advancedCount,
        icon: getCategoryIcon(category.id as Skill['category'])
      }
    })
    return stats
  }

  const formatYears = (years?: number) => {
    if (!years) return null
    if (years === 1) {
      return t.skills.yearsOfExperience.singular
    }
    return t.skills.yearsOfExperience.plural.replace('{years}', years.toString())
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {getCategoryStats().map((stat) => (
            <div
              key={stat.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <div className="text-2xl font-bold text-primary-600 mb-1">{stat.total}</div>
              <div className="text-sm text-gray-600">
                {stat.expert > 0 && <span className="text-green-600">{stat.expert} {t.skills.stats.expert}</span>}
                {stat.expert > 0 && stat.advanced > 0 && <span> · </span>}
                {stat.advanced > 0 && <span className="text-blue-600">{stat.advanced} {t.skills.stats.advanced}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.id !== 'all' && (
                <span className="mr-2">{getCategoryIcon(category.id as Skill['category'])}</span>
              )}
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {skill.icon && (
                    <span className="text-2xl mr-3">{skill.icon}</span>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    {formatYears(skill.years) && (
                      <p className="text-sm text-gray-600">{formatYears(skill.years)}</p>
                    )}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(skill.level)}`}
                >
                  {getLevelText(skill.level)}
                </span>
              </div>

              {/* Skill Level Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{t.skills.levelRange.min}</span>
                  <span>{t.skills.levelRange.max}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Preview */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.skills.certificationsTitle}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.skills.certificationsSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {t.skills.certifications.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
