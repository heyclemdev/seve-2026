import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Histoire from './components/Histoire'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import MenuPage from './pages/MenuPage'
import './App.css'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Concept />
      <Menu />
      <Histoire />
      <Reservation />
      <Footer />
      <BottomNav />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<><MenuPage /><BottomNav /></>} />
    </Routes>
  )
}
