import { useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { fetchMovieById, getPictureAddress } from 'services';
import { stringifyData } from 'services';
import {
  GoBackBtn,
  Poster,
  MovieCaption,
  TextContent,
  OverviewCaption,
  GenresCaption,
  AdditCaption,
  List,
  ListItem,
  AdditLink,
} from './MovieDetails.styled';
import { PosterPlaceholder } from 'components/Placeholder';
import LoaderComp from 'components/Loader';

function MovieDetails() {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const {
    data: movieData,
    isLoading,
    isError,
  } = useQuery(['movie', movieId], () =>
    fetchMovieById(movieId).then(
      ({ poster_path, title, popularity, overview, genres }) => ({
        poster: getPictureAddress(poster_path),
        title,
        score: popularity,
        overview,
        genres: stringifyData(genres),
      })
    )
  );

  if (isLoading) {
    return <LoaderComp />;
  }

  const { poster, title, score, overview, genres } = movieData;

  return (
    <>
      <section>
        <GoBackBtn to={backLinkHref}>
          <HiArrowNarrowLeft />
          <span>Go Back</span>
        </GoBackBtn>
        <div>
          {(!isPosterLoaded || isError) && <PosterPlaceholder />}
          {poster && (
            <Poster
              src={poster}
              alt={title}
              onLoad={() => setIsPosterLoaded(true)}
            />
          )}
        </div>
        <div style={{ padding: '20px 0' }}>
          <MovieCaption>{!isError && title}</MovieCaption>
          <TextContent>User Score: {!isError && score}</TextContent>
          <OverviewCaption>Overview</OverviewCaption>
          <TextContent>{!isError && overview}</TextContent>
          <GenresCaption>Genres</GenresCaption>
          <TextContent>{!isError && genres}</TextContent>
        </div>
      </section>
      <section>
        <AdditCaption>Additional Information</AdditCaption>
        <nav>
          <List>
            <ListItem>
              <AdditLink to="cast" state={{ from: backLinkHref }}>
                Cast
              </AdditLink>
            </ListItem>
            <ListItem>
              <AdditLink to="review" state={{ from: backLinkHref }}>
                Reviews
              </AdditLink>
            </ListItem>
          </List>
        </nav>
        <Suspense fallback={<LoaderComp />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
}

export default MovieDetails;
