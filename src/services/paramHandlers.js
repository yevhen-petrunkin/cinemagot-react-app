const PICTURE_BASE = 'https://image.tmdb.org/t/p/w500';
const VIDEO_BASE = 'https://www.youtube.com/embed';

export function getPictureAddress(param) {
  return param ? `${PICTURE_BASE}${param}` : '';
}

export function getVideoAddress(param, number) {
  return param ? `${VIDEO_BASE}/${param}?autoplay=${number}` : '';
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
