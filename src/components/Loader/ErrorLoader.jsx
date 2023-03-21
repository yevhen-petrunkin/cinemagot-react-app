import { ErrorBox, ErrorText, Wrapper, Circle } from './Loader.styled';

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
