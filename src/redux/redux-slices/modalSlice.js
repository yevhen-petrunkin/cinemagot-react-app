import { createSlice } from '@reduxjs/toolkit';
import { getPicturesById } from 'redux/redux-operations/tmdbOperations';

const initialState = {
  isModalOpen: false,
  isPicBoardOpen: false,
  pictures: null,
  loading: false,
  error: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    openPicBoard(state) {
      state.isPicBoardOpen = true;
    },
    closePicBoard(state) {
      state.isPicBoardOpen = false;
    },
    clearPictures(state) {
      state.pictures = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPicturesById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPicturesById.fulfilled, (state, action) => {
        state.loading = false;
        state.pictures = action.payload;
        state.error = null;
      })
      .addCase(getPicturesById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  openModal,
  closeModal,
  openPicBoard,
  closePicBoard,
  clearPictures,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
