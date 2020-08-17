import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  SecondCounter: 10
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement2':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>IncrementFive</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>DecrementFive</button>
    </div>
  );
}

export default CounterTwo;
