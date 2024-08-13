// src/ReviewList.js
import React from 'react';
import Review from './Review'; // Importing the Review component
import './styles/ReviewList.css'; // Importing the CSS for ReviewList component

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} text={review} />
      ))}
    </div>
  );
};

export default ReviewList;