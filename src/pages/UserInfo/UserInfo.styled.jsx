import styled from 'styled-components';

export const Grid = styled.div`
  ${({ theme: { space, colors, shadows, mediaQueries } }) => `
  padding: ${space[3]}px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: ${space[3]}px;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};

  ${mediaQueries.large} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
 
  ${mediaQueries.lowerSmall} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-flow: column;
  }
  `}
`;

export const Cell = styled.div`
  ${({ theme: { space, colors, radii, shadows, mediaQueries } }) => `
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

  ${mediaQueries.large} {
  padding: ${space[2]}px;

  &: nth-child(3) {
    grid-column: 1 /3;
    grid-row: 7 / 8;
    overflow: hidden;
  }
  }
 
  ${mediaQueries.small} {
  &: nth-child(1) {
    grid-column: 1 / 3;  
    grid-row: 1 / 2;
  }

  &: nth-child(3) {
    grid-column: 1 / 3;
    grid-row: 6 / 8;
    overflow: hidden;
  }

  &: nth-child(9) {
    grid-column: 1 / 3;  
    grid-row: 5 / 6;
  }
  }

  ${mediaQueries.lowerSmall} {
    &: nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &: nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 9 / 10;
    overflow: hidden;
  }

  &: nth-child(9) {
    grid-column: 1 / 2;
    grid-row: 8 / 9;
  }
  }
  `}
`;
