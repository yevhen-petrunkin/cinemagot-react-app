import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import LoaderComp from 'components/Loader';

function MoviesLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoaderComp />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default MoviesLayout;
