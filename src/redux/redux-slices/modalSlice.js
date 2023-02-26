import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    toggle(state) {
      return !state;
    },
    close(state) {
      return (state = false);
    },
  },
});

export const { toggle, close } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
