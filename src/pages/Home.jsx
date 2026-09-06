import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-pink-50 flex flex-col">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            AI-Powered Anemia Screening
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-600 leading-tight mb-4">
            Early Anemia Detection
            <br />
            <span className="text-brand-500">for Every Girl</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Upload a photo of your lower eyelid or fingernail. Our AI model detects
            anemia risk instantly — no blood test needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '📷',
              title: 'Snap a Photo',
              desc: 'Lower eyelid or a clear fingernail close-up in good light.',
            },
            {
              icon: '🤖',
              title: 'AI Vision Detection',
              desc: 'Roboflow AI model analyzes pallor signs in the image.',
            },
            {
              icon: '📋',
              title: 'Instant Report',
              desc: 'Get risk level, estimated hemoglobin range, and next-step guidance.',
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/screening')}
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-brand-200 transition-all hover:scale-105 active:scale-95"
          >
            Start Screening →
          </button>
          <p className="text-xs text-gray-400 mt-4">
            Free • No blood test • Results in seconds
          </p>
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brand-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why HerHealth?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Non-invasive — no blood test needed',
              'Designed for rural school girls in India',
              'Powered by a Roboflow AI vision model',
              'Works on any phone with a camera',
              'Instant results — no lab wait times',
              'Free and offline-friendly for screening',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-brand-500 mt-0.5">✓</span>
                <span className="text-gray-600 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}