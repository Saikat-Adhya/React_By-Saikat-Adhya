import React, { useContext } from 'react'
import { BioContext } from '../context/Contexti'

const Home = () => {

  const value=useContext(BioContext)
  return (
    <div>
      Home haire haule
      <h1>{value.count}</h1>
  
    </div>
  )
}

export default Home
