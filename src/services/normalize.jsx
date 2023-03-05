import { userExtraDataSource } from './sources/userExtraDataSource';
import { getPictureAddress } from './services';

export function normalizeUserData(user) {
  return {
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    userPhoto: user.photoURL,
  };
}

export function normalizeUserExtraData(data) {
  if (!data) {
    return;
  }
  return userExtraDataSource.reduce((acc, dataItem) => {
    acc = { ...acc, [dataItem]: data[dataItem] };
    return acc;
  }, {});
}

export function normalizeGallery(gallery) {
  return gallery.map(
    ({
      id,
      original_title,
      poster_path,
      release_date,
      vote_average,
      vote_count,
      popularity,
      overview,
    }) => {
      const poster = getPictureAddress(poster_path);
      return {
        id,
        movieName: original_title,
        poster,
        release: release_date,
        aveRate: vote_average,
        countRate: vote_count,
        popularity,
        overview,
      };
    }
  );
}

export function normalizeCredits(credits) {
  return credits.map(({ credit_id, profile_path, name, character }) => ({
    id: credit_id,
    profilePhoto: profile_path,
    actorName: name,
    charName: character,
  }));
}

export function normalizeReviews(reviews) {
  return reviews.map(review => ({
    id: review.id,
    author: review.author,
    content: review.content,
  }));
}

export function stringifyData(array) {
  return array.map(item => item.name).join(', ');
}

export function stringifyNewsApiQuery(array) {
  return array.join('+');
}

export function normalizeDate(date) {
  if (!date) {
    return '';
  }
  return date.toISOString().slice(0, 10);
}

export function normalizeDateString(dateString) {
  if (!dateString) {
    return '';
  }
  const date = dateString.slice(0, 10);
  const time = dateString.slice(11, 19);
  return date + ' ' + time;
}

export function normalizeMovieData(movieObj) {
  const {
    id,
    imdb_id,
    title,
    original_title,
    tagline,
    overview,
    genres,
    adult,
    poster_path,
    video,
    release_date,
    budget,
    revenue,
    runtime,
    production_companies,
    popularity,
    vote_average,
    vote_count,
  } = movieObj;

  const companies = production_companies.filter(company => company.logo_path);
  const poster = getPictureAddress(poster_path);

  return {
    id,
    specificId: imdb_id,
    title,
    origTitle: original_title,
    slogan: tagline,
    overview,
    genres,
    adult,
    poster,
    video,
    date: release_date,
    budget,
    revenue,
    runtime,
    companies,
    popularity,
    score: vote_average,
    voteCount: vote_count,
  };
}

export function normalizePicGallery(obj) {
  let number = 0;
  return obj.posters.map(({ file_path }) => {
    const url = getPictureAddress(file_path);
    number += 1;
    return { url, number };
  });
}
