import { Routes, Route } from 'react-router-dom';
import MoviesLayout from 'pages/MoviesLayout/MoviesLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
