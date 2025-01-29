import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Styles.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greet></Greet>
    <Welcome name="React"></Welcome>
    </>
  )
}

export default App
