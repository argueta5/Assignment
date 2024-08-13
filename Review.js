// src/Review.js
import React from 'react';
import './styles/Review.css';

// Review component that displays a single review text
const Review = ({ text }) => {
  return <div className="review">{text}</div>; // Render the review text inside a div
};

export default Review;