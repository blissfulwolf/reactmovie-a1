import React, { useState } from 'react'

function MovieForm(props) {

    const [input, setInput] = useState("");

    // prevent the FORM from refreshing the page
    const handleSubmit = (e) => {
        e.preventDefault()
        // Pass in the input state to addMovie
        props.addMovie(input);
        // resets the Input to empty string
        setInput('');

    

    }


        return (
        <form onSubmit={handleSubmit} className="movie-form">
            <input 
    // Setting the input to "" after clicking AddMovie
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="movie-input"
                placeholder="Please add a movie" />
            <button type="submit" className="addmovie-button">Add Movie</button>
        </form>
    )
}

export default MovieForm
