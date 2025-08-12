import React from 'react'
import { memo,useRef } from 'react';
const CountMemo = ({name}) => {
    const renderCount = useRef(0);
    console.log('CountMemo Rendered', renderCount);
    
  return (
    <div>
      <h2>{name.age}</h2>
      <h1>Hello this updated counter: {renderCount.current++} times</h1>
    </div>
  )
}

export default memo(CountMemo)
