// src/MovieList.js
import React, { useState } from 'react';
import Movie from './Movie'; // Importing the Movie component
import './styles/MovieList.css'; // Importing the CSS for MovieList component

const MovieList = () => {
  // Initial state for movies
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Kingdom of the Planet of the Apes',
      image: '/kingdom.jpeg', // Correct path to image
      synopsis: 'A new chapter unfolds as apes navigate the complexities of leadership and survival in a post-apocalyptic world.',
      rating: 4,
      reviews: []
    },
    {
      id: 2,
      title: 'Dune: Part 2',
      image: '/dune.jpg', // Correct path to image
      synopsis: 'Paul Atreides joins the Fremen to reclaim control of the spice on Arrakis.',
      rating: 5,
      reviews: []
    }
  ]);

  // Function to handle rating updates
  const handleRate = (movieId, rating) => {
    setMovies(movies.map(movie =>
      movie.id === movieId ? { ...movie, rating } : movie
    ));
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie
          key={movie.id}
          movie={movie}
          onRate={(rating) => handleRate(movie.id, rating)} // Pass rating function to Movie component
        />
      ))}
    </div>
  );
};

export default MovieList;