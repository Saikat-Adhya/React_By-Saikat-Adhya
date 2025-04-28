import React from 'react'
import { useEffect,useState } from 'react'
const Timeout = () => { 
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
            console.log("Timeout")
        }, 1000)
    },[count]);
  return (
    <div>
      <h1>
        The count is: {count}
      </h1>
    </div>
  )
}

export default Timeout

