import { Link, Outlet } from 'react-router-dom';

function Movies() {
  return (
    <>
      <section></section>
      <section>
        <h2>Additional Information</h2>
        <nav>
          <ul>
            <li>
              <Link to="">Cast</Link>
              <Link to="">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </section>
    </>
  );
}

export default Movies;
