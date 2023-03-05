// import PropTypes from 'prop-types';
import { List } from './Gallery.styled';
import { Navigate } from 'react-router-dom';
import Movie from 'components/Movie';

function Gallery({ movies, location }) {
  return (
    <>
      {!movies ? (
        <Navigate to="/" />
      ) : (
        <List>
          {movies.map(movie => {
            return <Movie key={movie.id} movie={movie} location={location} />;
          })}
        </List>
      )}
    </>
  );
}

export default Gallery;

// Gallery.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       movieName: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       page: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
