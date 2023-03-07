import styled from 'styled-components';

export const Grid = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap: 12px;
  height: 87vh;
  color: ${p => p.theme.colors.default};
`;

export const Cell = styled.div`
  background-color: ${p => p.theme.colors.primary};
  border-radius: 12px;
  box-shadow: ${p => p.theme.shadows.ordinary};

  &: nth-child(1) {
    grid-row: 1 / 4;
  }

  &: nth-child(3) {
    padding: 8px;
    grid-column: 3 /4;
    grid-row: 1 / 7;
    overflow: hidden;
  }

  &: nth-child(9) {
    grid-column: 2 /3;
    grid-row: 4 / 7;
  }
`;
