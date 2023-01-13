import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTrendingMovies } from 'services';
import { normalizeMovies } from 'services';
import { HomeCaption } from './Home.styled';
import SearchList from 'components/SearchList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  location.state = { page: 'home' };

  useEffect(() => {
    getTrendingMovies().then(data => {
      setTrendingMovies(normalizeMovies(data.results));
    });
  }, []);

  return (
    <section>
      <HomeCaption>Trending Today</HomeCaption>
      <SearchList movies={trendingMovies} location={location} />
    </section>
  );
}

export default Home;

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
