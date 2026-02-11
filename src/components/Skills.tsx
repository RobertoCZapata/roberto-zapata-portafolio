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
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {getCategoryStats().map((stat) => (
            <div
              key={stat.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-2">{stat.label}</h3>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">{stat.total}</div>
              <div className="text-sm text-gray-600 dark:text-dark-text-secondary">
                {stat.expert > 0 && <span className="text-green-600 dark:text-green-400">{stat.expert} {t.skills.stats.expert}</span>}
                {stat.expert > 0 && stat.advanced > 0 && <span> · </span>}
                {stat.advanced > 0 && <span className="text-blue-600 dark:text-blue-400">{stat.advanced} {t.skills.stats.advanced}</span>}
              </div>
            </div>
          ))}
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
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg dark:shadow-gray-900/50 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                {skill.icon && (
                  <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                )}
                <h3 className="font-semibold text-gray-900 dark:text-dark-text-primary text-sm mb-2">{skill.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(skill.level)} mb-1`}
                >
                  {getLevelText(skill.level)}
                </span>
                {formatYears(skill.years) && (
                  <p className="text-xs text-gray-600 dark:text-dark-text-secondary">{formatYears(skill.years)}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Preview */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">
              {t.skills.certificationsTitle}
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              {t.skills.certificationsSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {t.skills.certifications.map((item) => (
                <div key={item.title} className="bg-white dark:bg-dark-surface rounded-lg p-4 shadow-sm dark:shadow-gray-900/50">
                  <div className="font-semibold text-gray-900 dark:text-dark-text-primary">{item.title}</div>
                  <div className="text-gray-600 dark:text-dark-text-secondary">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
