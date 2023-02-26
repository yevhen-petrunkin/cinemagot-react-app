import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGallery,
  selectGalleryCaption,
  selectGalleryLoading,
  selectGalleryError,
} from 'redux/selectors';
import {
  getHomePageGallery,
  getMoviesByParams,
} from 'redux/redux-operations/tmdbOperations';
import { homePageMenuSource } from 'services/sources/homePageMenuSource';
import { tmdbGenres } from 'services/sources/tmdbGenresSource';

import { HomeCaption } from './Home.styled';
import Select from 'react-select';
import Gallery from 'components/Gallery';

function Home() {
  const gallery = useSelector(selectGallery);
  const caption = useSelector(selectGalleryCaption);
  const isLoading = useSelector(selectGalleryLoading);
  const isError = useSelector(selectGalleryError);
  const dispatch = useDispatch();

  const location = useLocation();
  location.state = { page: 'home' };

  const [galleryType, setGalleryType] = useState('trending');
  const [params, setParams] = useState({});

  useEffect(() => {
    const keys = Object.keys(params);
    if (keys.length) {
      dispatch(getMoviesByParams(params));
    } else {
      dispatch(getHomePageGallery(galleryType ?? 'trending'));
    }
  }, [dispatch, galleryType, params]);

  const handleRadioBtnChange = e => {
    setParams({});
    setGalleryType(e.target.value);
  };

  const handleSelectGenreChange = e => {
    setParams(prev => {
      console.log(e);
      return { ...prev, genres: e };
    });
  };

  return (
    <section>
      <HomeCaption>{caption ?? 'CineMaGot'}</HomeCaption>
      <ul>
        {homePageMenuSource.map(({ id, label, value }) => (
          <li key={id}>
            <label style={{ display: 'block' }}>
              <input
                type="radio"
                name="galleryChoice"
                value={value}
                onChange={handleRadioBtnChange}
              />
              {label}
            </label>
          </li>
        ))}
      </ul>
      <Select
        options={tmdbGenres}
        isMulti={true}
        backspaceRemovesValue={true}
        hideSelectedOptions={true}
        isSearchable={true}
        onChange={handleSelectGenreChange}
      />
      {isLoading && <span>Loading...</span>}
      {isError && <span>Oops... Something went wrong!</span>}

      {gallery && <Gallery movies={gallery} location={location} />}
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
