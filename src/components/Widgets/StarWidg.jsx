import { RateList, StarItem } from './Widgets.styled';
import PropTypes from 'prop-types';
import { RxStarFilled } from 'react-icons/rx';

export function StarWidg({ number }) {
  return (
    <RateList>
      <StarItem number={number}>
        <RxStarFilled style={{ width: '100%', height: '100%' }} />
      </StarItem>
      <StarItem number={number}>
        <RxStarFilled style={{ width: '100%', height: '100%' }} />
      </StarItem>
      <StarItem number={number}>
        <RxStarFilled style={{ width: '100%', height: '100%' }} />
      </StarItem>
      <StarItem number={number}>
        <RxStarFilled style={{ width: '100%', height: '100%' }} />
      </StarItem>
      <StarItem number={number}>
        <RxStarFilled style={{ width: '100%', height: '100%' }} />
      </StarItem>
    </RateList>
  );
}

StarWidg.propTypes = {
  number: PropTypes.number.isRequired,
};

StarItem.propTypes = {
  number: PropTypes.number.isRequired,
};
