import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, increaseBy5 } from "./CounterSlice";
const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter App</h3>
      <hr />
      <h2>count:{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      {/* payload example */}
      <button onClick={() => dispatch(increaseBy5(5))}>Increase By 5</button>
    </div>
  );
};

export default CounterView;
