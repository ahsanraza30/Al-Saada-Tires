import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TyresPage from './pages/TyresPage'
import ContinentalPage from './pages/ContinentalPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tyres" element={<TyresPage />} />
        <Route path="/continental" element={<ContinentalPage />} />
      </Routes>
    </BrowserRouter>
  )
}
