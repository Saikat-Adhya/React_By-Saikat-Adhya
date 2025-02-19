import React, { useState,useEffect, use } from 'react'

const App = () => {
  const[counter,setCounter]=useState(0)
  // useEffect(() => {
  //   // First=> side-effect function
  //    return () => {
  //     //  second=>Cleanup function
  //    };
  //  }, [third])//Comma separated list of dependencies

//-----------------------------------------------
  
// //Variation 1
//   //Runs on every render
//   useEffect(() => { 
//  console.log("i Will run on every render");
//  alert("i Will run on every render");
//   }
//   );

//-----------------------------------------------
// //Variation 2
// //Runs only once on the first render
// useEffect(() => { 
//   console.log("i Will run only once on the first render");
//   alert("i Will run only once on the first render");  
// }
// ,[]);
//-----------------------------------------------
//Variation 3
//Runs only when counter changes
// useEffect(() => { 
//   console.log("i Will run only when counter changes");
//   alert(`i Will run only when counter changes${counter+1}`);
// }
// ,[counter]);
//-----------------------------------------------
//Variation 4     
// runs for multiple dependencies
// useEffect(() => {
//   console.log("i Will run only when counter changes");
//   alert(`i Will run only when counter changes${counter+1}`);
// }
// ,[counter,counter+1]);
//-----------------------------------------------
//Variation 5
// use for cleqanup
// useEffect(() => {
//   console.log("i Will run only when counter changes");
//   alert(`i Will run only when counter changes${counter+1}`);
//   return()=>{
//     console.log("Cleanup function");
//     alert("Cleanup function");
//   }
// }
// ,[counter]);
  return (
    <div>
      <h1>The count is:{counter}</h1>
      <button onClick={() => setCounter(counter+1)}>Add</button>
      <button onClick={() => setCounter(prev => (prev > 0 ? prev - 1 : 0))}>Minus</button>
    </div>
  )
}

export default App
