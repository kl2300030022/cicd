import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>HELLO</h1>
      <h3>
        1st deployment
      </h3>
      <h2>THIS LINE IS KEPT AFTER THE 1ST DEPLOYMENT</h2>
    </>
  )
}

export default App
