import PropTypes from 'prop-types';
import { List } from './Gallery.styled';
import Movie from 'components/Movie';

function Gallery({ movies, location }) {
  return (
    <List>
      {movies.map(movie => {
        const { id, movieName } = movie;
        return (
          <Movie key={id} id={id} movieName={movieName} location={location} />
        );
      })}
    </List>
  );
}

export default Gallery;

Gallery.propTypes = {
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
