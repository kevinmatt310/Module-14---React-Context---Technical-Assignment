import React from 'react';

import { useCount } from './CountContext'

const ViewCounter = () => {
  // set state count from useCount
  const result = useCount()
  console.log (result)
  return (
    <div>
      {/* change 0 with count from context */}
      Count: {result.state.count}
    </div>
  );
}

export default ViewCounter;