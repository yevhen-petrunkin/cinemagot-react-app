import { MoviesBox, Caption, UpButton } from './Movies.styled';
import { useTheme } from 'styled-components';
import { useRef } from 'react';
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
import { PaginationAbr } from 'components/Pagination';
import { LoaderAdjust } from 'components/Loader';
import { TfiAngleUp } from 'react-icons/tfi';

function Movies() {
  const { colors } = useTheme();

  const location = useLocation();
  location.state = { page: 'movies' };
  const movies = useSelector(selectGallery);
  const caption = useSelector(selectGalleryCaption);
  const isLoading = useSelector(selectGalleryLoading);
  const isError = useSelector(selectGalleryError);

  const moviesRef = useRef(null);

  const scrollToBeginning = () => {
    moviesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      {isLoading && <LoaderAdjust size={100} height={100} />}
      {isError && <span>Oops... Something went wrong!</span>}
      <Container>
        {!isLoading & !isError && (
          <MoviesBox ref={moviesRef}>
            <Caption>{caption}</Caption>
            {movies && <PaginationAbr movies={movies} />}
            <HomeGallery movies={movies} location={location} />
            {movies && movies.length > 0 ? (
              <>
                <PaginationAbr movies={movies} />
                <UpButton
                  type="button"
                  width={36}
                  height={36}
                  bgcolor={colors.accent}
                  onClick={scrollToBeginning}
                >
                  <TfiAngleUp style={{ width: '100%', height: '100%' }} />
                </UpButton>
              </>
            ) : (
              <span>Surprisingly, nothing found here.</span>
            )}
          </MoviesBox>
        )}
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
