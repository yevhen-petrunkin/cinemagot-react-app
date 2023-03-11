import styled from 'styled-components';

export const Form = styled.form`
  ${({ theme: { space, mediaQueries } }) => `
  display: flex;
  align-items: center;
  gap: ${space[3]}px;

  ${mediaQueries.medium} {
    gap: ${space[2]}px;
  } `}
`;

export const Input = styled.input`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      sizes,
      borders,
      radii,
      shadows,
      mediaQueries,
    },
  }) => `
  padding: ${space[2]}px;
  font-size: ${fontSizes[3]}px;
  background-color: ${colors.defaultWeak};
  border: ${borders.input};
  border-radius: ${radii[1]}px;
  box-shadow: ${shadows.ordinary};
  transition: border 200ms ease;
  outline: none;

  &::placeholder {
    font-size: ${fontSizes[3]}px;
  }

  &:hover,
  &:focus {
    border: ${borders.inputHover};
    outline: none;
  }

  ${mediaQueries.large} {
    width: ${sizes[5] * 10}px;
  }

  ${mediaQueries.medium} {
    width: ${sizes[5] * 8}px;
    font-size: ${fontSizes[2]}px;

    &::placeholder {
      font-size: ${fontSizes[2]}px;
    }
  }

  ${mediaQueries.small} {
    width: ${sizes[5] * 6}px;
  }
  `}
`;
