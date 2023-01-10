import { Link } from 'react-router-dom';

function Movies() {
  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        <li>
          <Link to=":movieId">Lorem, ipsum dolor.</Link>
        </li>
      </ul>
    </>
  );
}

export default Movies;
