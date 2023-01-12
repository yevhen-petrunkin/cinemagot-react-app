import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LoaderComp from 'components/Loader';

function MoviesLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<LoaderComp />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default MoviesLayout;
