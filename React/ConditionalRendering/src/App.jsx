import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>
      <User name="John"  isLogin={true}/>
      {/* <User name="Saikat" /> */}
     </h1>
    </>
  )
}

export default App
