// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { StyledLink, MovieBox, ImgBox, MovieName } from './Movie.styled';
import { GalleryPlaceholder } from 'components/Placeholder';

function Movie({ movie, location }) {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  const { id, movieName, poster } = movie;

  useEffect(() => {
    if (poster) {
      setIsPosterLoaded(true);
    }
  }, [poster]);

  let movieId = '';

  switch (location.state.page) {
    case 'home':
      movieId = 'movies/' + id.toString();
      break;
    case 'movies':
      movieId = id.toString();
      break;
    default:
      return;
  }

  return (
    <StyledLink to={movieId} state={{ from: location }}>
      {!isPosterLoaded && <GalleryPlaceholder />}
      {poster && (
        <MovieBox data-swiper-parallax="10%">
          <ImgBox
            style={{ backgroundImage: `url(${poster})` }}
            data-swiper-parallax="15%"
          >
            <MovieName data-swiper-parallax="5%">{movieName}</MovieName>
          </ImgBox>
        </MovieBox>
      )}
    </StyledLink>
  );
}

export default Movie;

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   movieName: PropTypes.string.isRequired,
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       page: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
