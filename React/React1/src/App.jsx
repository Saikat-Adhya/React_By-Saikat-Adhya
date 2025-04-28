import React from 'react'
import Card from './components/Card';

const App = () => {
  const [color, setColor] = React.useState('white');
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Hello Bro
        <Card name="Saikat"/>
      </h1>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("red")}>red</button>
    </div>
  )
}

export default App
