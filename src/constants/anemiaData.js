export const SYMPTOMS = [
  { id: 'fatigue', label: 'Fatigue', icon: '😩' },
  { id: 'dizziness', label: 'Dizziness', icon: '🤕' },
  { id: 'pale_skin', label: 'Pale Skin', icon: '🫥' },
  { id: 'breathlessness', label: 'Breathlessness', icon: '😮‍💨' },
  { id: 'headache', label: 'Headache', icon: '🤯' },
]

export const CLASS_MAP = {
  'Healthy': {
    risk: 'Low Risk',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    badge: 'bg-green-100 text-green-700',
    hb: '12–14 g/dL',
    recommendation: 'Maintain a balanced iron-rich diet. Routine monthly checkup recommended.',
    icon: '✅',
  },
  'Non-Anemic': {
    risk: 'Low Risk',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    badge: 'bg-green-100 text-green-700',
    hb: '12–14 g/dL',
    recommendation: 'Maintain a balanced iron-rich diet. Routine monthly checkup recommended.',
    icon: '✅',
  },
  'anemia-desises': {
    risk: 'Moderate Risk',
    color: '#EA580C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    badge: 'bg-orange-100 text-orange-700',
    hb: '9–11 g/dL',
    recommendation: 'Take IFA supplements as prescribed. Re-screen in 30 days. Consult a health worker.',
    icon: '⚠️',
  },
  'Anemic': {
    risk: 'High Risk',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    badge: 'bg-red-100 text-red-700',
    hb: 'Below 9 g/dL',
    recommendation: 'Visit your nearest PHC for a blood test immediately. Do not delay treatment.',
    icon: '🚨',
  },
}

export const DEFAULT_RESULT_DETAIL = {
  risk: 'Inconclusive',
  color: '#6B7280',
  bg: '#F9FAFB',
  border: '#E5E7EB',
  badge: 'bg-gray-100 text-gray-700',
  hb: 'N/A',
  recommendation: 'Unable to determine risk. Please upload a clearer, well-lit image.',
  icon: '❓',
}
