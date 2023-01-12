import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ id, movieName, location }) {
  let movieId = '';
  const page = location.state.page;

  switch (page) {
    case 'home':
      movieId = `/movies/${id}`;
      break;
    case 'movies':
      movieId = `${id}`;
      break;
    default:
      return;
  }

  return (
    <li>
      <Link to={movieId} state={{ from: location }}>
        {movieName}
      </Link>
    </li>
  );
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  movieName: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
