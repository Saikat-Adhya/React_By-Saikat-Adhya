import React, { useContext } from 'react'
import { BioContext } from '../context/Contexti';

const Button = () => {
    const value = useContext(BioContext);

    const handleClick = () => {
        value.setCount(value.count + 1);
    }
  return (
    <>
      <button onClick={handleClick}>CHange Me </button>
    </>
  )
}

export default Button
