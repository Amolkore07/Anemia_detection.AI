/**
 * Communicates with the local Flask backend (model_anemia.h5)
 * for anemia risk prediction.
 */
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function analyzeImage(imageFile) {
  const formData = new FormData()
  formData.append('image', imageFile)

  const response = await fetch(`${API_URL}/predict`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody.error || `Server responded with status ${response.status}`)
  }

  return await response.json()
}
