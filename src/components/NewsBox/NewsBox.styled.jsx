import styled from 'styled-components';

export const Box = styled.div`
  ${({ theme: { space } }) => `
  padding: ${space[5]}px;
  width: 100%;
  height: 84vh;
  overflow-y: auto;
  `}
`;

export const Caption = styled.h2`
  ${({ theme: { space } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  text-align: center;
  `}
`;

export const List = styled.ul`
  ${({ theme: { space } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[3]}px;
  padding: ${space[0]};
  list-style: none;
  `}
`;

export const PosterBox = styled.div`
  width: 100%;
  height: 32vw;
`;

export const Poster = styled.img`
  ${({ theme: { radii, shadows } }) => `
  width: 100%;
  height: 100%;
  border-radius: ${radii[2]}px;
  box-shadow: ${shadows.ordinary};
  `}
`;

export const Title = styled.h3`
  ${({ theme: { space, fontSizes, letterSpacings } }) => `
  margin: ${space[3]}px ${space[0]};
  font-size: ${fontSizes[3]}px;
  text-align: center;
  letter-spacing: ${letterSpacings[0]}px;
  `}
`;

export const Slogan = styled.li`
  ${({ theme: { space, colors } }) => `
  margin: ${space[3]}px ${space[0]};
  color: ${colors.accentWeak};
  `}
`;

export const Info = styled.li`
  ${({ theme: { space } }) => `
  margin-bottom: ${space[2]}px;
  `}
`;

export const Point = styled.span`
  ${({ theme: { fontSizes, fontWeights, letterSpacings } }) => `
  font-size: ${fontSizes[2]}px;
  font-weight: ${fontWeights[1]};
  letter-spacing: ${letterSpacings[0]}px;
  `}
`;
