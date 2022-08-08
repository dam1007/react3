import React from 'react'

function MovieItem(movies) {
    // console.log(movies.movie);
    return (
        <li>
            <a href="/">
                <img 
                src={`https://image.tmdb.org/t/p/w342${movies.movie.poster_path}`} 
                alt={movies.movie.title} />
                <p>{movies.movie.title}</p>
            </a>
        </li>
    );
}

export default MovieItem