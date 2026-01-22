import React, { useState } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';

export default function App() {
  const [message, setMessage] = useState(''); // variable: message

  // Bug: On veut un message par défaut
  // const [message, setMessage] = useState('Hello World'); <-- fix possible

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sample React Debugging App</h1>

      <Counter />

      <Button label={undefined} onClick={() => setMessage('Button clicked!')} />
      <p>{message}</p>
    </div>
  );
}

