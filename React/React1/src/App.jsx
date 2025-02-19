import React from 'react'
import Card from './components/Card';

const App = () => {
  const [color, setColor] = React.useState('red');
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Hello Bro
        <Card name="Saikat"/>
      </h1>
      
      <button onClick={() => setColor("blue")}>blue</button>
    </div>
  )
}

export default App
