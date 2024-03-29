import {
  Box,
  Caption,
  MovieBox,
  List,
  PosterBox,
  Poster,
  InfoBox,
  Title,
  Slogan,
  Info,
  Point,
} from './NewsBox.styled';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestMovie, stringifyData, normalizeMovieData } from 'services';
import { defaultMovieDataObject } from 'services/sources/defauldValueObjectSource';
import { messageData } from 'services/sources/messageDataSource';

import Loader from 'components/Loader';
import { ErrorLoader } from 'components/Loader';

import placeholder from 'images/photoholder.jpg';

function NewsBox() {
  const [movieData, setMovieData] = useState(defaultMovieDataObject);

  const {
    data: movie,
    isLoading,
    isError,
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
        {isLoading && <Loader size={100} />}
        {isError && <ErrorLoader size={100} text={messageData.errorMessage} />}
        <MovieBox>
          <PosterBox>
            <Poster src={poster || placeholder} alt={title} />
          </PosterBox>
          {movieData && (
            <InfoBox>
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
            </InfoBox>
          )}
        </MovieBox>
      </Box>
    </section>
  );
}

export default NewsBox;

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};

ErrorLoader.propTypes = {
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
