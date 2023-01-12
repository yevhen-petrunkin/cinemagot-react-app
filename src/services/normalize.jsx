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
