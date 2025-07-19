import React, { useEffect, useState } from 'react'
import Challenge from './components/Challenge'
import FetchData from './API/FetchData'

const App = () => {

  // const [time, setTime] = useState(0);
  
  // const [count, setCount] = React.useState(0);

  //  useEffect(() => {
  //   console.log('useEffect called',count);
  // }, [count]); // Empty dependency array means this effect runs once after the initial render
  // useEffect(()=>{
  //   // This effect runs every time the component renders
  //   // and updates the time state with the current time.
  //   // It will also run when the `time` state changes.
  //   setInterval(() => {
  //     const updateDate = new Date().toLocaleTimeString();
  //     setTime(updateDate);
  //     console.log('Interval called', updateDate);
  //   }, 1000);
  // // Cleanup function to clear the interval when the component unmounts
  //   return () => {
  //     console.log('Cleanup function called');
  //     clearInterval();
  //   };
  // },[])

const data = "Saikat Adhya"
  // ----------------------------------------------
  return (
    <>
    <FetchData/>

    <Challenge data={data}/>
    {/* <div>
      <h1>Welcome to my App</h1>
      <h1>This is my use Effect</h1>

      <h2>This is my count{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

    </div> */}

    {/* <div>
      <h1>Welcome to my App</h1>
      <p>{time}</p>
    </div> */}
      
    </>
)
}

export default App
