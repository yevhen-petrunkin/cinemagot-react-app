import { configureStore } from '@reduxjs/toolkit';
import { userDataReducer } from './userDataSlice';
import { modalReducer } from './modalSlice';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    modal: modalReducer,
  },
});
