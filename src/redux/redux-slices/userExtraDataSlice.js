import { createSlice } from '@reduxjs/toolkit';
import { fetchUserExtraData } from '../redux-operations/firebaseOperations';

const initialState = {
  extraUser: null,
  extraLoading: false,
  extraError: null,
};

export const userExtraDataSlice = createSlice({
  name: 'userExtraData',
  initialState,
  reducers: {
    clearUserExtraData(state) {
      state.extraLoading = false;
      state.extraUser = null;
      state.extraError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserExtraData.pending, state => {
        state.extraLoading = true;
        state.extraError = null;
      })
      .addCase(fetchUserExtraData.fulfilled, (state, action) => {
        state.extraLoading = false;
        state.extraUser = action.payload;
        state.extraError = null;
      })
      .addCase(fetchUserExtraData.rejected, (state, action) => {
        state.extraLoading = false;
        state.extraError = action.payload;
      });
  },
});

export const { clearUserExtraData } = userExtraDataSlice.actions;
export const userExtraDataReducer = userExtraDataSlice.reducer;
