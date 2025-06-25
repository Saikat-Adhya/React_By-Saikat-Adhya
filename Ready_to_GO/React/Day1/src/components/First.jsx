import React from 'react'
import Second from './Second'

const First = ({name,person}) => {
  return (
    <div>
      <h1>Hello This Dodo{name}</h1>
      <br />
      <Second person={person}/>
    </div>
  )
}

export default First
