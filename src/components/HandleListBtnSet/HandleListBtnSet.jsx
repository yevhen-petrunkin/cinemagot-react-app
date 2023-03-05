import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { userListBtnSetSource } from 'services/sources/btnSetSource';
import { db } from '../../firebase';
import { doc } from '@firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { updateUserList } from 'services/services';

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
      onSuccess: () => {
        console.log('Movie added to the list successfully');
      },
      onError: () => {
        console.log('Error adding movie to the list');
      },
    }
  );

  const handleAddToUserListBtnClick = list => {
    updateListMutation.mutate(list);
  };

  return (
    <div>
      {userListBtnSetSource.map(({ listId, text }) => (
        <button
          key={listId}
          type="button"
          onClick={() => handleAddToUserListBtnClick(listId)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default HandleListBtnSet;
