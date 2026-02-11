'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

/**
 * Global Error Component for Next.js App Router
 *
 * This error boundary catches errors in the root layout and displays
 * a minimal error page. It MUST include html and body tags.
 *
 * @param error - The caught error object
 * @param reset - Function to attempt to recover from the error
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log critical error
    console.error('Global application error:', error)

    // TODO: Log to error reporting service (Sentry) in Sprint 4
    // Sentry.captureException(error, { level: 'fatal' });
  }, [error])

  return (
    <html lang="es">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '1rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              maxWidth: '500px',
              width: '100%',
              background: 'white',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
            }}
          >
            {/* Critical Error Icon */}
            <div
              style={{
                marginBottom: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '5rem',
                  height: '5rem',
                  background: '#fef2f2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AlertTriangle
                  style={{
                    width: '3rem',
                    height: '3rem',
                    color: '#dc2626',
                  }}
                />
              </div>
            </div>

            {/* Error Title */}
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1rem',
              }}
            >
              Error Crítico
            </h1>

            {/* Error Description */}
            <p
              style={{
                color: '#6b7280',
                marginBottom: '2rem',
                lineHeight: '1.625',
              }}
            >
              Hemos encontrado un error crítico en la aplicación. Por favor,
              recarga la página para intentar recuperar el servicio.
            </p>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && error.message && (
              <div
                style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: '#f3f4f6',
                  borderRadius: '0.5rem',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    color: '#374151',
                    wordBreak: 'break-all',
                  }}
                >
                  <strong>Error:</strong> {error.message}
                </p>
                {error.digest && (
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: '#6b7280',
                      marginTop: '0.5rem',
                    }}
                  >
                    <strong>Digest:</strong> {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Reset Button */}
            <button
              onClick={reset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 1.5rem',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#2563eb'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#3b82f6'
              }}
            >
              <RefreshCw
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  marginRight: '0.5rem',
                }}
              />
              Recargar aplicación
            </button>

            {/* Support Message */}
            <p
              style={{
                marginTop: '1.5rem',
                fontSize: '0.875rem',
                color: '#9ca3af',
              }}
            >
              Si el problema persiste, por favor contacta al administrador del
              sitio.
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
