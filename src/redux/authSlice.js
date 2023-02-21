import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    getUserId(state, action) {
      return action.payload;
    },
  },
});

export const { getUserId } = authSlice.actions;
export const authReducer = authSlice.reducer;
