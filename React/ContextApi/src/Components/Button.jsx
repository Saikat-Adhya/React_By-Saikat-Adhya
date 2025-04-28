import React from "react";
import CompoMount from "./CompoMount";
import { useContext } from "react";
import { counterContext } from "../context/context";
const Button = () => {
    const  value = useContext(counterContext)
    const changeHandler = () => {
        if (value.count > 10) {
            value.setCount((prev) => prev - 1);
            
        }
        // value.setCount((prev) => prev - 1);
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
