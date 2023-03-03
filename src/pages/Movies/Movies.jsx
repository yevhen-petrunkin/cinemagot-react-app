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

import Gallery from 'components/Gallery';

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
        {isLoading && <span>Loading...</span>}
        {isError && <span>Oops... Something went wrong!</span>}
        <h1>{caption}</h1>
        <Gallery movies={movies} location={location} />
      </Container>
    </section>
  );
}

export default Movies;

Gallery.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
