import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: { additionalData: {} },
  reducers: {
    getUserData(state, action) {
      return { ...state, ...action.payload };
    },
    getAdditionalUserData(state, action) {
      state.additionalData = {
        ...state.additionalData,
        ...action.payload,
      };
    },
  },
});

export const { getUserData, getAdditionalUserData } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
