import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  normalizeGallery,
  normalizePicGallery,
  getQueryByParams,
  getHomePageGalleryTypeQuery,
  getHomePageGalleryCaption,
} from 'services';

const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_KEY = 'ae692f579055feb645577941bd67daeb';

export const getHomePageGallery = createAsyncThunk(
  'home/getHomePageGallery',
  async ({ galleryType, page }, thunkAPI) => {
    try {
      let pageString = '';
      if (galleryType !== 'trending') {
        pageString = `&page=${page}`;
      }

      const query = getHomePageGalleryTypeQuery(galleryType);
      const response = await axios.get(
        `${TMDB_BASE}/${query}?api_key=${TMDB_KEY}${pageString}`
      );
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      const totalPageNum = response.data.total_pages;
      const galleryCaption = getHomePageGalleryCaption(galleryType);
      return { normalizedGallery, galleryCaption, totalPageNum };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMoviesByParams = createAsyncThunk(
  'home/getMoviesByGenres',
  async ({ params, page }, thunkAPI) => {
    try {
      const queryString = getQueryByParams(params);
      const response = await axios.get(
        `${TMDB_BASE}/discover/movie?api_key=${TMDB_KEY}${queryString}&page=${page}`
      );
      const galleryCaption = 'Look What We Found!';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      const totalPageNum = response.data.total_pages;
      return { normalizedGallery, galleryCaption, totalPageNum };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMoviesByKeyword = createAsyncThunk(
  'movies/getMoviesByKeyword',
  async ({ query, page, galleryType }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/search/movie?api_key=${TMDB_KEY}&query=${query}&page=${page}`
      );
      const galleryCaption = 'Look What We Found!';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      return { normalizedGallery, galleryCaption, galleryType, query };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecommendedMovies = createAsyncThunk(
  'movies/getRecommendedMovies',
  async ({ id, page, galleryType }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}/recommendations?api_key=${TMDB_KEY}&page=${page}`
      );
      const galleryCaption = 'Recommended Movies';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      return { normalizedGallery, galleryCaption, galleryType, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSimilarMovies = createAsyncThunk(
  'movies/getSimilarMovies',
  async ({ id, page, galleryType }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}/similar?api_key=${TMDB_KEY}&page=${page}`
      );
      const galleryCaption = 'Similar Movies';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      return { normalizedGallery, galleryCaption, galleryType, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMovieById = createAsyncThunk(
  'movies/getMovieById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}?api_key=${TMDB_KEY}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCreditsById = createAsyncThunk(
  'movies/getCreditsById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}/credits?api_key=${TMDB_KEY}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getReviewsById = createAsyncThunk(
  'movies/getReviewsById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}/reviews?api_key=${TMDB_KEY}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPicturesById = createAsyncThunk(
  'info/getPicturesById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}/images?api_key=${TMDB_KEY}`
      );
      return normalizePicGallery(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
