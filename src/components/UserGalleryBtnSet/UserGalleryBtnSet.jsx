import { BtnSet, Btn, BtnText } from './UserGalleryBtnSet.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPicBoard } from 'redux/selectors';
import { openPicBoard } from 'redux/redux-slices/modalSlice';
import {
  getRecommendedMovies,
  getSimilarMovies,
  getPicturesById,
} from 'redux/redux-operations/tmdbOperations';

import PicBoard from 'components/PicBoard';
import PictureGallery from 'components/PictureGallery';
import { MdOutlineRecommend } from 'react-icons/md';
import { TiEqualsOutline } from 'react-icons/ti';
import { AiOutlinePicture } from 'react-icons/ai';

function UserGalleryBtnSet({ movieData }) {
  const movieId = movieData.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isPicBoardOpen = useSelector(selectPicBoard);

  const isTouchDevice = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

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

  useEffect(() => {
    const body = document.querySelector('body');

    if (isPicBoardOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [isPicBoardOpen]);

  const handleUserGalleryBtnClick = evt => {
    let queryData = null;
    switch (evt.currentTarget.id) {
      case 'recommend':
        queryData = { id: movieId, page: 1, galleryType: 'recommend' };
        dispatch(getRecommendedMovies(queryData));
        break;
      case 'similar':
        queryData = { id: movieId, page: 1, galleryType: 'similar' };
        dispatch(getSimilarMovies(queryData));
        break;
      default:
        return;
    }
    navigate('/movies');
  };

  const handlePicBoardBtnClick = () => {
    dispatch(getPicturesById(movieId));
    dispatch(openPicBoard());
  };

  return (
    <BtnSet>
      <Btn type="button" id="recommend" onClick={handleUserGalleryBtnClick}>
        <MdOutlineRecommend />
        <BtnText>Recommended</BtnText>
      </Btn>
      <Btn type="button" id="similar" onClick={handleUserGalleryBtnClick}>
        <TiEqualsOutline />
        <BtnText>Similar</BtnText>
      </Btn>
      <Btn type="button" onClick={handlePicBoardBtnClick}>
        <AiOutlinePicture />
        <BtnText>Posters</BtnText>
      </Btn>
      {isPicBoardOpen && (
        <PicBoard>
          <PictureGallery />
        </PicBoard>
      )}
    </BtnSet>
  );
}

export default UserGalleryBtnSet;

UserGalleryBtnSet.propTypes = {
  movieData: PropTypes.shape({
    id: PropTypes.number,
    specificId: PropTypes.string,
    title: PropTypes.string,
    origTitle: PropTypes.string,
    slogan: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    adult: PropTypes.bool,
    poster: PropTypes.string,
    video: PropTypes.bool,
    date: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    companies: PropTypes.array,
    popularity: PropTypes.number,
    score: PropTypes.number,
    voteCount: PropTypes.number,
  }).isRequired,
};
