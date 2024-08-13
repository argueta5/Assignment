// src/ReviewForm.js
import React, { useState } from 'react';
import './styles/ReviewForm.css'; // Importing the CSS for ReviewForm component

const ReviewForm = ({ onSubmit }) => {
  const [text, setText] = useState(''); // State to manage review text

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (text.trim()) {
      onSubmit(text); // Call the parent component's submit function
      setText(''); // Clear the textarea after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state with textarea value
        placeholder="Leave a review"
        rows="3"
        required
      />
      <button type="submit">Submit Review</button> {/* Submit button */}
    </form>
  );
};

export default ReviewForm;