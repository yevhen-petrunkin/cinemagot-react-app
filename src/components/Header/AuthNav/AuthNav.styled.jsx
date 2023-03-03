import styled from 'styled-components';

export const AuthMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const AuthBtn = styled.button`
  padding: 8px 12px;
  font-size: 18px;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.secondaryDark};
  border: 1px solid ${p => p.theme.colors.secondaryDark};
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  cursor: pointer;
  transition: color 200ms ease, background-color 200ms ease, border 200ms ease;

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryDark};
    background-color: ${p => p.theme.colors.accentLight};
    border: 1px solid ${p => p.theme.colors.accentLight};
  }
`;
