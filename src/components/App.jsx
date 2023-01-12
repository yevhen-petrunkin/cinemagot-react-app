import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MoviesLayout = lazy(() => import('pages/MoviesLayout/MoviesLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
            <Route path="*" element={<div>NotFound</div>} />
          </Route>
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </Suspense>
  );
};
