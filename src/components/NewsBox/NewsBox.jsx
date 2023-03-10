import {
  Box,
  List,
  Poster,
  NewsArticle,
  NewsLink,
  NewsImg,
} from './NewsBox.styled';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestMovie, fetchNewsData } from 'services/services';
import {
  normalizeMovieData,
  stringifyData,
  makeNewsApiQueryFromString,
  normalizeDateString,
} from 'services/normalize';
import { defaultMovieDataObject } from 'services/sources/defauldValueObjectSource';
import { GalleryPlaceholder } from 'components/Placeholder';

function NewsBox() {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [movie, setMovie] = useState(defaultMovieDataObject);
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('film+movie');

  const {
    data: movieData,
    isLoading,
    isError,
  } = useQuery(['movie'], () => fetchLatestMovie().then(normalizeMovieData));

  const {
    poster,
    title,
    origTitle,
    slogan,
    overview,
    genres,
    budget,
    runtime,
    date,
  } = movie;

  const genresString = stringifyData(genres);

  const {
    data: newsData,
    isLoading: isNewsLoading,
    isError: isNewsError,
  } = useQuery(['news', query], () => fetchNewsData(query));

  useEffect(() => {
    if (movieData && newsData) {
      setMovie(movieData);
      setNews(newsData);
    }
  }, [movieData, newsData]);

  const queryString = makeNewsApiQueryFromString(title);

  useEffect(() => {
    setQuery(queryString);
  }, [queryString]);

  return (
    <Box>
      <section>
        <h2>Latest Movie</h2>
        <div>
          {(!isPosterLoaded || isError) && <GalleryPlaceholder />}
          {poster && (
            <Poster
              src={poster}
              alt={title}
              onLoad={() => setIsPosterLoaded(true)}
            />
          )}
          {isLoading && <p>Loading Movie...</p>}
          {isError && <p>Oops... Something went wrong!</p>}
          {movieData && (
            <>
              <h3>{title}</h3>
              <List>
                <li>Original title: {origTitle}</li>
                <li>Slogan: {slogan}</li>
                <li>Genres: {genresString}</li>
                <li>Release: {date}</li>
                <li>Overview: {overview}</li>
                <li>Budget: {budget}</li>
                <li>Runtime: {runtime}</li>
              </List>
            </>
          )}
        </div>
      </section>
      <section>
        <h2>Latest News</h2>
        <div>
          {isNewsLoading && <p>Loading News...</p>}
          {isNewsError && <p>Oops... Something went wrong!</p>}
          {news.map(
            ({ author, title, content, publishedAt, url, urlToImage }) => {
              const date = normalizeDateString(publishedAt);
              return (
                <NewsArticle key={url}>
                  <NewsLink href={url}>
                    <h2>{title}</h2>
                    <NewsImg src={urlToImage} alt="title" />
                    <p>{content}</p>
                    <p>
                      <span>{author}</span>
                      <span>{date}</span>
                    </p>
                  </NewsLink>
                </NewsArticle>
              );
            }
          )}
        </div>
      </section>
    </Box>
  );
}

export default NewsBox;
