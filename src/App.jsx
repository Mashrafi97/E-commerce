import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Banner from './components/Banner'
import Ads from './components/Ads'
import Newarrivals from './components/Newarrivals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Banner/>
    <Ads/>
    <Newarrivals/>  
    </>
  )
}

export default App
