import React from 'react';

import { useCount } from './CountContext';

const Counter = () => {
  // set dispatch and state count from useCount()
  const result = useCount()
  console.log (result)
  return (
    <>
      {/* change 0 with count from context */}
      Count: {result.state.count} 
      <div>
        {/* use dispatch for onClick method */}
        <button className="count-button" onClick={() => {result.dispatch({type: 'increment'}) }} >+</button>
        <button className="count-button" onClick={() => { result.dispatch({type: 'decrement'}) }}>-</button>
      </div>
    </>
  );
}

export default Counter;