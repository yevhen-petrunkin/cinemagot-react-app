import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  NavMenu,
  NavStyledLink,
  MainContainer,
} from './MoviesLayout.styled';
import LoaderComp from 'components/Loader';

function MoviesLayout() {
  return (
    <>
      <Header>
        <nav>
          <NavMenu>
            <li>
              <NavStyledLink to="/">Home</NavStyledLink>
            </li>
            <li>
              <NavStyledLink to="/movies">Movies</NavStyledLink>
            </li>
          </NavMenu>
        </nav>
      </Header>
      <main>
        <MainContainer>
          <Suspense fallback={<LoaderComp />}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </main>
    </>
  );
}

export default MoviesLayout;
