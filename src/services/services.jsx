import { getAuth, updateProfile } from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from '../firebase';
import axios from 'axios';
import { homePageGalleryQuerySource } from './sources/homePageGalleryQuerySource';

const auth = getAuth();

const PICTURE_BASE = 'https://image.tmdb.org/t/p/w500';
const VIDEO_BASE = 'https://www.youtube.com/embed';

const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_KEY = 'ae692f579055feb645577941bd67daeb';

const BING_BASE = 'https://bing-news-search1.p.rapidapi.com/news';
const BING_KEY = 'b81ea506bamsha8db9f041608be3p1db9e4jsn27df579a154b';

export async function fetchVideosById(id) {
  const response = await axios.get(
    `${TMDB_BASE}/movie/${id}/videos?api_key=${TMDB_KEY}`
  );
  return response.data;
}

export async function updateUserPhoto(url) {
  updateProfile(auth.currentUser, {
    photoURL: url,
  });
}

export async function fetchNewsData() {
  const options = {
    method: 'GET',
    url: BING_BASE,
    params: {
      category: 'Entertainment',
      mkt: 'en-US',
      safeSearch: 'Off',
      textFormat: 'Raw',
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': BING_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    },
  };
  const response = await axios.request(options);
  return response.data.value;
}

export async function fetchMovieById(id) {
  const response = await axios.get(
    `${TMDB_BASE}/movie/${id}?api_key=${TMDB_KEY}`
  );
  return response.data;
}

export async function fetchLatestMovie() {
  const response = await axios.get(
    `${TMDB_BASE}/movie/latest?api_key=${TMDB_KEY}`
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

export function getPictureAddress(param) {
  return param ? `${PICTURE_BASE}${param}` : '';
}

export function getVideoAddress(param, number) {
  return param ? `${VIDEO_BASE}/${param}?autoplay=${number}` : '';
}

export function getStartingVideo(videos) {
  if (!videos) {
    return;
  }
  const filteredVideos = videos.filter(
    ({ type }) => type.toLowerCase() === 'trailer'
  );
  return filteredVideos[0];
}

export function createUserLists(sourceArr, id) {
  const userListObj = sourceArr.reduce(
    (aggr, { listId }) => ({ ...aggr, [listId]: [] }),
    {}
  );
  setDoc(doc(db, 'userLists', id), userListObj);
}

export async function updateUserList(userListRef, list, movieObj) {
  const snapshot = await getDoc(userListRef);
  const existingList = (await snapshot.data()[list]) || [];
  const movieExists = await existingList.some(obj => obj.id === movieObj.id);

  if (movieExists) {
    return;
  }

  await updateDoc(userListRef, {
    [list]: arrayUnion(movieObj),
  });
  return movieObj;
}

export async function deleteFromUserList(userListRef, list, movieObj) {
  await updateDoc(userListRef, {
    [list]: arrayRemove(movieObj),
  });
}

export function getHomePageGalleryTypeQuery(type, number) {
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

export function getMovieIdByPage(id, page) {
  switch (page) {
    case 'home':
      return 'movies/' + id.toString();
    case 'movies':
      return id.toString();
    default:
      return;
  }
}
