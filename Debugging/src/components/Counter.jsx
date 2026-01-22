import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // variable: count

  // Bug: increment fonction était fausse
  // setCount(count - 1); <-- fix: setCount(count + 1)

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
