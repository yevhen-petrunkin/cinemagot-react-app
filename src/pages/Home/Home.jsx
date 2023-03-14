import { GalleryBox, OpenSection, UpButton } from './Home.styled';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGallery,
  selectGalleryLoading,
  selectGalleryError,
  selectMousewheel,
  selectOpenGallery,
  selectOpenGalleryRef,
  selectGalleryType,
} from 'redux/selectors';
import { setIndex } from 'redux/redux-slices/gallerySlice';

import 'react-datepicker/dist/react-datepicker.css';

import { useMedia } from 'services/media/useMedia';

import { FreeContainer } from 'components/Container';
import Hero from 'components/Hero';
import GalleryMenuBox from 'components/GalleryMenuBox';
import Gallery from 'components/Gallery';
import HomeGallery from 'components/HomeGallery';
import Container from 'components/Container';
import Pagination from 'components/Pagination';

import { TfiAngleUp } from 'react-icons/tfi';

function Home() {
  const gallery = useSelector(selectGallery);
  const isLoading = useSelector(selectGalleryLoading);
  const isError = useSelector(selectGalleryError);
  const mousewheel = useSelector(selectMousewheel);
  const openGallery = useSelector(selectOpenGallery);
  const openGalleryRef = useSelector(selectOpenGalleryRef);
  const galleryType = useSelector(selectGalleryType);

  const openRef = useRef(openGalleryRef);
  const scrollUpRef = useRef(null);

  const { isTiny, isSmall } = useMedia();

  const dispatch = useDispatch();

  const location = useLocation();
  location.state = { page: 'home' };

  useEffect(() => {
    if (isTiny || isSmall) {
      dispatch(setIndex(1));
    }
  }, [dispatch, isSmall, isTiny]);

  useEffect(() => {
    if (openGallery && openRef) {
      setTimeout(() => {
        openRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [openGallery, openRef]);

  const scrollUpToGallery = () => {
    scrollUpRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section>
        <Hero />
      </section>
      <section ref={scrollUpRef}>
        <FreeContainer>
          <GalleryBox>
            <GalleryMenuBox />
            {isLoading && <span>Loading...</span>}
            {isError && <span>Oops... Something went wrong!</span>}
            {gallery && (
              <Gallery
                mousewheelOn={mousewheel}
                movies={gallery}
                location={location}
              />
            )}
          </GalleryBox>
        </FreeContainer>
      </section>
      {openGallery && (
        <OpenSection ref={openRef}>
          <Container>
            {galleryType !== 'trending' && <Pagination />}
            <HomeGallery movies={gallery} location={location} />
            {galleryType !== 'trending' && <Pagination />}
            <UpButton
              type="button"
              width={36}
              height={36}
              bgcolor="#d24717"
              onClick={scrollUpToGallery}
            >
              <TfiAngleUp style={{ width: '100%', height: '100%' }} />
            </UpButton>
          </Container>
        </OpenSection>
      )}
    </>
  );
}

export default Home;

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
