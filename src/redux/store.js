import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './redux-slices/authSlice';
import { userExtraDataReducer } from './redux-slices/userExtraDataSlice';
import { modalReducer } from './redux-slices/modalSlice';
import { galleryReducer } from './redux-slices/gallerySlice';
import { userListreducer } from './redux-slices/userListSlice';
import { themeReducer } from './redux-slices/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userExtraData: userExtraDataReducer,
    gallery: galleryReducer,
    userList: userListreducer,
    modal: modalReducer,
    theme: themeReducer,
  },
});
