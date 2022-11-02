import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

  async function fetchMovieHandler() {
    const movieJson = await fetch('https://swapi.dev/api/films')
    const movieResult = await movieJson.json()
    const transFormData = movieResult.results.map(movieData => {
      return {
        "id": movieData.episode_id,
        "title": movieData.title,
        "openingText": movieData.opening_crawl,
        "releaseDate": movieData.release_date,
      }
    })
    setMovies(transFormData);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
