import { Routes, Route } from 'react-router-dom';
import MoviesLayout from 'pages/MoviesLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Review from 'pages/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/review" element={<Review />} />
            <Route path="*" element={<div>NotFound</div>} />
          </Route>
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </div>
  );
};
