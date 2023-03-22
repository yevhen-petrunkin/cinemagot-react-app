import { ErrorBoxAdjust, ErrorText, Wrapper, Circle } from './Loader.styled';
import PropTypes from 'prop-types';

export function ErrorLoaderAdjust({ size, height, text }) {
  return (
    <ErrorBoxAdjust height={height}>
      <ErrorText>{text}</ErrorText>
      <Wrapper size={size}>
        <Circle />
      </Wrapper>
    </ErrorBoxAdjust>
  );
}

ErrorLoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
