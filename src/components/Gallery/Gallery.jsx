// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setIndex } from 'redux/redux-slices/gallerySlice';
import { StyledSwiper } from './Gallery.styled';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Mousewheel,
  Navigation,
  Keyboard,
  Scrollbar,
  Parallax,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigate } from 'react-router-dom';
import { homePageSwiperBreakpoints } from 'services/sources/homePageSwiperBreakpointsSource';

import GalleryMovie from './GalleryMovie';

SwiperCore.use([Mousewheel, Navigation, Keyboard, Scrollbar, Parallax]);

function Gallery({ movies, location }) {
  const dispatch = useDispatch();

  const handleSlideChange = swiper => {
    dispatch(setIndex(swiper.activeIndex));
  };

  return (
    <>
      {!movies ? (
        <Navigate to="/" />
      ) : (
        <>
          <StyledSwiper
            modules={[Navigation]}
            parallax={true}
            speed={800}
            navigation
            keyboard={{ enabled: true }}
            scrollbar={{ draggable: true }}
            mousewheel={{
              sensitivity: 3,
              thresholdDelt: 10,
              thresholdTime: 5,
            }}
            breakpoints={homePageSwiperBreakpoints}
            onSlideChange={handleSlideChange}
            // onSwiper={swiper => console.log(swiper)}
          >
            {movies.map(movie => {
              return (
                <SwiperSlide key={movie.id}>
                  <GalleryMovie
                    key={movie.id}
                    movie={movie}
                    location={location}
                  />
                </SwiperSlide>
              );
            })}
          </StyledSwiper>
        </>
      )}

      {/* {!movies ? (
        <Navigate to="/" />
      ) : (
        <List>
          {movies.map(movie => {
            return <Movie key={movie.id} movie={movie} location={location} />;
          })}
        </List>
      )} */}
    </>
  );
}

export default Gallery;

// Gallery.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       movieName: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       page: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
