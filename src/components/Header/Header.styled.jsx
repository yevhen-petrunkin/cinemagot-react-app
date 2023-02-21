import styled from 'styled-components';

export const HeaderBox = styled.header`
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.primaryDark};
  box-sizing: border-box;
  box-shadow: ${p => p.theme.shadows.elevated};
`;
