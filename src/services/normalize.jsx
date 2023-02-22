import { additionalUserDataSource } from './additionalUserDataSource';

export function normalizeUserData(user) {
  return {
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    userPhoto: user.photoURL,
  };
}

export function normalizeAdditionalUserData(data) {
  if (!data) {
    return;
  }
  return additionalUserDataSource.reduce((acc, dataItem) => {
    acc = { ...acc, [dataItem]: data[dataItem] };
    return acc;
  }, {});
}

export function normalizeMovies(movies) {
  return movies.map(movie => ({
    id: movie.id,
    movieName: movie.original_title,
  }));
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
