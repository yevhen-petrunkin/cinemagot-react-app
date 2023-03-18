import { BtnSet, Btn, BtnText } from './HandleListBtnSet.styled';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { userListBtnSetSource } from 'services/sources/btnSetSource';
import { messageData } from 'services/sources/messageDataSource';
import { db } from '../../firebase';
import { doc } from '@firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { updateUserList } from 'services/services';
import { RxBookmark, RxCheckCircled, RxStar } from 'react-icons/rx';

const {
  alreadyOnTheListMessage,
  movieAddedToListMessage,
  errorAddingMovieToListMessage,
} = messageData;

function HandleListBtnSet({ movieData }) {
  const user = useSelector(selectUser);
  const [userId, setUserId] = useState('');

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
          console.log(alreadyOnTheListMessage);
        } else {
          console.log(movieAddedToListMessage);
        }
      },
      onError: () => {
        console.log(errorAddingMovieToListMessage);
      },
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
            type="button"
            onClick={() => handleAddToUserListBtnClick(listId)}
          >
            <IconComponent />
            <BtnText>{text}</BtnText>
          </Btn>
        );
      })}
    </BtnSet>
  );
}

export default HandleListBtnSet;
