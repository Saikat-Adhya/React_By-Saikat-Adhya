import React, { useState } from "react";
import Addtask from "./components/Addtask";
import ActiveTabs from "./components/ActiveTabs";
import Registration from "./components/Registration";
import Login from "./components/Login";
const App = () => {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(0);
  const [on, setOn] = useState(false);

  const toggleSwitch = () => {
    setOn(!on);
  };
  const handleIncrement = () => {
    setCount(count + steps);
  };
  const handleDecrement = () => {
    setCount(count - steps);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <Registration />
        <br />
        <br />
        <Login/>
        <Addtask />
        <br />
        <br />
        <ActiveTabs />
      </div>
      <div>
        <p>{count}</p>
        <div>
          Steps:
          <input
            type="number"
            name="number"
            placeholder="Enter the steps here"
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
          />
        </div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div>
        <p>Switch staus: {on ? "on" : "off"}</p>
        <button onClick={toggleSwitch}>{on ? "on" : "off"} </button>
      </div>
    </>
  );
};

export default App;
