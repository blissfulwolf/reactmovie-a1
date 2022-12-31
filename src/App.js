import React, { useState } from "react";
import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movielist, setMovieList] = useState([]);

  const [show, setShow] = useState(false);

  const addMovie = (text) => {
    let id = 1;
    if (movielist.length > 0) {
      id = movielist[0].id + 1;
    }
    // addMovie JSON object with 2 properties
    let addMovie = { id: id, text: text };

    // INSERT addMovie to the
    // Start(... Spread/Copy) of movielist []
    let newMovieList = [addMovie, ...movielist];
    console.log(newMovieList);
    setMovieList(newMovieList);
  };

  const removeMovie = (id) => {
    let updatedMovieList = [...movielist].filter((movie) => movie.id !== id);
    setMovieList(updatedMovieList);
  };

  return (
    <div className="movie-app">
      <h1>Movie App Assignment 1</h1>

       {/* Create the movie rows */}
       <MovieForm addMovie={addMovie} />

      {/* Show / Hide the movie */}
      <div className="hideshow">
        {show ? <h3>Top Gun: Maverick </h3> : null}
        <button onClick={() => setShow(false)} className="hideButton">
          Hide
        </button>
        <button onClick={() => setShow(true)} className="showButton">
          Show
        </button>
      </div>

     

   

      {/* remove the movie that is deleted */}
      {movielist.map((movie) => {
        return (
          <MovieList removeMovie={removeMovie} movie={movie} key={movie.id} />
        );
      })}
    </div>
  );
}
export default App;
