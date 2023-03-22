import { List } from './HomeGallery.styled';
import PropTypes from 'prop-types';
import Movie from 'components/Movie/Movie';

function HomeGallery({ movies, location }) {
  return (
    <List>
      {movies &&
        movies.map(movie => {
          return <Movie key={movie.id} movie={movie} location={location} />;
        })}
    </List>
  );
}

export default HomeGallery;

HomeGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      movieName: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      aveRate: PropTypes.number.isRequired,
      countRate: PropTypes.number.isRequired,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
