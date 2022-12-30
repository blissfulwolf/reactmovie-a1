import React from "react";

function MovieList(props) {

  const { movie, removeMovie } = props

  return (
    <div className="movie-row">
      {props.movie.text}
      <button
        className="deleteButton"
        onClick={() => removeMovie(movie.id)} >
        Delete
      </button>

    </div>
  );
}

export default MovieList;
