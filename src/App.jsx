import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Screening from './pages/Screening'
import Result from './pages/Result'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
