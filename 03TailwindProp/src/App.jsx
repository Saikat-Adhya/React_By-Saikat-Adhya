import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl font-bold mb-4'>Tailwind Testti</h1>
     <Card userName="dodo" hashCode="Three45"/>
     <br />
     <Card userName="Adhya" hashCode="Three46"/>
    </>
  )
}

export default App
