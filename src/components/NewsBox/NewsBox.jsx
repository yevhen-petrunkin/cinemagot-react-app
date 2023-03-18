import {
  Box,
  Caption,
  List,
  PosterBox,
  Poster,
  Title,
  Slogan,
  Info,
  Point,
} from './NewsBox.styled';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestMovie } from 'services/services';
import { defaultMovieDataObject } from 'services/sources/defauldValueObjectSource';
import { normalizeMovieData, stringifyData } from 'services/normalize';

import placeholder from 'images/photoholder.jpg';

function NewsBox() {
  const [movieData, setMovieData] = useState(defaultMovieDataObject);

  const {
    data: movie,
    // isLoading,
    // isError,
  } = useQuery(['movie'], () => fetchLatestMovie().then(normalizeMovieData));

  useEffect(() => {
    if (movie) {
      setMovieData(movie);
    }
  }, [movie]);

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
  } = movieData;

  const genresString = stringifyData(genres);

  return (
    <section>
      <Box>
        <Caption>Latest Movie</Caption>

        <PosterBox>
          <Poster src={poster || placeholder} alt={title} />
        </PosterBox>

        {movieData && (
          <>
            <Title>{title}</Title>
            <List>
              {slogan && <Slogan>"{slogan}"</Slogan>}
              {origTitle && (
                <Info>
                  <Point>Original title:</Point> {origTitle}
                </Info>
              )}
              {genresString && (
                <Info>
                  <Point>Genres:</Point> {genresString}
                </Info>
              )}
              {date && (
                <Info>
                  <Point>Release:</Point> {date}
                </Info>
              )}
              {overview && (
                <Info>
                  <Point>Overview:</Point> {overview}
                </Info>
              )}
              {budget.toString() && (
                <Info>
                  <Point>Budget:</Point>{' '}
                  {Number(budget).toLocaleString('en-EN')} USD
                </Info>
              )}
              {runtime.toString() && (
                <Info>
                  <Point>Runtime:</Point> {runtime} min
                </Info>
              )}
            </List>
          </>
        )}
      </Box>
    </section>
  );
}

export default NewsBox;
