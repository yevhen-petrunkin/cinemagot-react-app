import { RateList, HeartItem } from './Widgets.styled';
import { RxHeartFilled } from 'react-icons/rx';

export function HeartWidg({ size, number }) {
  return (
    <RateList size={size} number={number}>
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
