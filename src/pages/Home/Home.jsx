import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/services';
import { normalizeMovies } from 'services/normalize';
import Movie from 'components/Movie/Movie';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(data => setTrendingMovies(data.results));
  }, []);

  if (!trendingMovies) {
    return;
  }

  const normalizedTrendingMovies = normalizeMovies(trendingMovies);

  return (
    <section>
      <h1>Trending Today</h1>
      <ul>
        {normalizedTrendingMovies.map(movie => {
          const { id, movieName } = movie;
          return (
            <Movie key={id} id={id} movieName={movieName} location={location} />
          );
        })}
      </ul>
    </section>
  );
}

export default Home;
