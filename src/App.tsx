import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgrammesPage from './pages/ProgrammesPage'
import ActivitiesPage from './pages/ActivitiesPage'
import MinistriesPage from './pages/MinistriesPage'
import MessagesPage from './pages/MessagesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}