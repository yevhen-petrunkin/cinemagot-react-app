import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const BASE = 'https://api.themoviedb.org/3';
const PICTURE_BASE = 'https://image.tmdb.org/t/p/w500';
const TMDB_KEY = 'ae692f579055feb645577941bd67daeb';

export async function getTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE}/trending/movie/day?api_key=${TMDB_KEY}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMoviesByKeyword(query) {
  try {
    const response = await fetch(
      `${BASE}/search/movie?api_key=${TMDB_KEY}&query=${query}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieById(id) {
  try {
    const response = await fetch(`${BASE}/movie/${id}?api_key=${TMDB_KEY}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCreditsById(id) {
  try {
    const response = await fetch(
      `${BASE}/movie/${id}/credits?api_key=${TMDB_KEY}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getReviewsById(id) {
  try {
    const response = await fetch(
      `${BASE}/movie/${id}/reviews?api_key=${TMDB_KEY}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function getPictureAddress(param) {
  return param ? `${PICTURE_BASE}${param}` : '';
}

export function createPrivateLists(sourceArray, id) {
  sourceArray.forEach(source => setDoc(doc(db, source, id), {}));
}
