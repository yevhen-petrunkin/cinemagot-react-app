import { Routes, Route } from 'react-router-dom';
import MoviesLayout from 'pages/MoviesLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
