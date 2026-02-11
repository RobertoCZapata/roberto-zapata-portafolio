'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'

/**
 * Error Component for Next.js App Router
 *
 * This error boundary catches errors in the application and displays
 * a user-friendly error message with options to recover.
 *
 * @param error - The caught error object
 * @param reset - Function to attempt to recover from the error
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Application error:', error)
    }

    // TODO: Log to error reporting service (Sentry) in Sprint 4
    // Sentry.captureException(error);
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          ¡Oops! Algo salió mal
        </h1>

        {/* Error Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lo sentimos, hemos encontrado un error inesperado. Puedes intentar
          recargar la página o volver al inicio.
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg text-left">
            <p className="text-xs font-mono text-gray-700 break-all">
              <strong>Error:</strong> {error.message}
            </p>
            {error.digest && (
              <p className="text-xs font-mono text-gray-500 mt-2">
                <strong>Digest:</strong> {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Intentar de nuevo
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 font-medium"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </a>
        </div>

        {/* Additional Help */}
        <p className="mt-6 text-sm text-gray-500">
          Si el problema persiste,{' '}
          <a
            href="#contact"
            className="text-primary-600 hover:text-primary-700 font-medium underline"
          >
            contáctame
          </a>{' '}
          para reportarlo.
        </p>
      </div>
    </div>
  )
}
