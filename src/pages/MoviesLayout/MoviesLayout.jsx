import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { LoaderAdjust } from 'components/Loader';

function MoviesLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoaderAdjust size={100} height={100} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default MoviesLayout;
