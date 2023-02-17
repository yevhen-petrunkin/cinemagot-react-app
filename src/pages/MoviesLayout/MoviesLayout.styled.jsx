import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  font-size: 20px;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.primaryDark};
  box-sizing: border-box;
  box-shadow: ${p => p.theme.shadows.elevated};
`;

export const NavMenu = styled.ul`
  margin: 0;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: 20px;
  padding-left: 40px;
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavStyledLink = styled(NavLink)`
  color: inherit;
  &.active {
    color: red;
  }
`;

export const MainContainer = styled.div`
  padding: 20px;
  padding-left: 40px;
  background-color: ${p => p.theme.colors.primaryLight};
`;
