import styled from 'styled-components';

export const Btn = styled.button`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
    top,
    right,
  }) => `
  position: absolute;
  top: ${top}px;
  right: ${right}px;
  width: 28px;
  height: 28px;
  color: ${colors.defaultWeak};
  background-color: rgba(0, 0, 0, 0.5);
  border: ${borders.heroBtnSmall};
  border-radius: 50%;
  box-shadow: ${shadows.elevated};
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accent};
    border: ${borders.heroBtnSmallHover};
  }
  `}
`;
