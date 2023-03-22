import PropTypes from 'prop-types';
import { StyledSwiper, RewindIconBtn } from './Gallery.styled';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIndex, selectMousewheel } from 'redux/selectors';
import { setIndex } from 'redux/redux-slices/gallerySlice';
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
import { useMedia } from 'services/media/useMedia';

import GalleryMovie from './GalleryMovie';
import { TfiControlBackward } from 'react-icons/tfi';

SwiperCore.use([Mousewheel, Navigation, Keyboard, Scrollbar, Parallax]);

function Gallery({ movies, location }) {
  const swiperRef = useRef(null);
  const index = useSelector(selectIndex);
  const mousewheel = useSelector(selectMousewheel);

  const { isLower } = useMedia();

  const dispatch = useDispatch();

  function handleRewindClick() {
    const swiper = swiperRef.current.swiper;
    dispatch(setIndex(0));
    swiper.slideTo(0);
  }

  const handleSlideChange = swiper => {
    dispatch(setIndex(swiper.activeIndex));
  };

  return (
    <>
      {!movies ? (
        <Navigate to="/" />
      ) : (
        <>
          {index > 0 && (
            <RewindIconBtn
              title="Rewind to menu"
              type="button"
              onClick={handleRewindClick}
            >
              <TfiControlBackward style={{ width: '100%', height: '100%' }} />
            </RewindIconBtn>
          )}
          <StyledSwiper
            ref={swiperRef}
            iswaiting={(index === 0).toString()}
            key={mousewheel ? 'enabled' : 'disabled'}
            modules={[Navigation]}
            parallax={true}
            speed={isLower ? 600 : 800}
            navigation={isLower || index === 0 ? false : true}
            keyboard={{ enabled: true }}
            scrollbar={{ draggable: true }}
            mousewheel={
              mousewheel
                ? {
                    sensitivity: 3,
                    thresholdDelt: 10,
                    thresholdTime: 5,
                  }
                : false
            }
            breakpoints={homePageSwiperBreakpoints}
            onSlideChange={handleSlideChange}
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
    </>
  );
}

export default Gallery;

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      movieName: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      aveRate: PropTypes.number.isRequired,
      countRate: PropTypes.number.isRequired,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

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
