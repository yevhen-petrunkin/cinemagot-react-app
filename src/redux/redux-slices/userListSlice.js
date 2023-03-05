import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userListObj: null,
  loading: false,
  error: null,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    clearUserLists(state) {
      state.userListObj = null;
      state.loading = false;
      state.error = null;
    },
    fetchUserLists(state, action) {
      state.userListObj = action.payload;
    },
  },
});

export const { clearUserLists, fetchUserLists } = userListSlice.actions;

export const userListreducer = userListSlice.reducer;
