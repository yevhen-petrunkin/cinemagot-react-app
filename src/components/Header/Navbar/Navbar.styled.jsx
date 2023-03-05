import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul`
  margin: 0;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: 20px;
  padding-left: 40px;
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: ${p => p.theme.colors.accentLight};
  }
`;
