import React, {useState, useEffect} from 'react'
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import MovieList from '../includes/MovieList';
import MovieSearch from '../includes/MovieSearch';

function Movie() {

    const [movies, setMovies] = useState([]);

    const search = (query) => {
        let requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=45e9fa99afdcadc228de0c92d3ee1c9c&query=${query}`, requestOptions)
        .then((response) => response.json())
        .then(result => {
            console.log(result);
            setMovies(result.results);
        });
    };

    // 1. fetch로 영화 데이터 불러오기
    useEffect(() => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('https://api.themoviedb.org/3/search/movie?api_key=45e9fa99afdcadc228de0c92d3ee1c9c&query=marvel', requestOptions)
        .then(response => response.json())
        .then(result => {
            setMovies(result.results)
            // console.log(result.results);
        });

    }, []);
    

  return (
    <>
        <Header />
        <Contents>
            <Title title={['movie', 'reference']} />
            <section className="youtube__cont">
              <div className="container">
                <div className="youtube__inner">
                    <MovieSearch onSearch={search} />  
                    <MovieList movies={movies} />
                </div>
              </div>
            </section>
            <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Movie