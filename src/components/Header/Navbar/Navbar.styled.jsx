import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  gap: ${p => p.theme.space[5]}px;
  list-style: none;

  @media only screen and (max-width: 1199px) {
    gap: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes[4]}px;
  }

  @media only screen and (max-width: 991px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }

  @media only screen and (max-width: 767px) {
    gap: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }

  @media only screen and (max-width: 479px) {
    margin-top: ${p => p.theme.space[1] * 8}px;
    margin-bottom: ${p => p.theme.space[1] * 8}px;
    flex-direction: column;
    align-items: center;
    gap: ${p => p.theme.space[1] * 6}px;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: ${p => p.theme.colors.accentWeak};
  }
`;
