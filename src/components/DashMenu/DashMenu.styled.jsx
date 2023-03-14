import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavStyledLink = styled(NavLink)`
  padding: 12px 0;
  display: block;
  text-decoration: none;
  color: inherit;
  transition: background-color 200ms ease;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.defaultWeak};
    background-color: ${p => p.theme.colors.primaryWeak};
  }
  &.active {
    color: ${p => p.theme.colors.accentWeak};
    background-color: ${p => p.theme.colors.primaryStrong};
  }
`;
