import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <dev>
      <Navbar/>
      <Hero/>
      <Category/>
    </dev>  )
}

export default App
