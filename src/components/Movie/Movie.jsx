// import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledLink, MovieImg, MovieBox } from './Movie.styled';
import { PosterPlaceholder } from 'components/Placeholder';

function Movie({ movie, location }) {
  const { id, movieName, poster } = movie;

  let movieId = id.toString();
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  return (
    <li>
      <StyledLink to={movieId} state={{ from: location }}>
        <MovieBox>
          <p>{movieName}</p>
          {!isPosterLoaded && <PosterPlaceholder />}
          {poster && (
            <MovieImg
              src={poster}
              alt="movieName"
              width="200px"
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
