// src/Movie.js
import React, { useState } from 'react';
import Stars from './Stars'; // Importing the Stars component
import ReviewList from './ReviewList'; // Importing the ReviewList component
import ReviewForm from './ReviewForm'; // Importing the ReviewForm component
import './styles/Movie.css'; // Importing the CSS for Movie component

const Movie = ({ movie, onRate }) => {
  const [reviews, setReviews] = useState(movie.reviews || []);

  // Function to handle review submission
  const handleReviewSubmit = (text) => {
    setReviews([...reviews, text]); // Add new review to the list
  };

  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} /> {/* Movie image */}
      <h2>{movie.title}</h2> {/* Movie title */}
      <p>{movie.synopsis}</p> {/* Movie synopsis */}
      <Stars rating={movie.rating} onRate={onRate} /> {/* Star rating component */}
      <ReviewList reviews={reviews} /> {/* List of reviews */}
      <ReviewForm onSubmit={handleReviewSubmit} /> {/* Review form */}
    </div>
  );
};

export default Movie;