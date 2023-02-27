import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { homePageGalleryQuerySource } from './sources/homePageGalleryQuerySource';
const PICTURE_BASE = 'https://image.tmdb.org/t/p/w500';

const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_KEY = 'ae692f579055feb645577941bd67daeb';

export async function getMovieById(id) {
  try {
    const response = await fetch(
      `${TMDB_BASE}/movie/${id}?api_key=${TMDB_KEY}`
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

export async function getCreditsById(id) {
  try {
    const response = await fetch(
      `${TMDB_BASE}/movie/${id}/credits?api_key=${TMDB_KEY}`
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
      `${TMDB_BASE}/movie/${id}/reviews?api_key=${TMDB_KEY}`
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

export function getHomePageGalleryTypeQuery(type) {
  const {
    trendingMoviesQuery,
    currentMoviesQuery,
    popularMoviesQuery,
    topMoviesQuery,
  } = homePageGalleryQuerySource;
  switch (type) {
    case 'trending':
      return trendingMoviesQuery;
    case 'current':
      return currentMoviesQuery;
    case 'popular':
      return popularMoviesQuery;
    case 'top':
      return topMoviesQuery;
    default:
      return;
  }
}

export function getHomePageGalleryCaption(type) {
  const {
    trendingMoviesCaption,
    currentMoviesCaption,
    popularMoviesCaption,
    topMoviesCaption,
  } = homePageGalleryQuerySource;
  switch (type) {
    case 'trending':
      return trendingMoviesCaption;
    case 'current':
      return currentMoviesCaption;
    case 'popular':
      return popularMoviesCaption;
    case 'top':
      return topMoviesCaption;
    default:
      return;
  }
}

export function getQueryByParams(params) {
  const keyArr = Object.keys(params);
  if (!keyArr.length) {
    return '';
  }
  const genresString = getGenresString(keyArr);
  const language = getLanguageString(keyArr);
  const year = getYearString(keyArr);
  const greaterDate = getGreaterDateString(keyArr);
  const lowerDate = getLowerDateString(keyArr);
  const voteAve = getVoteAverageString(keyArr);
  const queryString =
    genresString + language + year + greaterDate + lowerDate + voteAve;

  console.log(queryString);

  return queryString;

  function getGenresString(keys) {
    let string = '';
    if (!keys.includes('genres')) {
      string = '';
    } else {
      if (!params.genres.length) {
        string = '';
      } else {
        string = `&with_genres=${params.genres
          .map(genre => genre.value)
          .join(',')}`;
      }
    }
    return string;
  }

  function getLanguageString(keys) {
    let string = '';
    if (!keys.includes('language')) {
      string = '';
    } else {
      if (params.language === '') {
        string = '';
      } else {
        string = `&with_original_language=${params.language}`;
      }
    }
    return string;
  }

  function getYearString(keys) {
    let string = '';
    if (!keys.includes('year')) {
      string = '';
    } else {
      if (params.year === '') {
        string = '';
      } else {
        string = `&primary_release_year=${params.year}`;
      }
    }
    return string;
  }

  function getGreaterDateString(keys) {
    let string = '';
    if (!keys.includes('greaterDate')) {
      string = '';
    } else {
      if (!params.greaterDate) {
        string = '';
      } else {
        string = `&release_date.gte=${params.greaterDate}`;
      }
    }
    return string;
  }

  function getLowerDateString(keys) {
    let string = '';
    if (!keys.includes('lowerDate')) {
      string = '';
    } else {
      if (!params.lowerDate) {
        string = '';
      } else {
        string = `&release_date.lte=${params.lowerDate}`;
      }
    }
    return string;
  }

  function getVoteAverageString(keys) {
    let string = '';
    if (!keys.includes('voteAverage')) {
      string = '';
    } else {
      if (params.voteAverage === '') {
        string = '';
      } else {
        string = `&vote_average.gte=${params.voteAverage}`;
      }
    }
    return string;
  }
}
