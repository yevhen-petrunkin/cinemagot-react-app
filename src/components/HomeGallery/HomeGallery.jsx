import { List } from './HomeGallery.styled';
import Movie from 'components/Movie/Movie';

function HomeGallery({ movies, location }) {
  return (
    <List>
      {movies &&
        movies.map(movie => {
          return <Movie key={movie.id} movie={movie} location={location} />;
        })}
    </List>
  );
}

export default HomeGallery;
