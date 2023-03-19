import styled from 'styled-components';

export const DashContainer = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]}px auto;
  padding-top: ${space[1] * 30}px;
  display: grid;
  grid-template-columns: minmax(${space[1] * 58}px, ${space[1] * 58}px) 1fr;
    
  ${mediaQueries.large} {
    padding-top: ${space[1] * 28}px;
    }

  ${mediaQueries.medium} {
    padding-top: ${space[1] * 28}px;
    }

  ${mediaQueries.small} {
    padding-top: ${space[1] * 18}px;
    }

  ${mediaQueries.lowerSmall} {
    grid-template-columns: minmax(${space[1] * 40}px, ${space[1] * 40}px) 1fr;
  }

  ${mediaQueries.tiny} {
    padding-top: ${space[1] * 16}px;
    grid-template-columns: minmax(${space[1] * 30}px, ${space[1] * 30}px) 1fr;
    }`}
`;

export const DashBox = styled.section`
  ${({
    theme: { colors, fontSizes, letterSpacings, shadows, mediaQueries },
  }) => `
  min-height: 87vh;
  font-size: ${fontSizes[3]}px;
  text-align: center;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};
  background-color: ${colors.primary};
  box-shadow: ${shadows.elevated};

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
    letter-spacing: ${letterSpacings[1]}px;
  }
  `}
`;

export const UserBox = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  padding: ${space[5]}px;

  ${mediaQueries.lowerSmall} {
    padding: ${space[2]}px;
  }

  ${mediaQueries.tiny} {
    padding: ${space[1]}px;
  }
  `}
`;

export const UserCaption = styled.h1`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[4]}px;

  ${mediaQueries.lowerSmall} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const UserImg = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  margin-bottom: ${space[5]}px;
  border-radius: 50%;
  overflow: hidden;

  ${mediaQueries.lowerSmall} {
    margin-bottom: ${space[3]}px;
  }
  
  `}
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const UserList = styled.ul`
  ${({ theme: { space } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  list-style: none;
  
  `}
`;

export const UserItem = styled.li`
  ${({ theme: { space, mediaQueries } }) => `
  margin-bottom: ${space[1] * 6}px;

  ${mediaQueries.lowerSmall} {
    margin-bottom: ${space[3]}px;
  }
  
  `}
`;

export const UserBtnSet = styled.div`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
  }) => `
  margin-bottom: ${space[3]}px;
  display: flex;
  justify-content: center;
  gap: ${space[3]}px;
  `}
`;
