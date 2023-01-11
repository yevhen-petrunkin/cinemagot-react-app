import { Link } from 'react-router-dom';

function Movie({ id, movieName, location }) {
  return (
    <li>
      <Link to={`/movies/:${id}`} state={{ from: location }}>
        {movieName}
      </Link>
    </li>
  );
}

export default Movie;
