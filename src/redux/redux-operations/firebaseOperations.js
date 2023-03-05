import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { normalizeUserData, normalizeUserExtraData } from 'services/normalize';
import { createUserLists } from 'services/services';
import { userListBtnSetSource } from 'services/sources/btnSetSource';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      delete data.password;
      await updateProfile(res.user, {
        displayName: data.username,
      });
      await setDoc(doc(db, 'users', res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      createUserLists(userListBtnSetSource, res.user.uid);
      const normalizedUserData = normalizeUserData(res.user);
      return normalizedUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const normalizedUserData = normalizeUserData(user);
      return normalizedUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchUserExtraData = createAsyncThunk(
  'userExtraData/fetchUserExtraData',
  async (userId, thunkAPI) => {
    try {
      const docRef = doc(db, 'users', userId);
      const docSnapshot = await getDoc(docRef);
      const userExtraData = docSnapshot.data();
      const normalizedUserExtraData = normalizeUserExtraData(userExtraData);
      return normalizedUserExtraData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
