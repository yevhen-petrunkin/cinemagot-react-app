import styled from 'styled-components';

export const ContentBox = styled.div`
  padding: 12px;
  width: 100%;
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.ordinary};
  border-radius: 8px;
  overflow: hidden;
`;

export const Caption = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-size: 32px;
  letter-spacing: ${p => p.theme.letterSpacings[3]};
  text-align: center;
  text-transform: uppercase;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
`;

export const List = styled.ul`
  margin: 0;
  margin-bottom: 32px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  gap: 20px;
  font-size: 20px;
  list-style: none;
`;
