import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { getUserId } from 'redux/authSlice';
import { selectUserId } from 'redux/selectors';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
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
  const dispatch = useDispatch();
  const uid = useSelector(selectUserId);

  onAuthStateChanged(auth, user => {
    if (user) {
      const userId = user.uid;
      dispatch(getUserId(userId));
    } else {
      return;
    }
  });

  if (uid) {
    console.log(uid);
    const fetchData = async () => {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data().country);
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }

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
