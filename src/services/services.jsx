const BASE = 'https://api.themoviedb.org/3';
const KEY = 'ae692f579055feb645577941bd67daeb';

export async function getTrendingMovies() {
  try {
    const response = await fetch(`${BASE}/trending/movie/day?api_key=${KEY}`);
    const trendingMovies = await response.json();
    return trendingMovies;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMoviesByKeyword(query) {
  try {
    const response = await fetch(
      `${BASE}/search/keyword?api_key=${KEY}&query=${query}`
    );
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieById(id) {
  try {
    const response = await fetch(`${BASE}/movie/${id}?api_key=${KEY}`);
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.log(error.message);
  }
}
