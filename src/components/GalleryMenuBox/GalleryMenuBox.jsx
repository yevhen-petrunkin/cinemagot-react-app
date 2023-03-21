import {
  HomeCaption,
  MenuBox,
  MenuCtrlSet,
  Menu,
  MenuItem,
  Label,
  Input,
} from './GalleryMenuBox.styled';
import { useTheme } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGalleryCaption,
  selectGalleryType,
  selectValueObject,
  selectParams,
  selectRating,
  selectIndex,
  selectUser,
  selectMousewheel,
  selectOpenGallery,
  selectPage,
} from 'redux/selectors';
import {
  setGalleryType,
  setParams,
  setValueObject,
  setRating,
  setIndex,
  setMousewheel,
  setOpenGallery,
  setOpenGalleryRef,
  setPage,
} from 'redux/redux-slices/gallerySlice';
import {
  getHomePageGallery,
  getMoviesByParams,
} from 'redux/redux-operations/tmdbOperations';
import 'react-datepicker/dist/react-datepicker.css';
import { defaultValueObjectSource } from 'services/sources/defauldValueObjectSource';
import { normalizeDate } from 'services/normalize';

import GalleryMenu from 'components/GalleryMenuBox/GalleryMenu';
import GallerySelectMenu from 'components/GalleryMenuBox/GallerySelectMenu';
import GalleryDatePickerMenu from 'components/GalleryMenuBox/GalleryDatePickerMenu';
import IconButton from 'components/IconButton/IconButton';
import {
  TfiControlForward,
  TfiControlPause,
  TfiAngleDown,
  TfiAngleUp,
} from 'react-icons/tfi';

function GalleryMenuBox() {
  const caption = useSelector(selectGalleryCaption);
  const galleryType = useSelector(selectGalleryType);
  const params = useSelector(selectParams);
  const valueObject = useSelector(selectValueObject);
  const rating = useSelector(selectRating);
  const index = useSelector(selectIndex);
  const mousewheel = useSelector(selectMousewheel);
  const openGallery = useSelector(selectOpenGallery);
  const page = useSelector(selectPage);
  const isUserAuth = useSelector(selectUser);

  const { colors } = useTheme();
  const dispatch = useDispatch();

  const openGalleryRef = useRef(null);

  const [lowerDate, setLowerDate] = useState(null);
  const [greaterDate, setGreaterDate] = useState(null);

  useEffect(() => {
    const keys = Object.keys(params);
    if (keys.length) {
      dispatch(getMoviesByParams({ params, page }));
    } else {
      dispatch(getHomePageGallery({ galleryType, page }));
    }
  }, [dispatch, galleryType, params, page]);

  const resetParams = () => {
    dispatch(setPage(1));
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
    dispatch(setPage(1));
    dispatch(setValueObject({ ...valueObject, genres: e }));
    dispatch(setParams({ ...params, genres: e }));
  };

  const handleNonMultiSelect = (e, objValue) => {
    dispatch(setPage(1));
    dispatch(setValueObject({ ...valueObject, [objValue]: e }));
    dispatch(setParams({ ...params, [objValue]: e.value }));
  };

  const handleRatingChange = e => {
    dispatch(setPage(1));
    dispatch(setRating(e.target.value));
    dispatch(setParams({ ...params, voteAverage: e.target.value }));
  };

  const handleLowerDateChange = date => {
    dispatch(setPage(1));
    setLowerDate(date);
    const normalizedDate = normalizeDate(date);
    dispatch(setParams({ ...params, lowerDate: normalizedDate }));
  };

  const handleGreaterDateChange = date => {
    dispatch(setPage(1));
    setGreaterDate(date);
    const normalizedDate = normalizeDate(date);
    dispatch(setParams({ ...params, greaterDate: normalizedDate }));
  };

  const handleToggleMousewheel = () => {
    dispatch(setMousewheel(!mousewheel));
    if (!mousewheel) {
      dispatch(setIndex(1));
    }
  };

  const scrollDownToOpenGallery = () => {
    dispatch(setOpenGallery(!openGallery));
    setTimeout(() => {
      dispatch(setOpenGalleryRef(openGalleryRef));
    }, 100);
  };

  return (
    <MenuBox isActive={index > 0}>
      <MenuCtrlSet>
        {mousewheel ? (
          <IconButton
            title="Disable mouse-scroll"
            type="button"
            width={36}
            height={36}
            bgcolor={colors.alert}
            onClick={handleToggleMousewheel}
          >
            <TfiControlPause style={{ width: '100%', height: '100%' }} />
          </IconButton>
        ) : (
          <IconButton
            title="Enable mouse-scroll"
            type="button"
            width={36}
            height={36}
            bgcolor={colors.accent}
            onClick={handleToggleMousewheel}
          >
            <TfiControlForward style={{ width: '100%', height: '100%' }} />
          </IconButton>
        )}

        {openGallery ? (
          <IconButton
            title="Fold up gallery"
            type="button"
            width={36}
            height={36}
            bgcolor={colors.alert}
            onClick={scrollDownToOpenGallery}
          >
            <TfiAngleUp style={{ width: '100%', height: '100%' }} />
          </IconButton>
        ) : (
          <IconButton
            title="Unfold gallery"
            type="button"
            width={36}
            height={36}
            bgcolor={colors.accent}
            onClick={scrollDownToOpenGallery}
          >
            <TfiAngleDown style={{ width: '100%', height: '100%' }} />
          </IconButton>
        )}
      </MenuCtrlSet>
      <HomeCaption>{caption || 'CINEMAGOT'}</HomeCaption>
      <Menu>
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
            <MenuItem>
              <Label>
                Rating not less than:
                <Input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value={rating}
                  placeholder="0 to 10"
                  onChange={handleRatingChange}
                />
              </Label>
            </MenuItem>
          </>
        )}
      </Menu>
    </MenuBox>
  );
}

export default GalleryMenuBox;
