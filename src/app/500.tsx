export default function Error500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">500</h1>
        <p className="text-gray-600 mb-8">Error interno del servidor</p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}