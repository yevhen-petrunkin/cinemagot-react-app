import { RateList, HeartItem } from './Widgets.styled';
import PropTypes from 'prop-types';
import { RxHeartFilled } from 'react-icons/rx';

export function HeartWidg({ number }) {
  return (
    <RateList>
      <HeartItem number={number}>
        <RxHeartFilled style={{ width: '100%', height: '100%' }} />
      </HeartItem>
      <HeartItem number={number}>
        <RxHeartFilled style={{ width: '100%', height: '100%' }} />
      </HeartItem>
      <HeartItem number={number}>
        <RxHeartFilled style={{ width: '100%', height: '100%' }} />
      </HeartItem>
      <HeartItem number={number}>
        <RxHeartFilled style={{ width: '100%', height: '100%' }} />
      </HeartItem>
      <HeartItem number={number}>
        <RxHeartFilled style={{ width: '100%', height: '100%' }} />
      </HeartItem>
    </RateList>
  );
}

HeartWidg.propTypes = {
  number: PropTypes.number.isRequired,
};

HeartItem.propTypes = {
  number: PropTypes.number.isRequired,
};
