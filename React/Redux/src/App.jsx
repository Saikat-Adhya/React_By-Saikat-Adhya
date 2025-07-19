import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice.jsx";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementPlus = () => {
    dispatch(increment());
  };

  const decrementPlus = () => {
    dispatch(decrement());
  };
  const resetMe = () => {
    dispatch(reset());
  };

  return (
    <div>
      <button onClick={incrementPlus}>Add +</button>
      <p>
        Count: {count}
      </p>
      <button onClick={decrementPlus}>Minus -</button>
      <br />
      <br />
      <button onClick={resetMe}>Reset Me </button>
    </div>
  );
};

export default App;
