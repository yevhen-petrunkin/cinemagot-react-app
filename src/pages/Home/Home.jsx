import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/services';
import { normalizeMovies } from 'services/normalize';
import SearchList from 'components/SearchList/SearchList';

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
      <h1>Trending Today</h1>
      <SearchList movies={trendingMovies} location={location} />
    </section>
  );
}

export default Home;
