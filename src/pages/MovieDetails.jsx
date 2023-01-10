import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import cat from '../5.jpg';

function MovieDetails() {
  const { movieId } = useParams();
  return (
    <>
      <section>
        <button>Go back</button>
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
              <Link to="/movies/:movieId/cast">Cast</Link>
              <Link to="/movies/:movieId/review">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </section>
    </>
  );
}

export default MovieDetails;
