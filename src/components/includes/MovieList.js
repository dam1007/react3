import React from 'react'
import MovieItem from './MovieItem'

function MovieList (props) {
    // console.log(props);
    return (
        <div className='youtube__list'>
            <ul>
                {props.movies.map((movies, index) => (
                    <MovieItem movie={movies} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default MovieList