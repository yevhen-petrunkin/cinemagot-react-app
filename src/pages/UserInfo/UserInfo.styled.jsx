import styled from 'styled-components';

export const Grid = styled.div`
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
  }) => `
  padding: ${space[3]}px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: ${space[3]}px;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};
  `}
`;

export const Cell = styled.div`
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
  }) => `
  background-color: ${colors.primary};
  border-radius: ${radii[3]}px;
  box-shadow: ${shadows.ordinary};

  &: nth-child(1) {
    grid-row: 1 / 4;
  }

  &: nth-child(3) {
    grid-column: 3 /4;
    grid-row: 1 / 7;
    overflow: hidden;
  }

  &: nth-child(9) {
    grid-column: 2 /3;
    grid-row: 4 / 7;
  }
  `}
`;
