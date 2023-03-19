import styled from 'styled-components';

export const DashContainer = styled.div`
  ${({ theme: { space, sizes, mediaQueries } }) => `
  margin: ${space[0]}px auto;
  padding-top: ${space[1] * 30}px;
  display: grid;
  grid-template-columns: minmax(232px, 232px) 1fr;
    
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
    grid-template-columns: minmax(160px, 160px) 1fr;
  }

  ${mediaQueries.tiny} {
    padding-top: ${space[1] * 16}px;
    grid-template-columns: minmax(120px, 120px) 1fr;
    }`}
`;

export const DashBox = styled.section`
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
  min-height: 87vh;
  font-size: 20px;
  text-align: center;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};
  background-color: ${colors.primary};
  box-shadow: ${shadows.elevated};

  ${mediaQueries.lowerSmall} {
    font-size: 16px;
  }

  ${mediaQueries.tiny} {
    font-size: 12px;
    letter-spacing: ${letterSpacings[1]}px;
  }
  `}
`;

export const UserBox = styled.div`
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
  padding: 20px;

  ${mediaQueries.lowerSmall} {
    padding: 8px;
  }

  ${mediaQueries.tiny} {
    padding: 4px;
  }
  `}
`;

export const UserCaption = styled.h1`
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
  margin-bottom: 20px;
  font-size: 24px;

  ${mediaQueries.lowerSmall} {
    margin-bottom: 12px;
    font-size: 16px;

  }

  ${mediaQueries.tiny} {
    font-size: 12px;
  }
  `}
`;

export const UserImg = styled.div`
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
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;

  ${mediaQueries.lowerSmall} {
    margin-bottom: 12px;
    
  }

  ${mediaQueries.tiny} {
    
  }
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const UserList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const UserItem = styled.li`
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
  margin-bottom: 24px;

  ${mediaQueries.lowerSmall} {
    margin-bottom: 12px;
  }

  ${mediaQueries.tiny} {
    
  }
  `}
`;

export const UserBtnSet = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
