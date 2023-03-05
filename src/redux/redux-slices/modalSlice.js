import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { isModalOpen: false, isPicBoardOpen: false },
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
  },
});

export const { openModal, closeModal, openPicBoard, closePicBoard } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
