import { BoxAdjust, Wrapper, Circle } from './Loader.styled';

export function LoaderAdjust({ size, height }) {
  return (
    <BoxAdjust height={height}>
      <Wrapper size={size}>
        <Circle />
      </Wrapper>
    </BoxAdjust>
  );
}
