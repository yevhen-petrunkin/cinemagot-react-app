import { MoviesBox } from './Movies.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectGallery,
  selectGalleryCaption,
  selectGalleryLoading,
  selectGalleryError,
} from 'redux/selectors';
import Container from 'components/Container';
import PropTypes from 'prop-types';
import HomeGallery from 'components/HomeGallery';

function Movies() {
  const location = useLocation();
  location.state = { page: 'movies' };
  const movies = useSelector(selectGallery);
  const caption = useSelector(selectGalleryCaption);
  const isLoading = useSelector(selectGalleryLoading);
  const isError = useSelector(selectGalleryError);

  return (
    <section>
      <Container>
        <MoviesBox>
          {isLoading && <span>Loading...</span>}
          {isError && <span>Oops... Something went wrong!</span>}
          <h1>{caption}</h1>
          <HomeGallery movies={movies} location={location} />
        </MoviesBox>
      </Container>
    </section>
  );
}

export default Movies;

HomeGallery.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
