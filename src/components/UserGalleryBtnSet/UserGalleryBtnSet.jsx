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
import { db } from '../../firebase';
import { doc } from '@firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { deleteFromUserList } from 'services/services';

import PicBoard from 'components/PicBoard';
import PictureGallery from 'components/PictureGallery';

function UserGalleryBtnSet({ movieData }) {
  const { list, movie, userId } = movieData;
  const movieId = movie.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isPicBoardOpen = useSelector(selectPicBoard);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isPicBoardOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [isPicBoardOpen]);

  const deleteFromListMutation = useMutation(
    ({ list, movie }) => {
      const userListRef = doc(db, 'userLists', userId);
      return deleteFromUserList(userListRef, list, movie);
    },
    {
      onSuccess: () => {
        console.log('Movie removed from the list successfully');
      },
      onError: () => {
        console.log('Error removing movie from the list');
      },
    }
  );

  const handleDeleteFromUserListBtnClick = (list, movie) => {
    const movieObj = { list, movie };
    deleteFromListMutation.mutate(movieObj);
  };

  const handleUserGalleryBtnClick = evt => {
    switch (evt.target.id) {
      case 'recommend':
        dispatch(getRecommendedMovies(movieId));
        break;
      case 'similar':
        dispatch(getSimilarMovies(movieId));
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
    <div>
      <button
        type="button"
        onClick={() => handleDeleteFromUserListBtnClick(list.userList, movie)}
      >
        Delete from {list.content}
      </button>
      <button type="button" id="recommend" onClick={handleUserGalleryBtnClick}>
        Recommendations
      </button>
      <button type="button" id="similar" onClick={handleUserGalleryBtnClick}>
        Similar
      </button>
      <button type="button" onClick={handlePicBoardBtnClick}>
        See Pics
      </button>
      {isPicBoardOpen && (
        <PicBoard>
          <PictureGallery />
        </PicBoard>
      )}
    </div>
  );
}

export default UserGalleryBtnSet;
