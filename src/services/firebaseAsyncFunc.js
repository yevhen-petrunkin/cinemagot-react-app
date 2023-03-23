import { getAuth, updateProfile } from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from '../firebase';
const auth = getAuth();

export async function createUserLists(sourceArr, id) {
  const userListObj = sourceArr.reduce(
    (aggr, { listId }) => ({ ...aggr, [listId]: [] }),
    {}
  );
  await setDoc(doc(db, 'userLists', id), userListObj);
}

export async function updateUserList(userListRef, list, movieObj) {
  const snapshot = await getDoc(userListRef);
  const existingList = (await snapshot.data()[list]) || [];
  const movieExists = await existingList.some(obj => obj.id === movieObj.id);

  if (movieExists) {
    return;
  }

  await updateDoc(userListRef, {
    [list]: arrayUnion(movieObj),
  });
  return movieObj;
}

export async function updateUserPhoto(url) {
  updateProfile(auth.currentUser, {
    photoURL: url,
  });
}

export async function deleteFromUserList(userListRef, list, movieObj) {
  await updateDoc(userListRef, {
    [list]: arrayRemove(movieObj),
  });
}
