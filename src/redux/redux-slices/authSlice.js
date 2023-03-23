import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut } from '../redux-operations/firebaseOperations';
import { messageData } from 'services/sources/messageDataSource';
import { toast } from 'react-toastify';

const notifyOnSuccessfulSignUp = () =>
  toast.success(messageData.successfulSignUpMessage);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authLoadingMatcher = action => {
  return [signUp.pending, logIn.pending, logOut.pending].includes(action.type);
};

const authRejectedMatcher = action => {
  return [signUp.rejected, logIn.rejected, logOut.rejected].includes(
    action.type
  );
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchUserData(state, action) {
      state.user = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        notifyOnSuccessfulSignUp();
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addMatcher(authLoadingMatcher, state => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(authRejectedMatcher, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchUserData, clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
