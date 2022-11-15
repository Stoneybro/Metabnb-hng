import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Card from './components/card'
import NFTs from './components/NFTs'
import Wallet from './components/Wallet'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
function App() {
  const [openwallet, setopenwallet] = useState(false)
  const [sidebar,setsidebar]=useState(false)
  function menu(params) {
    setsidebar(!sidebar)
  }
  function modal(params) {
    setopenwallet(!openwallet)
  }
  return (
  <div className='App'>

  <Navbar modal={modal} menu={menu} />
  <Hero />
  <Sponsors />
  <Card />
  <NFTs />
  <Footer />
 { sidebar&&<Sidebar menu={menu} />}
  {openwallet&&<Wallet modal={modal} />}
  {openwallet&& <div className="blur"></div>}

  </div>
  )
}

export default App
