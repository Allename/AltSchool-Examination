import { useReducer } from "react";
import {reducer} from './reducer';

const Counter = () => {

  const initialState = {count: 0};
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseValue = () => {
    dispatch({ type: "INCREASE" });
  }

  const decreaseValue = () => {
    dispatch({ type: "DECREASE" });
  }

  const resetValue = () => {
    dispatch({ type: "RESET" });
  }

  return (
    <div className="container">
      <h1 className='counter-label'>Counter: {state.count}</h1>

      <div className="button-container">
        <button onClick={increaseValue}>Increase</button>
        <button onClick={resetValue} className='reset'>Reset</button>
        <button onClick={decreaseValue}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;