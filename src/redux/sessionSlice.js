import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: { sessionId: null },
  reducers: {
    setSession: (state, action) => {
      state.sessionId = action.payload;
    },
    clearSession: state => {
      state.sessionId = null;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;

export const sessionReducer = sessionSlice.reducer;

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['sessionId'],
};

export const persistedSessionReducer = persistReducer(
  sessionPersistConfig,
  sessionReducer
);
