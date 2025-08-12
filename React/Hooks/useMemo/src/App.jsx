import React, { useMemo } from 'react'
import ReactMemo from './components/ReactMemo'
import { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const names = "Saikat Adhya";
  const myObj= {name: "Saikat Adhya", age: 25, city: "Kolkata"};
  const memozi = useMemo(() => {
    console.log('useMemo called');
    return myObj;
  }, [myObj]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ReactMemo name={myObj}/>
    </div>
  )
}

export default App
