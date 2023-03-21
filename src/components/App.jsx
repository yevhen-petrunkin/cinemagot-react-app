import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectTheme } from 'redux/selectors';
import { clearUserExtraData } from 'redux/redux-slices/userExtraDataSlice';
import { fetchUserLists } from 'redux/redux-slices/userListSlice';
import { fetchUserData } from 'redux/redux-slices/authSlice';
import { toggleTheme } from 'redux/redux-slices/themeSlice';
import { ThemeProvider } from 'styled-components';
import { mainTheme, MainGlobalStyles } from 'services/themes/mainTheme';
import {
  alternativeTheme,
  AlternativeGlobalStyles,
} from 'services/themes/alternativeTheme';
import { fetchUserExtraData } from 'redux/redux-operations/firebaseOperations';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { normalizeUserData } from 'services/normalize';

import NotFoundMessage from 'components/NotFoundMessage';
import LoaderComp from 'components/Loader';

const MoviesLayout = lazy(() => import('pages/MoviesLayout'));
const Home = lazy(() => import('pages/Home'));
const News = lazy(() => import('pages/News'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Credits = lazy(() => import('pages/Credits'));
const Reviews = lazy(() => import('pages/Reviews'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const UserInfo = lazy(() => import('pages/UserInfo'));
const UserList = lazy(() => import('pages/UserList'));

export const App = () => {
  const isUserAuth = useSelector(selectUser);
  const isThemeDefault = useSelector(selectTheme);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserIn = sessionStorage.getItem('isUserIn');

  useEffect(() => {
    const value = localStorage.getItem('defaultTheme');
    if (value) {
      const parsedValue = JSON.parse(value);
      dispatch(toggleTheme(parsedValue));
    }
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const normalizedUserData = normalizeUserData(user);
        dispatch(fetchUserData(normalizedUserData));
      } else {
        console.log('No User Logged In:', user);
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (isUserAuth) {
      onSnapshot(doc(db, 'userLists', isUserAuth.userId), doc => {
        dispatch(fetchUserLists(doc.data()));
      });
    }
  }, [dispatch, isUserAuth]);

  useEffect(() => {
    !isUserAuth
      ? dispatch(clearUserExtraData())
      : dispatch(fetchUserExtraData(isUserAuth.userId));
  }, [dispatch, isUserAuth]);

  useEffect(() => {
    if (isUserAuth && !isUserIn) {
      sessionStorage.setItem('isUserIn', 'true');
      navigate('dashboard');
    }
  }, [isUserAuth, isUserIn, navigate]);

  return (
    <ThemeProvider theme={isThemeDefault ? mainTheme : alternativeTheme}>
      {isThemeDefault ? <MainGlobalStyles /> : <AlternativeGlobalStyles />}
      <Suspense fallback={<LoaderComp />}>
        <Routes>
          <Route path="/" element={<MoviesLayout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="credits" element={<Credits />} />
              <Route path="review" element={<Reviews />} />
              <Route path="*" element={<NotFoundMessage />} />
            </Route>
            {isUserAuth && (
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="info" element={<UserInfo />} />
                <Route path="info/:listId" element={<UserList />} />
                <Route path="*" element={<NotFoundMessage />} />
              </Route>
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
