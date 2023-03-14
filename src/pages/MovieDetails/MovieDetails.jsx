import {
  MovieBox,
  GoBackBtn,
  ContentBox,
  Poster,
  MainCaption,
  Content,
  Caption,
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
import VideoList from 'components/VideoList/VideoList';
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
          <MovieBox>
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
            <div>
              <HandleListBtnSet movieData={movieData} />
              <ContentBox>
                <MainCaption>{!isError && title}</MainCaption>
                <Content>User Score: {!isError && popularity}</Content>
              </ContentBox>
              <ContentBox>
                <Caption>Overview</Caption>
                <Content>{!isError && overview}</Content>
              </ContentBox>
              <ContentBox>
                <Caption>Genres</Caption>
                <Content>{!isError && genresString}</Content>
              </ContentBox>
              <ContentBox>
                <Caption>Watch Trailers</Caption>
                <VideoList movieId={movieId} />
              </ContentBox>
            </div>
          </MovieBox>
        </Container>
      </section>

      <section>
        <Container>
          <ContentBox>
            <Caption>Additional Information</Caption>
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
          </ContentBox>
        </Container>
      </section>
    </>
  );
}

export default MovieDetails;
