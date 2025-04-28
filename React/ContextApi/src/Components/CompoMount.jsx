import React,{useContext} from 'react'
import { counterContext } from '../context/context'
const CompoMount = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <h1>Hello bhai: {value.count}</h1>
    </div>
  )
}

export default CompoMount
