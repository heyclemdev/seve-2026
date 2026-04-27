import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Histoire from './components/Histoire'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import './App.css'

export default function App() {
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
