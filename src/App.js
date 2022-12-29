import React, { useState } from 'react'
import './App.css';
import MovieForm from './components/MovieForm'


function App() {

  const [movielist, setMovieList] = useState([]);

  const addMovie = (text) => {
    let id = 1
    if (movielist.length > 0) {
      id = movielist[0].id + 1
    }
    // addMovie JSON object with 2 properties
    let addMovie = { id: id, text: text }
    
    // INSERT addMovie to the 
    // Start(... Spread/Copy) of movielist []
    let newMovieList = [addMovie, ...movielist]
    console.log(newMovieList);
    setMovieList(newMovieList)
  };

  return (

    <div className="movie-app">
      <h1>Movie App Assignment 1</h1>
      <MovieForm addMovie={addMovie} />

    </div>
  );
}

export default App;
