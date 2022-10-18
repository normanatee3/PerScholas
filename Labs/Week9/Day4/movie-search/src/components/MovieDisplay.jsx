import React from 'react'

function MovieDisplay({ movie }) {
    const loaded = () => {

        return (
            <div className='movie'>
                <h1 className='title'>{movie.Title}</h1>
                <h4 className="writer">Written by: {movie.Writer}</h4>
                <h2 className='genre'>Genre: {movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2 className='year'>Released: {movie.Year}</h2>
                <div className="midBox">

                    <p className='plot'><strong> Plot: </strong>{movie.Plot}</p>
                </div>
                <h4 className='rating'>IMDB Rating: {movie.imdbRating} based on {movie.imdbVotes} reviews.</h4>

            </div>
        )
    }
    const loading = () => {
        return <h1 className='movie'>No Movie to Display</h1>;
    };
    return movie && movie.Response!=="False" ? loaded() : loading();
};


export default MovieDisplay