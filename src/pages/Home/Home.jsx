import { GalleryBox, OpenSection, UpButton } from './Home.styled';
import { useTheme } from 'styled-components';

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectGalleryCollection } from 'redux/selectors';
import { setIndex } from 'redux/redux-slices/gallerySlice';

import 'react-datepicker/dist/react-datepicker.css';

import { useMedia } from 'services/media/useMedia';

import { messageData } from 'services/sources/messageDataSource';

import { FreeContainer } from 'components/Container';
import Hero from 'components/Hero';
import GalleryMenuBox from 'components/GalleryMenuBox';
import Gallery from 'components/Gallery';
import HomeGallery from 'components/HomeGallery';
import Container from 'components/Container';
import Pagination from 'components/Pagination';
import Loader from 'components/Loader';
import { ErrorLoader } from 'components/Loader';

import { TfiAngleUp } from 'react-icons/tfi';

function Home() {
  const {
    gallery,
    loading,
    error,
    galleryType,
    isMousewheel,
    isOpenGallery,
    isOpenGalleryRef,
  } = useSelector(selectGalleryCollection);

  const { colors } = useTheme();

  const openRef = useRef(isOpenGalleryRef);
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
    if (isOpenGallery && openRef) {
      setTimeout(() => {
        openRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpenGallery, openRef]);

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
            {loading && <Loader size={100} />}
            {error && (
              <ErrorLoader size={100} text={messageData.errorMessage} />
            )}
            {gallery && !loading && (
              <Gallery
                mousewheelOn={isMousewheel}
                movies={gallery}
                location={location}
              />
            )}
          </GalleryBox>
        </FreeContainer>
      </section>
      {isOpenGallery && (
        <OpenSection ref={openRef}>
          <Container>
            {galleryType !== 'trending' && <Pagination />}
            <HomeGallery movies={gallery} location={location} />
            {galleryType !== 'trending' && <Pagination />}
            <UpButton
              type="button"
              width={36}
              height={36}
              bgcolor={colors.accent}
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
