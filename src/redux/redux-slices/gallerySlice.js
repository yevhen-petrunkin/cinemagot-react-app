import { createSlice } from '@reduxjs/toolkit';
import { defaultValueObjectSource } from 'services/sources/defauldValueObjectSource';
import {
  getHomePageGallery,
  getMoviesByKeyword,
  getMoviesByParams,
  getRecommendedMovies,
  getSimilarMovies,
} from 'redux/redux-operations/tmdbOperations';

const initialState = {
  gallery: null,
  caption: null,
  loading: false,
  error: null,
  galleryType: 'trending',
  params: {},
  valueObject: defaultValueObjectSource,
  rating: '',
  index: 0,
  isMousewheel: false,
  isOpenGallery: false,
  openGalleryRef: null,
  page: 1,
  totalPageNum: 1,
  query: '',
  movieId: '',
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setGalleryType: (state, action) => {
      state.galleryType = action.payload;
    },
    setParams: (state, action) => {
      state.params = action.payload;
    },
    setValueObject: (state, action) => {
      state.valueObject = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setMousewheel: (state, action) => {
      state.isMousewheel = action.payload;
    },
    setOpenGallery: (state, action) => {
      state.isOpenGallery = action.payload;
    },
    setOpenGalleryRef: (state, action) => {
      state.openGalleryRef = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
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
        state.totalPageNum = action.payload.totalPageNum;
        state.error = null;
      })
      .addCase(getHomePageGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMoviesByKeyword.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMoviesByKeyword.fulfilled, (state, action) => {
        state.loading = false;
        state.query = action.payload.query;
        state.galleryType = action.payload.galleryType;
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
        state.totalPageNum = action.payload.totalPageNum;
        state.error = null;
      })
      .addCase(getMoviesByParams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRecommendedMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecommendedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movieId = action.payload.id;
        state.galleryType = action.payload.galleryType;
        state.gallery = action.payload.normalizedGallery;
        state.caption = action.payload.galleryCaption;
        state.error = null;
      })
      .addCase(getRecommendedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSimilarMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSimilarMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movieId = action.payload.id;
        state.galleryType = action.payload.galleryType;
        state.gallery = action.payload.normalizedGallery;
        state.caption = action.payload.galleryCaption;
        state.error = null;
      })
      .addCase(getSimilarMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setGalleryType,
  setParams,
  setValueObject,
  setRating,
  setLowerDate,
  setGreaterDate,
  setIndex,
  setMousewheel,
  setOpenGallery,
  setOpenGalleryRef,
  setPage,
} = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
