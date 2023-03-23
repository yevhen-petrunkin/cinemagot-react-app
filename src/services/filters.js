import { homePageGalleryQuerySource } from './sources/homePageGalleryQuerySource';

export function getStartingVideo(videos) {
  if (!videos) {
    return;
  }
  const filteredVideos = videos.filter(
    ({ type }) => type.toLowerCase() === 'trailer'
  );
  return filteredVideos[0];
}

export function filterMoviesByAdultContent(movies) {
  return movies.filter(({ adult }) => !adult);
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

export function filterPeopleWithPhotos({ crew, cast }) {
  const filteredCrew = crew.filter(({ profilePhoto }) => profilePhoto);
  const filteredCast = cast.filter(({ profilePhoto }) => profilePhoto);
  return { crew: filteredCrew, cast: filteredCast };
}
