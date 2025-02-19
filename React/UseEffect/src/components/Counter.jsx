import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
