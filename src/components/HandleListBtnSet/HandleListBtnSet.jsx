import { BtnSet, Btn, BtnText } from './HandleListBtnSet.styled';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { userListBtnSetSource } from 'services/sources/btnSetSource';
import { messageData } from 'services/sources/messageDataSource';
import { useMedia } from 'services/media/useMedia';
import { db } from '../../firebase';
import { doc } from '@firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { updateUserList } from 'services';

import { RxBookmark, RxCheckCircled, RxStar } from 'react-icons/rx';
import { toast } from 'react-toastify';

const {
  alreadyOnTheListMessage,
  movieAddedToListMessage,
  errorAddingMovieToListMessage,
  notAllowedToAddMovieToListMessage,
} = messageData;

const notifyOnAdded = () => toast.success(movieAddedToListMessage);
const notifyOnExist = () => toast.warning(alreadyOnTheListMessage);
const notifyToSubscribe = () => toast.info(notAllowedToAddMovieToListMessage);
const notifyOnError = () => toast.error(errorAddingMovieToListMessage);

function HandleListBtnSet({ movieData }) {
  const { isTiny, isSmall } = useMedia();

  const user = useSelector(selectUser);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const seenAlready = sessionStorage.getItem('subscribeMsg');
    if (!user && !seenAlready) {
      notifyToSubscribe();
      sessionStorage.setItem('subscribeMsg', 'true');
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setUserId(user.userId);
    }
  }, [user]);

  const updateListMutation = useMutation(
    list => {
      const userListRef = doc(db, 'userLists', userId);
      return updateUserList(userListRef, list, movieData);
    },
    {
      onSuccess: data => {
        const movieAdded = data !== undefined;
        if (!movieAdded) {
          notifyOnExist();
        } else {
          notifyOnAdded();
        }
      },
      onError: notifyOnError,
    }
  );

  const handleAddToUserListBtnClick = list => {
    updateListMutation.mutate(list);
  };

  return (
    <BtnSet>
      {userListBtnSetSource.map(({ listId, text, icon }) => {
        let IconComponent;

        switch (icon) {
          case 'RxStar':
            IconComponent = RxStar;
            break;
          case 'RxBookmark':
            IconComponent = RxBookmark;
            break;
          case 'RxCheckCircled':
            IconComponent = RxCheckCircled;
            break;
          default:
            IconComponent = null;
        }

        return (
          <Btn
            key={listId}
            title={text}
            type="button"
            onClick={() => handleAddToUserListBtnClick(listId)}
            disabled={!user}
          >
            <IconComponent />
            {!isTiny && !isSmall && <BtnText>{text}</BtnText>}
          </Btn>
        );
      })}
    </BtnSet>
  );
}

export default HandleListBtnSet;

HandleListBtnSet.propTypes = {
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
