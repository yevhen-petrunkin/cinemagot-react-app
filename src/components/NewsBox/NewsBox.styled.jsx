import styled from 'styled-components';

export const Box = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  padding: ${space[5]}px;
  width: 100%;
  height: 84vh;
  overflow-y: auto;

  ${mediaQueries.large} {
    height: auto;
    overflow-y: visible;
  }

  ${mediaQueries.medium} {
    
  }

  ${mediaQueries.lowerSmall} {
    padding: ${space[3]}px;
  }

  ${mediaQueries.tiny} {
    padding: ${space[1]}px;
  }
  `}
`;

export const Caption = styled.h2`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  text-align: center;

 ${mediaQueries.medium} {
    margin-bottom: ${space[4]}px;
    font-size: ${fontSizes[5]}px;
  }

  ${mediaQueries.small} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.tiny} {
    margin-bottom: ${space[2]}px;
  }
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
  ${({ theme: { space, mediaQueries } }) => `
  width: 100%;
  height: 32vw;

  ${mediaQueries.large} {
    margin: ${space[0]} auto;
    height: 90vw;
  }

  ${mediaQueries.medium} {
    
  }

  ${mediaQueries.small} {
    height: 80vw;
  }

   

  ${mediaQueries.tiny} {
    height: 78vw;
  }
  `}
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
  ${({ theme: { space, fontSizes, letterSpacings, mediaQueries } }) => `
  margin: ${space[3]}px ${space[0]};
  font-size: ${fontSizes[3]}px;
  text-align: center;
  letter-spacing: ${letterSpacings[0]}px;

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const Slogan = styled.li`
  ${({ theme: { space, fontSizes, colors, mediaQueries } }) => `
  margin: ${space[3]}px ${space[0]};
  color: ${colors.accentWeak};

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const Info = styled.li`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin-bottom: ${space[2]}px;

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const Point = styled.span`
  ${({ theme: { fontSizes, fontWeights, letterSpacings, mediaQueries } }) => `
  font-size: ${fontSizes[2]}px;
  font-weight: ${fontWeights[1]};
  letter-spacing: ${letterSpacings[0]}px;

  ${mediaQueries.small} {
    font-size: ${fontSizes[1]}px;
  }

  
  `}
`;
