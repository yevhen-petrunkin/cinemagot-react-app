import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './redux-slices/authSlice';
import { userExtraDataReducer } from './redux-slices/userExtraDataSlice';
import { modalReducer } from './redux-slices/modalSlice';
import { galleryReducer } from './redux-slices/gallerySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userExtraData: userExtraDataReducer,
    gallery: galleryReducer,
    modal: modalReducer,
  },
});
