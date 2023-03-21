import { ErrorBoxAdjust, ErrorText, Wrapper, Circle } from './Loader.styled';

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
