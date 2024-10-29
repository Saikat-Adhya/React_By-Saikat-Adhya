import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0);
  const [name, setName] = useState("Saikat")
  const addValue = ()=>{
    if (counter<20) {
      setCount(counter+1)
    }
  };
  const decraseValue = ()=>{
    if (counter>0) {
      setCount(counter-1)
    }
    
  }
  const changeName = ()=>{
    setName("Dodo")
  }
  return (
    <>
      <h1>Saikat Adhya</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={decraseValue}>Decrease Value</button>
      <h1>Hello This is: {name}</h1>
      <button onClick={changeName}>ChangeName</button>
    </>
  )
}

export default App
