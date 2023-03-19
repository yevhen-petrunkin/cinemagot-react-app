import styled from 'styled-components';

export const NewsSection = styled.section`
  ${({ theme: { space, colors, mediaQueries } }) => `
  padding-top: ${space[1] * 30}px;
  color: ${colors.defaultStrong};

  ${mediaQueries.large} {
    padding-top: ${space[1] * 28}px;
  }

  ${mediaQueries.small} {
    padding-top: ${space[1] * 18}px;
  }

  ${mediaQueries.tiny} {
    padding-top: ${space[1] * 16}px;
  }
  `}
`;

export const Caption = styled.h1`
  ${({ theme: { space, colors, fontSizes, shadows, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[1] * 3}px;
  color: ${colors.defaultWeak};
  text-shadow: ${shadows.textOrdinary};

  ${mediaQueries.small} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.tiny} {
    margin-bottom: ${space[4]}px;
    font-size: ${fontSizes[4]}px;
    text-align: center;
  }

  `}
`;

export const NewsBox = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${space[5]}px;

  ${mediaQueries.medium} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${space[4]}px;
  }

  ${mediaQueries.small} {
    gap: ${space[3]}px;
  }

  ${mediaQueries.tiny} {
    grid-template-columns: repeat(1, 1fr);
    gap: ${space[4]}px;
  }
  `}
`;

export const NewsArticle = styled.article`
  ${({ theme: { space, colors, radii, shadows } }) => `
  padding: ${space[3]}px;
  background-color: ${colors.defaultWeak};
  border-radius: ${radii[2]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;
  `}
`;

export const NewsLink = styled.a`
  ${({ theme: { colors } }) => `
  text-decoration: none;
  color: ${colors.defaultStrong};
  `}
`;

export const NewsCaption = styled.h2`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[5]}px;
  
  ${mediaQueries.extraLarge} {
    margin-bottom: ${space[4]}px;
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.small} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  `}
`;

export const NewsImg = styled.img`
  width: 100%;
`;

export const NewsBody = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[5]}px ${space[0]};
  font-size: ${fontSizes[3]}px;

  ${mediaQueries.large} {
    margin: ${space[4]}px ${space[0]};
  }

  ${mediaQueries.medium} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.small} {
    margin: ${space[3]}px ${space[0]};
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[1]}px;
  }
  
  `}
`;

export const NewsDate = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  text-align: right;

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[1]}px;
  }
  
  `}
`;
