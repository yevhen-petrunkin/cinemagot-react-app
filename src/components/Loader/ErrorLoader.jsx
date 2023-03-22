import { ErrorBox, ErrorText, Wrapper, Circle } from './Loader.styled';
import PropTypes from 'prop-types';

export function ErrorLoader({ size, text }) {
  return (
    <ErrorBox>
      <ErrorText>{text}</ErrorText>
      <Wrapper size={size}>
        <Circle />
      </Wrapper>
    </ErrorBox>
  );
}

ErrorLoader.propTypes = {
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
