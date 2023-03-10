import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  @media only screen and (max-width: 991px) {
    gap: ${p => p.theme.space[2]}px;
  }
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  background-color: ${p => p.theme.colors.defaultWeak};
  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.radii[1]}px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  transition: border 200ms ease;
  outline: none;

  &::placeholder {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.inputHover};
    outline: none;
  }

  @media only screen and (max-width: 1199px) {
    width: ${p => p.theme.sizes[5] * 10}px;
  }

  @media only screen and (max-width: 991px) {
    width: ${p => p.theme.sizes[5] * 8}px;
    font-size: ${p => p.theme.fontSizes[2]}px;

    &::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }

  @media only screen and (max-width: 767px) {
    width: ${p => p.theme.sizes[5] * 6}px;
  }
`;
