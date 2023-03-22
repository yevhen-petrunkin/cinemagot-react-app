import { Box, Wrapper, Circle } from './Loader.styled';
import PropTypes from 'prop-types';

function Loader({ size }) {
  return (
    <Box>
      <Wrapper size={size}>
        <Circle />
      </Wrapper>
    </Box>
  );
}

export default Loader;

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};
