import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CLASS_MAP, DEFAULT_RESULT_DETAIL } from '../constants/anemiaData'

export default function Result() {
  const location = useLocation()
  const navigate = useNavigate()

  const state = location.state || {}
  const detail = CLASS_MAP[state.predicted_class] || DEFAULT_RESULT_DETAIL

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-pink-50 flex flex-col">
      <Navbar showBack />

      <main className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Screening Result</h1>
        <p className="text-gray-500 mb-8">AI-powered analysis of your image.</p>

        {/* Risk Banner */}
        <div className={`border rounded-2xl p-6 mb-6`} style={{ backgroundColor: detail.bg, borderColor: detail.border }}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{detail.icon}</span>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${detail.badge}`}>
              {detail.risk}
            </span>
          </div>
          {state.image && (
            <img
              src={state.image}
              alt="Analyzed"
              className="mt-2 w-24 h-24 object-cover rounded-xl border-2 border-white shadow-sm"
            />
          )}
        </div>

        {/* Detected class */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Detected Class</h2>
          <p className="text-2xl font-extrabold text-gray-800">{state.predicted_class || '—'}</p>
        </div>

        {/* Confidence */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Model Confidence</h2>
          <p className="text-2xl font-extrabold text-gray-800">
            {typeof state.confidence === 'number' ? `${state.confidence}%` : '—'}
          </p>
        </div>

        {/* Hb Estimate */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Estimated Hemoglobin Range</h2>
          <p className="text-3xl font-extrabold" style={{ color: detail.color }}>{detail.hb}</p>
          <p className="text-xs text-gray-400 mt-2">
            This is an AI-based estimate, not a clinical diagnosis. Lab testing is recommended for confirmation.
          </p>
        </div>

        {/* Symptoms */}
        {state.symptoms_analyzed && state.symptoms_analyzed.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Symptoms Reported</h2>
            <div className="flex flex-wrap gap-2">
              {state.symptoms_analyzed.map((s) => (
                <span key={s} className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  {s.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Recommendation */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Recommendation</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{detail.recommendation}</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-xs text-yellow-700 mb-8">
          ⚠️ <strong>Disclaimer:</strong> This is an AI-assisted screening tool, not a medical diagnosis.
          Always consult a qualified healthcare professional for clinical decisions.
        </div>

        {/* Actions */}
        <button
          onClick={() => navigate('/screening')}
          className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg py-4 rounded-2xl shadow-lg shadow-brand-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Screen Again
        </button>
      </main>

      <Footer />
    </div>
  )
}