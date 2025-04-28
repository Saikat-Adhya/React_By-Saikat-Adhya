import React from "react";
import CompoMount from "./CompoMount";
import { useContext } from "react";
import { counterContext } from "../context/context";
const Button = () => {
    const  value = useContext(counterContext)
    const changeHandler = () => {
        value.setCount((count) => count + 1);
    }
  return (
    <div>
      <button onClick={changeHandler} style={{ padding: "10px", backgroundColor: "blue", color: "white" }}>
        <span>
          <CompoMount />
        </span>
        <br />
        <br />
        click Me
      </button>
    </div>
  );
};

export default Button;
