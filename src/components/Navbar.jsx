import { useNavigate } from 'react-router-dom'

export default function Navbar({ showBack = false }) {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        aria-label="HerHealth Home"
      >
        <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-200 group-hover:bg-brand-600 transition">
          {showBack ? '←' : 'H'}
        </div>
        <span className="text-xl font-bold text-brand-600 group-hover:text-brand-700 transition">
          HerHealth
        </span>
      </button>
    </nav>
  )
}
