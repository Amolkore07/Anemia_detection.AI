// Roboflow Inference API — real anemia detection
// Set VITE_ROBOFLOW_API_KEY in your local .env file (see .env.example)
const ROBOFLOW_API_KEY = import.meta.env.VITE_ROBOFLOW_API_KEY || 'ROBOFLOW_API_KEY'

const ROBOFLOW_URL = 'https://detect.roboflow.com/anemia-detection-7nno5/1'

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export function ensureApiKeyConfigured() {
  if (!ROBOFLOW_API_KEY || ROBOFLOW_API_KEY === 'ROBOFLOW_API_KEY') {
    throw new Error('Please set your VITE_ROBOFLOW_API_KEY in your .env file')
  }
}

export async function analyzeImage(imageFile) {
  ensureApiKeyConfigured()

  const base64 = await fileToBase64(imageFile)

  const body = new URLSearchParams()
  body.append('image', base64)

  let response
  try {
    response = await fetch(`${ROBOFLOW_URL}?api_key=${ROBOFLOW_API_KEY}`, {
      method: 'POST',
      body,
    })
  } catch {
    throw new Error('Could not reach analysis server. Check your connection and try again.')
  }

  if (!response.ok) {
    throw new Error('Analysis failed. Please try a clearer image.')
  }

  const data = await response.json()
  const predictions = data?.predictions

  if (!predictions || predictions.length === 0) {
    throw new Error('Result inconclusive. Please upload a clearer, well-lit image.')
  }

  const best = predictions.reduce((a, b) =>
    b.confidence > a.confidence ? b : a
  )

  return {
    predicted_class: best.class,
    confidence: Math.round(best.confidence * 100),
    predictions,
  }
}
