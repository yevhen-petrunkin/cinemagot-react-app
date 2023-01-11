import Movie from 'components/Movie/Movie';

function SearchList({ movies, location }) {
  return (
    <ul>
      {movies.map(movie => {
        const { id, movieName } = movie;
        return (
          <Movie key={id} id={id} movieName={movieName} location={location} />
        );
      })}
    </ul>
  );
}

export default SearchList;
