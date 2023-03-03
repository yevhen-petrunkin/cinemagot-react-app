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
import { useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieById, stringifyData } from 'services';
import { normalizeMovieData } from 'services/normalize';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { PosterPlaceholder } from 'components/Placeholder';
import Container from 'components/Container';
import HandleListBtnSet from 'components/HandleListBtnSet';
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
    fetchMovieById(movieId).then(normalizeMovieData)
  );

  if (isLoading) {
    return <LoaderComp />;
  }

  const { poster, title, popularity, overview, genres } = movieData;
  const genresString = stringifyData(genres);

  return (
    <>
      <section>
        <Container>
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
            <HandleListBtnSet movieData={movieData} />
            <MovieCaption>{!isError && title}</MovieCaption>
            <TextContent>User Score: {!isError && popularity}</TextContent>
            <OverviewCaption>Overview</OverviewCaption>
            <TextContent>{!isError && overview}</TextContent>
            <GenresCaption>Genres</GenresCaption>
            <TextContent>{!isError && genresString}</TextContent>
          </div>
        </Container>
      </section>

      <section>
        <Container>
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
        </Container>
      </section>
    </>
  );
}

export default MovieDetails;
