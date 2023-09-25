import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './components/Root/Root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Assignment 8</h1>
      <Root></Root>
    </>
  )
}

export default App
