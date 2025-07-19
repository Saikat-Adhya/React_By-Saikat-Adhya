import React, { useEffect } from "react";

const Challenge = ({data}) => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  const lol = count;
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  useEffect(()=>{
    document.title = `count: ${count}`;
    console.log("Changing Name: ", name);
    
  },[count, name]); // This effect runs when count or name changes
  return (
    <div>
        <p>{data}</p>
      <h1>Use Effect Challenge</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <h2>Name: {name}</h2>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default Challenge;
