import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  padding: 0;
  margin: 0;
  display: flex;
  gap: ${space[5]}px;
  list-style: none;

  ${mediaQueries.large} {
    gap: ${space[4]}px;
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.medium} {
    font-size: ${fontSizes[3]}px;
  }

 ${mediaQueries.small} {
    gap: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

 ${mediaQueries.tiny} {
    margin-top: ${space[1] * 8}px;
    margin-bottom: ${space[1] * 8}px;
    flex-direction: column;
    align-items: center;
    gap: ${space[1] * 6}px;
    font-size: ${fontSizes[3]}px;
  } `}
`;

export const StyledNavLink = styled(NavLink)`
  ${({ theme: { colors } }) => `
  text-decoration: none;
  color: inherit;

  &.active {
    color: ${colors.accentWeak};
  } `}
`;
