import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <dev>
      <Navbar/>
      <Hero/>
    </dev>  )
}

export default App
