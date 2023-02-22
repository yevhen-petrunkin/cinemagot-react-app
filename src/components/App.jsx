import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect, useState } from 'react';
import { getUserData, getAdditionalUserData } from 'redux/userDataSlice';
import { selectUserData } from 'redux/selectors';
import {
  normalizeUserData,
  normalizeAdditionalUserData,
} from 'services/normalize';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundMessage from 'components/NotFoundMessage';
import LoaderComp from 'components/Loader';

const MoviesLayout = lazy(() => import('pages/MoviesLayout'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  const userData = useSelector(selectUserData);
  console.log(userData);
  const dispatch = useDispatch();
  const [extraData, setExtraData] = useState({});

  useEffect(() => {
    if (extraData) {
      dispatch(getAdditionalUserData(extraData));
    }
  }, [dispatch, extraData]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const normalizedUserData = normalizeUserData(user);
        dispatch(getUserData(normalizedUserData));
      } else {
        console.log('No User Logged In:', user);
        return;
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    if (!userData.userId) {
      return;
    }
    const unsub = onSnapshot(
      doc(db, 'users', userData.userId),
      { includeMetadataChanges: true },
      doc => {
        const normalizedAdditionalUserData = normalizeAdditionalUserData(
          doc.data()
        );
        setExtraData(prevState => {
          if (
            JSON.stringify(prevState) ===
            JSON.stringify(normalizedAdditionalUserData)
          ) {
            return prevState;
          }
          return normalizedAdditionalUserData;
        });
      }
    );

    return unsub;
  }, [userData]);

  return (
    <Suspense fallback={<LoaderComp />}>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />
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
