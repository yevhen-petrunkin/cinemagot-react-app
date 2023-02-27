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
  return credits.map(credit => ({
    id: credit.id,
    profilePhoto: credit.profile_path,
    actorName: credit.name,
    charName: credit.character,
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

export function normalizeDate(date) {
  if (!date) {
    return '';
  }
  return date.toISOString().slice(0, 10);
}
