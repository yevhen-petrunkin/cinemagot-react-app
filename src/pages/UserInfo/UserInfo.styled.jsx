import styled from 'styled-components';

export const Grid = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 12px;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
  color: ${p => p.theme.colors.defaultWeak};
`;

export const Cell = styled.div`
  background-color: ${p => p.theme.colors.primary};
  border-radius: 12px;
  box-shadow: ${p => p.theme.shadows.ordinary};

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
`;
