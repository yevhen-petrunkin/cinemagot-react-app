import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { getMovieById, getPictureAddress } from 'services';
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
  const [movieData, setMovieData] = useState({});
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId).then(movie => {
      const { poster_path, title, popularity, overview, genres } = movie;
      setMovieData({
        poster: getPictureAddress(poster_path),
        title,
        score: popularity,
        overview,
        genres: stringifyData(genres),
      });
    });
  }, [movieId]);

  if (!movieData) {
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
          {!isPosterLoaded && <PosterPlaceholder />}
          <Poster
            src={poster}
            alt={title}
            onLoad={() => setIsPosterLoaded(true)}
          />
        </div>
        <div style={{ padding: '20px 0' }}>
          <MovieCaption>{title}</MovieCaption>
          <TextContent>User Score: {score}</TextContent>
          <OverviewCaption>Overview</OverviewCaption>
          <TextContent>{overview}</TextContent>
          <GenresCaption>Genres</GenresCaption>
          <TextContent>{genres}</TextContent>
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
