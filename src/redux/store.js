import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { userExtraDataReducer } from './userExtraDataSlice';
import { modalReducer } from './modalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userExtraData: userExtraDataReducer,
    modal: modalReducer,
  },
});
