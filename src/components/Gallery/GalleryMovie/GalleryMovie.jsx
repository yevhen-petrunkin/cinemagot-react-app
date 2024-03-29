import {
  StyledLink,
  MovieWrapper,
  MovieBox,
  ImgBox,
  ImgBgBox,
  MovieName,
  RateBox,
} from './GalleryMovie.styled';

import PropTypes from 'prop-types';

import { StarWidg, HeartWidg } from 'components/Widgets';
import placeholder from 'images/photoholder.jpg';

function GalleryMovie({ movie, location }) {
  const { id, movieName, poster, popularity, aveRate } = movie;

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
    <MovieWrapper>
      <MovieName data-swiper-parallax="7%">{movieName}</MovieName>
      <StyledLink to={movieId} state={{ from: location }}>
        <MovieBox data-swiper-parallax="7%">
          <ImgBox
            style={{ backgroundImage: `url(${poster || placeholder})` }}
            data-swiper-parallax="7%"
          >
            <RateBox>
              <StarWidg number={popularity} />
              <HeartWidg number={aveRate} />
            </RateBox>
          </ImgBox>
          <ImgBgBox
            style={{ backgroundImage: `url(${poster || placeholder})` }}
            data-swiper-parallax="7%"
          />
        </MovieBox>
      </StyledLink>
    </MovieWrapper>
  );
}

export default GalleryMovie;

GalleryMovie.propTypes = {
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
