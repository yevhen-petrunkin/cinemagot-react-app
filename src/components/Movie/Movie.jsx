// import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledLink, MovieImg, MovieBox, MovieName } from './Movie.styled';
import { GalleryPlaceholder } from 'components/Placeholder';

function Movie({ movie, location }) {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  const { id, movieName, poster } = movie;

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
    <li>
      <StyledLink to={movieId} state={{ from: location }}>
        <MovieBox>
          <MovieName>{movieName}</MovieName>
          {!isPosterLoaded && <GalleryPlaceholder />}
          {poster && (
            <MovieImg
              src={poster}
              alt="movieName"
              onLoad={() => setIsPosterLoaded(true)}
            />
          )}
        </MovieBox>
      </StyledLink>
    </li>
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
