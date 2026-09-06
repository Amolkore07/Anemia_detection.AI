import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { analyzeImage } from '../utils/roboflow'
import { SYMPTOMS } from '../constants/anemiaData'

export default function Screening() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const toggleSymptom = (id) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
      setError(null)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
      setError(null)
    }
  }

  const handleSubmit = async () => {
    if (!imageFile) {
      setError('Please upload an image for AI analysis.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const result = await analyzeImage(imageFile)
      navigate('/result', { state: { ...result, symptoms_analyzed: selectedSymptoms, image: imagePreview } })
    } catch (err) {
      setError(err.message || 'Analysis failed. Please try a clearer image.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-pink-50 flex flex-col">
      <Navbar showBack />

      <main className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Image for Analysis</h1>
        <p className="text-gray-500 mb-8">Pull down your lower eyelid and photograph the inner pink area, or use a clear fingernail photo.</p>

        {/* Image Upload */}
        <div
          className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-6"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Image for AI Analysis</h2>

          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Uploaded"
                className="w-full h-64 object-cover rounded-xl"
              />
              <button
                onClick={() => {
                  setImageFile(null)
                  setImagePreview(null)
                }}
                className="absolute top-3 right-3 bg-brand-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-brand-600 transition"
                aria-label="Remove image"
              >
                ✕
              </button>
            </div>
          ) : (
            <label
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center border-2 border-dashed border-brand-200 rounded-xl py-12 cursor-pointer hover:bg-brand-50 transition"
            >
              <span className="text-4xl mb-3">📷</span>
              <span className="text-sm font-medium text-brand-600">Tap to upload image</span>
              <span className="text-xs text-gray-400 mt-1">Click to upload or drag-drop</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Also experiencing?</h2>
          <div className="grid grid-cols-1 gap-3">
            {SYMPTOMS.map((s) => (
              <button
                key={s.id}
                onClick={() => toggleSymptom(s.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm text-left transition-all ${
                  selectedSymptoms.includes(s.id)
                    ? 'bg-brand-50 border-brand-400 text-brand-700 font-medium'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-brand-200'
                }`}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-6">
            {error}
            <button
              onClick={handleSubmit}
              className="mt-2 block text-red-600 font-medium underline hover:text-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading || !imageFile}
          className={`w-full font-semibold text-lg py-4 rounded-2xl shadow-lg transition-all ${
            loading || !imageFile
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-brand-500 hover:bg-brand-600 text-white shadow-brand-200 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Analyzing image...
            </span>
          ) : (
            'Analyze Now'
          )}
        </button>
      </main>

      <Footer />
    </div>
  )
}