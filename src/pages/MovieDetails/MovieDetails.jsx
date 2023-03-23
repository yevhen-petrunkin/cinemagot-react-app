import {
  MovieBox,
  ContentBox,
  PosterBox,
  Caption,
  Text,
  List,
  ListItem,
  Companies,
  Company,
  CompName,
  CompCountry,
  LogoBox,
  AdditLink,
  UpButton,
} from './MovieDetails.styled';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { Suspense, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  fetchMovieById,
  fetchCreditsById,
  normalizeCredits,
  getPictureAddress,
} from 'services';
import { normalizeMovieData } from 'services';
import { messageData } from 'services/sources/messageDataSource';

import Container from 'components/Container';
import HandleListBtnSet from 'components/HandleListBtnSet';
import MovieTable from 'components/MovieTable';
import VideoList from 'components/VideoList/VideoList';
import { LoaderAdjust } from 'components/Loader';
import Loader from 'components/Loader';
import { ErrorLoaderAdjust } from 'components/Loader';
import { TfiAngleUp } from 'react-icons/tfi';

function MovieDetails() {
  const { colors } = useTheme();

  const [showUpBtn, setShowUpBtn] = useState(false);

  const { movieId } = useParams();

  const additInfoRef = useRef(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const {
    data: movieData,
    isLoading,
    isError,
  } = useQuery(['movie', movieId], () =>
    fetchMovieById(movieId).then(normalizeMovieData)
  );

  const {
    data: credits,
    isCreditsLoading,
    isCreditsError,
  } = useQuery(['credits', movieId], () =>
    fetchCreditsById(movieId).then(data => normalizeCredits(data))
  );

  if (isLoading || isCreditsLoading) {
    return <LoaderAdjust size={100} height={100} />;
  }

  if (isError || isCreditsError) {
    return (
      <ErrorLoaderAdjust
        size={100}
        height={100}
        text={messageData.errorMessage}
      />
    );
  }

  const { poster, overview, companies } = movieData;

  const scrollToAdditInfo = () => {
    setShowUpBtn(true);
    setTimeout(
      () => additInfoRef.current.scrollIntoView({ behavior: 'smooth' }),
      200
    );
  };

  return (
    <>
      <section>
        <Container>
          <MovieBox>
            <ContentBox>
              <MovieTable movie={movieData} credits={credits} />
            </ContentBox>

            <ContentBox>
              <PosterBox bgImg={poster} />
              <HandleListBtnSet movieData={movieData} />
            </ContentBox>

            <ContentBox>
              <Caption>Overview</Caption>
              <Text>{overview}</Text>
            </ContentBox>

            {companies.length !== 0 && (
              <ContentBox>
                <Caption>Production Companies</Caption>
                <Companies>
                  {companies.map(({ id, name, logo_path, origin_country }) => {
                    const logo = getPictureAddress(logo_path);
                    return (
                      <Company key={id}>
                        <CompName>{name}</CompName>
                        <LogoBox>
                          <img
                            src={logo}
                            alt="company-logo"
                            width="100%"
                            height="100%"
                          />
                        </LogoBox>
                        <CompCountry>{origin_country}</CompCountry>
                      </Company>
                    );
                  })}
                </Companies>
              </ContentBox>
            )}

            <ContentBox>
              <Caption>Related Videos</Caption>
              <VideoList movieId={movieId} />
            </ContentBox>

            <ContentBox>
              <Caption>Explore More</Caption>
              <nav>
                <List>
                  <ListItem>
                    <AdditLink
                      to="credits"
                      state={{ credits, from: backLinkHref }}
                      onClick={scrollToAdditInfo}
                    >
                      See Crew & Actors
                    </AdditLink>
                  </ListItem>
                  <ListItem>
                    <AdditLink
                      to="review"
                      state={{ from: backLinkHref }}
                      onClick={scrollToAdditInfo}
                    >
                      See Reviews
                    </AdditLink>
                  </ListItem>
                </List>
              </nav>
            </ContentBox>
          </MovieBox>
        </Container>
      </section>

      <section ref={additInfoRef}>
        <Suspense fallback={<Loader size={100} />}>
          <Outlet />
        </Suspense>
        {showUpBtn && (
          <UpButton
            type="button"
            width={36}
            height={36}
            bgcolor={colors.accent}
            onClick={scrollToAdditInfo}
          >
            <TfiAngleUp style={{ width: '100%', height: '100%' }} />
          </UpButton>
        )}
      </section>
    </>
  );
}

export default MovieDetails;

MovieTable.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    specificId: PropTypes.string,
    title: PropTypes.string,
    origTitle: PropTypes.string,
    slogan: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    adult: PropTypes.bool,
    poster: PropTypes.string,
    video: PropTypes.bool,
    date: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    companies: PropTypes.array,
    popularity: PropTypes.number,
    score: PropTypes.number,
    voteCount: PropTypes.number,
  }).isRequired,
  credits: PropTypes.shape({
    crew: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        profilePhoto: PropTypes.string,
        memberName: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
      })
    ).isRequired,
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        profilePhoto: PropTypes.string,
        actorName: PropTypes.string.isRequired,
        charName: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
};

HandleListBtnSet.propTypes = {
  movieData: PropTypes.shape({
    id: PropTypes.number,
    specificId: PropTypes.string,
    title: PropTypes.string,
    origTitle: PropTypes.string,
    slogan: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    adult: PropTypes.bool,
    poster: PropTypes.string,
    video: PropTypes.bool,
    date: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    companies: PropTypes.array,
    popularity: PropTypes.number,
    score: PropTypes.number,
    voteCount: PropTypes.number,
  }).isRequired,
};

VideoList.propTypes = {
  movieId: PropTypes.string.isRequired,
};

LoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

ErrorLoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
