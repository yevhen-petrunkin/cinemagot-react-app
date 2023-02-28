import { stringifyNewsApiQuery } from 'services/normalize';

const newsApiSearchArray = ['film', 'director', 'cinema', 'actor', 'movie'];

export const newsApiQueryString = stringifyNewsApiQuery(newsApiSearchArray);
