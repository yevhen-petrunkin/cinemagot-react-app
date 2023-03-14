// import PropTypes from 'prop-types';

import {
  StyledLink,
  MovieBox,
  ImgBox,
  InfoBox,
  Info,
  Date,
  RateBox,
  MovieName,
} from './Movie.styled';
import { useEffect } from 'react';

import { StarWidg, HeartWidg } from 'components/Widgets';
import placeholder from 'images/photoholder.jpg';

const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

function Movie({ movie, location }) {
  useEffect(() => {
    if (isTouchDevice()) {
      const movieBoxes = document.querySelectorAll('.MovieBox');
      movieBoxes.forEach(movieBox => {
        movieBox.addEventListener('touchstart', () => {
          const infoBox = movieBox.querySelector('.InfoBox');
          infoBox.classList.toggle('show');
        });
      });
    }
  }, []);

  const { id, movieName, poster, overview, release, popularity, aveRate } =
    movie;

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
    <>
      {poster && (
        <MovieBox>
          <ImgBox img={poster || placeholder} />
          <InfoBox>
            <MovieName>{movieName}</MovieName>
            <Info>{overview}</Info>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <RateBox>
                <StarWidg number={popularity} />
                <HeartWidg number={aveRate} />
              </RateBox>
              <Date>{release}</Date>
            </div>
            <StyledLink to={movieId} state={{ from: location }}>
              See More
            </StyledLink>
          </InfoBox>
        </MovieBox>
      )}
    </>
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
