import { createSlice } from '@reduxjs/toolkit';
import {
  getHomePageGallery,
  getMoviesByKeyword,
  getMoviesByParams,
} from 'redux/redux-operations/tmdbOperations';

const initialState = {
  gallery: null,
  caption: null,
  loading: false,
  error: null,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getHomePageGallery.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHomePageGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = action.payload.normalizedGallery;
        state.caption = action.payload.galleryCaption;
        state.error = null;
      })
      .addCase(getHomePageGallery.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(getMoviesByKeyword.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMoviesByKeyword.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = action.payload.normalizedGallery;
        state.caption = action.payload.galleryCaption;
        state.error = null;
      })
      .addCase(getMoviesByKeyword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMoviesByParams.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMoviesByParams.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = action.payload.normalizedGallery;
        state.caption = action.payload.galleryCaption;
        state.error = null;
      })
      .addCase(getMoviesByParams.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload;
      });
  },
});

export const galleryReducer = gallerySlice.reducer;
