import { Box, Wrapper, Circle } from './Loader.styled';

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
