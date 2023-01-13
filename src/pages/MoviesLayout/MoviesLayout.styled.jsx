import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  font-size: 20px;
  color: black;
  box-sizing: border-box;
  box-shadow: 0 2px 6px grey;
`;

export const NavMenu = styled.ul`
  margin: 0;
  padding-top: 20px;
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
`;
