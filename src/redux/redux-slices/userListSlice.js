import { createSlice } from '@reduxjs/toolkit';
import { fetchUserLists } from 'redux/redux-operations/firebaseOperations';

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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserLists.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserLists.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.userListObj = action.payload;
        state.error = null;
      })
      .addCase(fetchUserLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUserLists } = userListSlice.actions;

export const userListreducer = userListSlice.reducer;
