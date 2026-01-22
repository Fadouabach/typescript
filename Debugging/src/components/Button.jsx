import React from 'react';

export default function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {/* Bug: label peut être undefined */}
      {label || 'Default Button'}
    </button>
  );
}
