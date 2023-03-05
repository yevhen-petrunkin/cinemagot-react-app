import { deleteFromUserList } from 'services/services';
import { db } from '../../firebase';
import { doc } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {
  getRecommendedMovies,
  getSimilarMovies,
} from 'redux/redux-operations/tmdbOperations';
import { useDispatch, useSelector } from 'react-redux';
import { openPicBoard } from 'redux/redux-slices/modalSlice';
import { selectPicBoard } from 'redux/selectors';
import PicBoard from 'components/PicBoard/PicBoard';

function UserGalleryBtnSet({ movieData }) {
  const { list, movie, userId } = movieData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isPicBoardOpen = useSelector(selectPicBoard);

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
        dispatch(getRecommendedMovies(movie.id));
        break;
      case 'similar':
        dispatch(getSimilarMovies(movie.id));
        break;
      default:
        return;
    }
    navigate('/movies');
  };

  const handlePicBoardBtnClick = e => {
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
      {isPicBoardOpen && <PicBoard />}
    </div>
  );
}

export default UserGalleryBtnSet;
