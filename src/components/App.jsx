import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import {
  fetchUserData,
  fetchUserExtraData,
} from 'redux/redux-operations/firebaseOperations';
import { clearUserExtraData } from 'redux/redux-slices/userExtraDataSlice';

import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundMessage from 'components/NotFoundMessage';
import LoaderComp from 'components/Loader';

const MoviesLayout = lazy(() => import('pages/MoviesLayout'));
const Home = lazy(() => import('pages/Home'));
const News = lazy(() => import('pages/News'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  const isUserAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    !isUserAuth
      ? dispatch(clearUserExtraData())
      : dispatch(fetchUserExtraData(isUserAuth.userId));
  }, [dispatch, isUserAuth]);

  return (
    <Suspense fallback={<LoaderComp />}>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
            <Route path="*" element={<NotFoundMessage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
