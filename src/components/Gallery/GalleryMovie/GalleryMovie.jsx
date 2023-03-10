// import PropTypes from 'prop-types';

import {
  StyledLink,
  MovieBox,
  ImgBox,
  ImgBgBox,
  MovieName,
} from './GalleryMovie.styled';

import placeholder from 'images/photoholder.jpg';

function GalleryMovie({ movie, location }) {
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
    <StyledLink to={movieId} state={{ from: location }}>
      <MovieName>{movieName}</MovieName>
      <MovieBox data-swiper-parallax="7%">
        <ImgBox
          style={{ backgroundImage: `url(${poster || placeholder})` }}
          data-swiper-parallax="7%"
        ></ImgBox>
        <ImgBgBox
          style={{ backgroundImage: `url(${poster || placeholder})` }}
          data-swiper-parallax="7%"
        ></ImgBgBox>
      </MovieBox>
    </StyledLink>
  );
}

export default GalleryMovie;

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   movieName: PropTypes.string.isRequired,
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       page: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
