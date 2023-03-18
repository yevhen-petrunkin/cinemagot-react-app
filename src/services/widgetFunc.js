import { tmdbGenreColors } from './sources/tmdbGenresSource';
import { userListBtnSetSource } from './sources/btnSetSource';

export function countTotalMoviesInOneList(obj, list) {
  if (!obj) {
    return 0;
  }

  return obj[list].length || 0;
}

export function countAllMoviesInUserLists(obj) {
  if (!obj) {
    return 0;
  }
  const favTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[0].listId
  );
  const watchTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[1].listId
  );
  const seenTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[2].listId
  );

  return favTotal + watchTotal + seenTotal;
}

export function countMoviesByUserList(obj) {
  if (!obj) {
    return [];
  }
  const favTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[0].listId
  );
  const watchTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[1].listId
  );
  const seenTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[2].listId
  );

  return userListBtnSetSource.map((item, index) => {
    return {
      list: item.caption,
      total: index === 0 ? favTotal : index === 1 ? watchTotal : seenTotal,
    };
  });
}

export function countTotalRuntime(obj) {
  if (!obj) {
    return 0;
  }
  const timeInHours =
    obj.seenList.reduce((acc, { runtime }) => (acc += Number(runtime)), 0) / 60;

  return timeInHours.toFixed(2);
}

export function countMeanBudget(obj) {
  if (!obj) {
    return 0;
  }
  const favTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[0].listId
  );
  const commonBudget = obj.favList.reduce(
    (acc, { budget }) => (acc += Number(budget)),
    0
  );

  const meanBudget = favTotal ? commonBudget / favTotal : 0;

  return meanBudget.toFixed(0);
}

export function countMeanPopularity(obj) {
  if (!obj) {
    return 0;
  }
  const favTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[0].listId
  );
  const commonPop = obj.favList.reduce(
    (acc, { popularity }) => (acc += Number(popularity)),
    0
  );

  const meanPop = favTotal ? commonPop / favTotal : 0;

  return meanPop.toFixed(2);
}

export function countMeanScore(obj) {
  if (!obj) {
    return 0;
  }
  const favTotal = countTotalMoviesInOneList(
    obj,
    userListBtnSetSource[0].listId
  );
  const commonScore = obj.favList.reduce(
    (acc, { score }) => (acc += Number(score)),
    0
  );

  const meanScore = favTotal ? commonScore / favTotal : 0;

  return meanScore.toFixed(2);
}

export function countFavoriteGenres(obj) {
  const genreArr = getGenreArray(obj);
  const uniqueGenres = getUniqueGenres(genreArr);
  const countedGenres = countGenres(genreArr, uniqueGenres);
  const favoriteGenres = getFavoriteGenres(countedGenres);
  return favoriteGenres;
}

function getGenreArray(data) {
  if (!data) {
    return [];
  }
  return data.favList.flatMap(({ genres }) =>
    genres.map(genre => genre.name.toLowerCase())
  );
}

function getUniqueGenres(array) {
  return array.filter((genre, ind, arr) => arr.indexOf(genre) === ind);
}

function countGenres(array1, array2) {
  return array2.map(item => {
    const number = array1.reduce((acc, genre) => {
      if (item === genre) {
        return (acc += 1);
      }
      return acc;
    }, 0);
    return { genre: item, number };
  });
}

function getFavoriteGenres(array) {
  return array
    .map(movie => {
      const matchingGenre = tmdbGenreColors.find(
        item => movie.genre === item.genre.toLowerCase()
      );
      return {
        ...movie,
        genre: matchingGenre.genre,
        color: matchingGenre.color,
      };
    })
    .sort((a, b) => b.number - a.number);
}
