import { RateList, StarItem } from './Widgets.styled';
import { RxStarFilled } from 'react-icons/rx';

export function StarWidg({ size, number }) {
  return (
    <RateList size={size} number={number}>
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
