import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById, getPictureAddress } from 'services';
import { stringifyData } from 'services';
import { PosterPlaceholder } from 'components/Placeholder';
import LoaderComp from 'components/Loader';

function MovieDetails() {
  const [posterAddress, setPosterAddress] = useState('');
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genreString, setGenreString] = useState('');

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId).then(movie => {
      const { poster_path, title, popularity, overview, genres } = movie;
      setPosterAddress(getPictureAddress(poster_path));
      setTitle(title);
      setScore(popularity);
      setOverview(overview);
      setGenreString(stringifyData(genres));
    });
  }, [movieId]);

  return (
    <>
      <section>
        <Link to={backLinkHref}>Go Back</Link>
        <div>
          {!isPosterLoaded && <PosterPlaceholder />}
          <img
            src={posterAddress}
            alt={title}
            width="200px"
            onLoad={() => setIsPosterLoaded(true)}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>User Score: {score}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genreString}</p>
        </div>
      </section>
      <section>
        <h4>Additional Information</h4>
        <nav>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
              <Link to="review">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<LoaderComp />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
}

export default MovieDetails;
