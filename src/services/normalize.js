import { userExtraDataSource } from './sources/userExtraDataSource';
import {
  getPictureAddress,
  getVideoAddress,
  filterMoviesByAdultContent,
  stringifyCrewList,
  stringifyActorList,
} from 'services';
import { defaultMovieDataObject } from './sources/defauldValueObjectSource';
import { crewSource } from './sources/crewSource';

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
  const normalizedGallery = gallery.map(
    ({
      id,
      adult,
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
        adult,
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

  return filterMoviesByAdultContent(normalizedGallery);
}

export function normalizePicGallery(obj) {
  let number = 0;
  return obj.posters.map(({ file_path }) => {
    const url = getPictureAddress(file_path);
    number += 1;
    return { url, number };
  });
}

export function normalizeCredits(creditArr) {
  if (!creditArr) {
    return;
  }
  const { crew, cast } = creditArr;
  const jobTags = crewSource.map(({ jobTag }) => jobTag);

  const crewData = crew
    .filter(member => jobTags.includes(member.job.toLowerCase()))
    .map(({ credit_id, profile_path, name, job }) => {
      const photo = getPictureAddress(profile_path);
      return {
        id: credit_id,
        profilePhoto: photo,
        memberName: name,
        job,
      };
    });

  const castData = cast.map(({ credit_id, profile_path, name, character }) => {
    const photo = getPictureAddress(profile_path);
    return {
      id: credit_id,
      profilePhoto: photo,
      actorName: name,
      charName: character,
    };
  });
  return { crew: crewData, cast: castData };
}

export function normalizeCreditList(credits) {
  if (!credits) {
    return;
  }
  const { crew, cast } = credits;
  const normalizedCrew = crewSource
    .map(({ jobTag, jobName }) => {
      const memberString = stringifyCrewList(crew, jobTag);
      return { job: jobName, memberString };
    })
    .filter(({ memberString }) => memberString);

  const actorString = stringifyActorList(cast);
  return [...normalizedCrew, { job: 'Actors', memberString: actorString }];
}

export function normalizeReviews(reviews) {
  return reviews.map(review => ({
    id: review.id,
    author: review.author,
    content: review.content,
  }));
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
  if (!movieObj) {
    return defaultMovieDataObject;
  }
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

export function normalizeVideos(obj, number) {
  const filteredVideos = obj.results.filter(
    ({ site }) => site.toLowerCase() === 'youtube'
  );
  return filteredVideos.map(({ name, type, published_at, id, key }) => {
    const date = normalizeDateString(published_at);
    const url = getVideoAddress(key, number);
    return { id, videoName: name, type, date, url };
  });
}
