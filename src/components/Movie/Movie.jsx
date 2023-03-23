import {
  StyledLink,
  MovieBox,
  Sign,
  ImgBox,
  InfoBox,
  Info,
  Date,
  RateBox,
  MovieName,
} from './Movie.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getMovieIdByPage } from 'services';

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

  const movieId = getMovieIdByPage(id, location.state.page);

  return (
    <MovieBox>
      <ImgBox img={poster || placeholder} />
      <Sign>Interactive</Sign>
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
  );
}

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movieName: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    aveRate: PropTypes.number.isRequired,
    countRate: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

StarWidg.propTypes = {
  number: PropTypes.number.isRequired,
};

HeartWidg.propTypes = {
  number: PropTypes.number.isRequired,
};
