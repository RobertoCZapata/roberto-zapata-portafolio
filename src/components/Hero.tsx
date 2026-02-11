'use client'

import { personalInfo } from '@/data/personal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/i18n/translations'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils/animations'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const { language } = useLanguage()
  const t = useTranslations()
  const info = personalInfo[language]
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 dark:bg-primary-400/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
      >
        <div className="text-center">
          {/* Profile Image */}
          <motion.div className="mb-8 flex justify-center" variants={scaleIn}>
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 p-1 shadow-2xl group">
              {/* Animated Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 animate-pulse-slow"></div>

              <img
                src={info.profileImage}
                alt="Roberto Carlos Zapata"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/20 dark:border-gray-800/20 backdrop-blur-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const nextElement = e.currentTarget.nextElementSibling
                  if (nextElement instanceof HTMLElement) {
                    nextElement.style.display = 'flex'
                  }
                }}
              />
              <div
                className="relative w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-700 dark:text-gray-200"
                style={{ display: 'none' }}
              >
                RZ
              </div>
            </div>
          </motion.div>

          {/* Name with Animated Gradient */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient"
          >
            {info.fullName}
          </motion.h1>

          {/* Title */}
          <motion.div className="h-16 mb-6" variants={fadeInUp}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 font-medium">
              {info.title}
            </p>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {info.summary}
          </motion.p>

          {/* Key Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-2 animate-pulse"></span>
              <span>{t.hero.stats.experience}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-2"></span>
              <span>{info.contactInfo.location}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span>{t.hero.stats.availability}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#contact"
              className="w-full sm:w-auto sm:min-w-[200px] inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.buttons.contact}
            </motion.a>
            <motion.a
              href="#projects"
              className="w-full sm:w-auto sm:min-w-[200px] inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 font-medium text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.buttons.projects}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
          >
            <motion.a
              href={info.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="GitHub Profile"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </motion.a>
            <motion.a
              href={info.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn Profile"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </motion.a>
            <motion.a
              href={`mailto:${info.contactInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 dark:bg-red-700 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Email Contact"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="animate-bounce"
          >
            <a
              href="#experience"
              className="inline-block p-2 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label={t.hero.scrollAriaLabel}
            >
              ↓
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
