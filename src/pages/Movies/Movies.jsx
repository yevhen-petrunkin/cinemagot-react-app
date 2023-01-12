import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMoviesByKeyword } from 'services/services';
import { normalizeMovies } from 'services/normalize';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const paramQuery = useMemo(
    () => searchParams.get('query') ?? '',
    [searchParams]
  );

  useEffect(() => {
    if (!paramQuery) {
      return;
    }
    getMoviesByKeyword(paramQuery).then(data => {
      setMovies(normalizeMovies(data.results));
    });
  }, [paramQuery]);

  const onFormSubmit = query => {
    if (!query) {
      return;
    }
    setSearchParams(searchParams => ({ ...searchParams, query: query }));
    getMoviesByKeyword(query).then(data => {
      setMovies(normalizeMovies(data.results));
    });
  };

  const location = useLocation();
  location.state = { page: 'movies' };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      <SearchList movies={movies} location={location} />
    </>
  );
}

export default Movies;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      movieName: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
