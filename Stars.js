// src/Stars.js
import React from 'react';
import './styles/Stars.css'; // Importing the CSS for Stars component

const Stars = ({ rating, onRate }) => {
  // Function to handle star click events
  const handleClick = (value) => {
    if (onRate) onRate(value); // Call the parent component's rating function
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${rating >= star ? 'filled' : ''}`}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;