import axios from 'axios';

const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_KEY = 'ae692f579055feb645577941bd67daeb';

export async function fetchMovieById(id) {
  const response = await axios.get(
    `${TMDB_BASE}/movie/${id}?api_key=${TMDB_KEY}`
  );
  return response.data;
}

export async function fetchVideosById(id) {
  const response = await axios.get(
    `${TMDB_BASE}/movie/${id}/videos?api_key=${TMDB_KEY}`
  );
  return response.data;
}

export async function fetchCreditsById(id) {
  const response = await axios.get(
    `${TMDB_BASE}/movie/${id}/credits?api_key=${TMDB_KEY}`
  );
  return response.data;
}

export async function fetchReviewsById(id) {
  const response = await axios.get(
    `${TMDB_BASE}/movie/${id}/reviews?api_key=${TMDB_KEY}`
  );
  return response.data;
}

export async function fetchLatestMovie() {
  const response = await axios.get(
    `${TMDB_BASE}/movie/latest?api_key=${TMDB_KEY}`
  );
  const { adult } = response.data;
  return adult ? null : response.data;
}
