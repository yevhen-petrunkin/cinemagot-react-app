import { BoxAdjust, Wrapper, Circle } from './Loader.styled';
import PropTypes from 'prop-types';

export function LoaderAdjust({ size, height }) {
  return (
    <BoxAdjust height={height}>
      <Wrapper size={size}>
        <Circle />
      </Wrapper>
    </BoxAdjust>
  );
}

LoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
