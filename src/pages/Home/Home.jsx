import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGallery,
  selectGalleryCaption,
  selectGalleryLoading,
  selectGalleryError,
  selectGalleryType,
  selectValueObject,
  selectParams,
  selectRating,
  selectUser,
} from 'redux/selectors';
import {
  setGalleryType,
  setParams,
  setValueObject,
  setRating,
} from 'redux/redux-slices/gallerySlice';
import {
  getHomePageGallery,
  getMoviesByParams,
} from 'redux/redux-operations/tmdbOperations';
import 'react-datepicker/dist/react-datepicker.css';
import { defaultValueObjectSource } from 'services/sources/defauldValueObjectSource';
import { normalizeDate } from 'services/normalize';

import { HomeCaption } from './Home.styled';
import Container from 'components/Container';
import GalleryMenu from 'components/GalleryMenu';
import GallerySelectMenu from 'components/GallerySelectMenu';
import GalleryDatePickerMenu from 'components/GalleryDatePickerMenu';
import Gallery from 'components/Gallery';

function Home() {
  const gallery = useSelector(selectGallery);
  const caption = useSelector(selectGalleryCaption);
  const isLoading = useSelector(selectGalleryLoading);
  const isError = useSelector(selectGalleryError);
  const galleryType = useSelector(selectGalleryType);
  const params = useSelector(selectParams);
  const valueObject = useSelector(selectValueObject);
  const rating = useSelector(selectRating);
  const isUserAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  const location = useLocation();
  location.state = { page: 'home' };

  const [lowerDate, setLowerDate] = useState(null);
  const [greaterDate, setGreaterDate] = useState(null);

  useEffect(() => {
    const keys = Object.keys(params);
    if (keys.length) {
      dispatch(getMoviesByParams(params));
    } else {
      dispatch(getHomePageGallery(galleryType));
    }
  }, [dispatch, galleryType, params]);

  const resetParams = () => {
    dispatch(setRating(''));
    dispatch(setParams({}));
    dispatch(setValueObject(defaultValueObjectSource));
    setLowerDate(null);
    setGreaterDate(null);
  };

  const handleRadioBtnChange = e => {
    resetParams();
    dispatch(setGalleryType(e.target.value));
  };

  const handleSelectGenreChange = e => {
    dispatch(setValueObject({ ...valueObject, genres: e }));
    dispatch(setParams({ ...params, genres: e }));
  };

  const handleNonMultiSelect = (e, objValue) => {
    dispatch(setValueObject({ ...valueObject, [objValue]: e }));
    dispatch(setParams({ ...params, [objValue]: e.value }));
  };

  const handleRatingChange = e => {
    dispatch(setRating(e.target.value));
    dispatch(setParams({ ...params, voteAverage: e.target.value }));
  };

  const handleLowerDateChange = date => {
    setLowerDate(date);
    const normalizedDate = normalizeDate(date);
    dispatch(setParams({ ...params, lowerDate: normalizedDate }));
  };

  const handleGreaterDateChange = date => {
    setGreaterDate(date);
    const normalizedDate = normalizeDate(date);
    dispatch(setParams({ ...params, greaterDate: normalizedDate }));
  };

  return (
    <section>
      <Container>
        <HomeCaption>{caption ?? 'CineMaGot'}</HomeCaption>
        <ul>
          <li>
            <GalleryMenu onChange={handleRadioBtnChange} />
          </li>
          {isUserAuth && (
            <>
              <li>
                <GallerySelectMenu
                  onGenreChange={handleSelectGenreChange}
                  onOtherChange={handleNonMultiSelect}
                  object={valueObject}
                />
              </li>
              <li>
                <GalleryDatePickerMenu
                  lowerDate={lowerDate}
                  greaterDate={greaterDate}
                  onLowerChange={handleLowerDateChange}
                  onGreaterChange={handleGreaterDateChange}
                />
              </li>
              <li>
                <label>
                  Rating not less than:
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={rating}
                    placeholder="Enter number from 0 to 10"
                    onChange={handleRatingChange}
                  />
                </label>
              </li>
            </>
          )}
        </ul>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Oops... Something went wrong!</span>}
        {gallery && <Gallery movies={gallery} location={location} />}
      </Container>
    </section>
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
