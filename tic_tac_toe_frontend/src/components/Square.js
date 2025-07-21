import React from 'react';
import './Square.css';

// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => {
  return (
    <button 
      className={`square ${value ? 'marked' : ''}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
