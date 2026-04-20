import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OffresPage from './pages/OffresPage'
import OffreDetailPage from './pages/OffreDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offres" element={<OffresPage />} />
        <Route path="/offres/:offreId" element={<OffreDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
