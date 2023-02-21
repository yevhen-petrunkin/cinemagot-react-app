import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './MoviesLayout.styled';
import Header from 'components/Header';

import LoaderComp from 'components/Loader';

function MoviesLayout() {
  return (
    <>
      <Header />
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
