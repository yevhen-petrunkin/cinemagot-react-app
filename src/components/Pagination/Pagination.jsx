import { PageBox, PageInput, PageBtn } from './Pagination.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectTotalPageNum } from 'redux/selectors';

import { setPage } from 'redux/redux-slices/gallerySlice';

import {
  TfiAngleDoubleLeft,
  TfiAngleDoubleRight,
  TfiAngleLeft,
  TfiAngleRight,
} from 'react-icons/tfi';

function Pagination() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const total = useSelector(selectTotalPageNum);

  const onClick = number => {
    dispatch(setPage(number));
  };

  return (
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

      <PageInput
        type="number"
        min="1"
        max={total}
        value={page}
        onChange={e => dispatch(setPage(e.target.value))}
      />

      <PageBtn
        type="button"
        onClick={() => onClick(page + 1)}
        disabled={page >= total}
      >
        <TfiAngleRight style={{ width: '100%', height: '100%' }} />
      </PageBtn>

      <PageBtn
        type="button"
        onClick={() => onClick(total)}
        disabled={page >= total}
      >
        <TfiAngleDoubleRight style={{ width: '100%', height: '100%' }} />
      </PageBtn>
    </PageBox>
  );
}

export default Pagination;
