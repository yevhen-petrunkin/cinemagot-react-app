import styled from 'styled-components';

export const Caption = styled.h2`
  margin: 0;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  ${({ theme: { space, colors, fontSizes, sizes, radii, mediaQueries } }) => `
  padding: ${space[2]}px;
  margin-top: ${space[2]}px;
  margin-bottom: ${space[4]}px;
  display: block;
  width: 100%;
  height: ${sizes[1] * 10}px;
  font-size: ${fontSizes[2]}px;
  color: ${colors.secondaryStrong};
  border: none;
  border-radius: ${radii[1]}px;
  outline: none;

  &:hover,
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${colors.secondary};
  }
  
  `}
`;

export const Btn = styled.button`
  ${({
    theme: {
      space,
      fontSizes,
      colors,
      letterSpacings,
      borders,
      radii,
      shadows,
      mediaQueries,
    },
  }) => `
    padding: ${space[2]}px ${space[3]}px;
    font-size: ${fontSizes[2]}px;
    letter-spacing: ${letterSpacings[2]}px;
    color: ${colors.defaultWeak};
    background-color: ${colors.secondaryStrong};
    border: ${borders.btn};
    border-radius: ${radii[1]}px;
    box-shadow: ${shadows.ordinary};
    cursor: pointer;
    transition: color 300ms ease, border 300ms ease;

    &:hover,
    &:focus {
      border: ${borders.btnHover};
    }

    &:active {
      color: ${colors.accentWeak};
    }

    &:disabled {
      background-color: ${colors.secondaryWeak};
      cursor: not-allowed;  
    }

   ${mediaQueries.large} {
      letter-spacing: ${letterSpacings[1]}px;
    }
  `}
`;
