import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sponsors from './components/sponsor'
import Cards from './components/cards'
import NFTs from './components/NFTs'
import Footer from './components/Footer'
function App() {
  //const [count, setCount] = useState(0)

  return (
  <>
  <Navbar />
  <Hero />
  <Sponsors />
  <Cards />
  <NFTs />
  <Footer />
  </>
  )
}

export default App