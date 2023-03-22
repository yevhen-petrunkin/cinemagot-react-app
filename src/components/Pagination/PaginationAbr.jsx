import { PageBox, PageBtn } from './Pagination.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPage,
  selectGalleryType,
  selectQuery,
  selectMovieId,
} from 'redux/selectors';

import { setPage } from 'redux/redux-slices/gallerySlice';
import {
  getMoviesByKeyword,
  getRecommendedMovies,
  getSimilarMovies,
} from 'redux/redux-operations/tmdbOperations';

import {
  TfiAngleDoubleLeft,
  TfiAngleLeft,
  TfiAngleRight,
} from 'react-icons/tfi';

export function PaginationAbr({ movies }) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const galleryType = useSelector(selectGalleryType);
  const query = useSelector(selectQuery);
  const id = useSelector(selectMovieId);

  const onClick = number => {
    dispatch(setPage(number));
    let queryData = null;
    switch (galleryType) {
      case 'search':
        queryData = { query, page: number, galleryType };
        dispatch(getMoviesByKeyword(queryData));
        break;
      case 'recommend':
        queryData = { id, page: number, galleryType };
        dispatch(getRecommendedMovies(queryData));
        break;
      case 'similar':
        queryData = { id, page: number, galleryType };
        dispatch(getSimilarMovies(queryData));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <PageBox>
        <PageBtn type="button" onClick={() => onClick(1)} disabled={page <= 1}>
          <TfiAngleDoubleLeft style={{ width: '100%', height: '100%' }} />
        </PageBtn>
        <PageBtn
          type="button"
          onClick={() => onClick(page - 1)}
          disabled={page <= 1}
        >
          <TfiAngleLeft style={{ width: '100%', height: '100%' }} />
        </PageBtn>
        <PageBtn
          type="button"
          onClick={() => onClick(page + 1)}
          disabled={movies.length < 20}
        >
          <TfiAngleRight style={{ width: '100%', height: '100%' }} />
        </PageBtn>
      </PageBox>
    </>
  );
}

PaginationAbr.propTypes = {
  movies: PropTypes.array.isRequired,
};
