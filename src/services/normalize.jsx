export function normalizeMovies(movies) {
  return movies.reduce((aggr, movie) => {
    let movieName = '';
    if (movie.original_title) {
      movieName = movie.original_title;
    }
    if (movie.name) {
      movieName = movie.name;
    }
    return [...aggr, { id: movie.id, movieName: movieName }];
  }, []);
}

export function stringifyData(array) {
  // console.log(array);
  return array.map(item => item.name).join(', ');
}
