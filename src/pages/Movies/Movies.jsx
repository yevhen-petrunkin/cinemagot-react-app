import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesByKeyword } from 'services/services';
import { normalizeMovies } from 'services/normalize';
import Movie from 'components/Movie/Movie';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();

  const submitHandler = evt => {
    evt.preventDefault();
    if (!query) {
      return;
    }
    setQuery(query.trim().toLowerCase());
    getMoviesByKeyword(query).then(data => setMovies(data.results));
  };

  const normalizedMovies = normalizeMovies(movies);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={query}
          onChange={evt => setQuery(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {normalizedMovies.map(movie => {
          const { id, movieName } = movie;
          return (
            <Movie key={id} id={id} movieName={movieName} location={location} />
          );
        })}
      </ul>
    </>
  );
}

export default Movies;
