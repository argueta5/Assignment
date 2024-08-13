// src/App.js
import React from 'react';
import './styles/App.css'; // Importing the CSS for App component
import MovieList from './MovieList'; // Importing the MovieList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Reviews</h1> {/* Header title */}
      </header>
      <MovieList /> {/* Rendering the MovieList component */}
    </div>
  );
}

export default App;