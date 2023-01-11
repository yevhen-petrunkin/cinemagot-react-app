import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/services';
import cat from '../../5.jpg';
function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);
  const backLinkHref = location.state?.from ?? '/';
  console.log(getMovieById(movieId));
  return (
    <>
      <section>
        <Link to={backLinkHref}>Go Back</Link>
        <div>
          <img src={cat} alt="lorem" width="200px" />
        </div>
        <div>
          <h1>Film Name {movieId}</h1>
          <p>User Score:</p>
          <h2>Overview</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            quasi tenetur laborum quam fuga accusantium adipisci. Sed obcaecati
            et ullam!
          </p>
          <h3>Genres</h3>
          <p>Drama, comedy, action</p>
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
        <Outlet />
      </section>
    </>
  );
}

export default MovieDetails;
