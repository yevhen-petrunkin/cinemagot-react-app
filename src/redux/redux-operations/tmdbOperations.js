import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { normalizeGallery } from 'services/normalize';
import {
  getHomePageGalleryTypeQuery,
  getHomePageGalleryCaption,
  getQueryByParams,
} from 'services/services';

const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_KEY = 'ae692f579055feb645577941bd67daeb';

export const getHomePageGallery = createAsyncThunk(
  'movies/getHomePageGallery',
  async (type, thunkAPI) => {
    try {
      const query = getHomePageGalleryTypeQuery(type);
      const response = await axios.get(
        `${TMDB_BASE}/${query}?api_key=${TMDB_KEY}`
      );
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      const galleryCaption = getHomePageGalleryCaption(type);
      return { normalizedGallery, galleryCaption };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMoviesByParams = createAsyncThunk(
  'movies/getMoviesByGenres',
  async (params, thunkAPI) => {
    try {
      const queryString = getQueryByParams(params);
      const response = await axios.get(
        `${TMDB_BASE}/discover/movie?api_key=${TMDB_KEY}${queryString}`
      );
      const galleryCaption = 'Look What We Found!';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      return { normalizedGallery, galleryCaption };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMoviesByKeyword = createAsyncThunk(
  'movies/getMoviesByKeyword',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/search/movie?api_key=${TMDB_KEY}&query=${query}`
      );
      const galleryCaption = 'Look What We Found!';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      return { normalizedGallery, galleryCaption };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecommendedMovies = createAsyncThunk(
  'movies/getRecommendedMovies',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}/recommendations?api_key=${TMDB_KEY}`
      );
      const galleryCaption = 'Recommended Movies';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      return { normalizedGallery, galleryCaption };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSimilarMovies = createAsyncThunk(
  'movies/getSimilarMovies',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${TMDB_BASE}/movie/${id}/similar?api_key=${TMDB_KEY}`
      );
      const galleryCaption = 'Similar Movies';
      const gallery = response.data.results;
      const normalizedGallery = await normalizeGallery(gallery);
      return { normalizedGallery, galleryCaption };
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
