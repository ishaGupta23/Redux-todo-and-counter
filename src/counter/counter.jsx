import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterSlice, store } from "..";

function Counter() {
  const value = useSelector((state) => {
    return state.value;
  });
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch(counterSlice.actions.incremented());
  };
  const handleDecrement = () => {
    dispatch(counterSlice.actions.decremented());
  };
  const handleReset = () => {
    dispatch(counterSlice.actions.reset());
  };
  return (
    <div >
      <h2>Redux Assignment 1-Counter Application using Redux</h2>
      <h1>Counter: {value}</h1>
      <button onClick={handleIncreament}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;