import styled from 'styled-components';
import heading from 'images/heading.jpg';

export const FooterSection = styled.footer`
  ${({ theme: { colors, shadows, mediaQueries } }) => `
  text-align: center;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};
  background-image: url(${heading});
  background-size: cover;
  background-position: 0 30%;
  background-repeat: no-repeat;
 
  `}
`;

export const FooterBg = styled.div`
  ${({ theme: { colors, mediaQueries } }) => `
  width: 100%;
  height: 100%;
  background-color: ${colors.primaryStrong};
  opacity: 0.9;
    
  `}
`;

export const FooterCapSection = styled.div`
  ${({ theme: { space, borders, mediaQueries } }) => `
  padding: ${space[1] * 10}px;
  margin: ${space[0]} auto;
  width: 70%;
  border-bottom: ${borders.heroBtn};

  ${mediaQueries.extraLarge} {
    padding: ${space[5]}px;
    border-bottom: ${borders.heroBtnSmall};
    width: 60%;
  }

  ${mediaQueries.large} {
    padding: ${space[4]}px;
    padding-top: ${space[0]};
    width: 80%;
  }

  ${mediaQueries.small} {
    width: 90%;
  }

  ${mediaQueries.tiny} {
    width: 100%;
  }
  `}
`;

export const FooterCaption = styled.h2`
  ${({ theme: { space, fontSizes, letterSpacings, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[1] * 3}px;
  letter-spacing: ${letterSpacings[2]}px;

  ${mediaQueries.extraLarge} {
    margin-bottom: ${space[4]}px;
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.medium} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
    letter-spacing: ${letterSpacings[1]}px;
  }
  
  `}
`;

export const FooterLine = styled.p`
  ${({ theme: { space, fontSizes, letterSpacings, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[5]}px;
  letter-spacing: ${letterSpacings[1]}px;

  ${mediaQueries.extraLarge} {
    margin-bottom: ${space[4]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.medium} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const FooterBtnSet = styled.ul`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  display: flex;
  justify-content: center;
  gap: ${space[5]}px;
  list-style: none;

  ${mediaQueries.extraLarge} {
    gap: ${space[4]}px;
  }

  ${mediaQueries.medium} {
    gap: ${space[3]}px;
  }
 
  `}
`;

export const FooterInfoSection = styled.section`
  ${({ theme: { space, borders, mediaQueries } }) => `
  padding: ${space[1] * 10}px;
  margin: ${space[0]} auto;
  display: flex;
  justify-content: center;
  gap: ${space[1] * 20}px;
  width: 70%;
  border-bottom: ${borders.heroBtn};
  
  ${mediaQueries.extraLarge} {
    padding: ${space[5]}px;
    gap: ${space[1] * 10}px;
    width: 60%;
    border-bottom: ${borders.heroBtnSmall};
  }

  ${mediaQueries.large} {
    padding: ${space[4]}px;
    width: 80%;
  }

  ${mediaQueries.medium} {
    padding: ${space[3]}px;
    
  }

  ${mediaQueries.small} {
    gap: ${space[1] * 6}px;
    width: 90%;
  }

  ${mediaQueries.tiny} {
    flex-direction: column-reverse;
    width: 100%;
  }
  `}
`;

export const ImgBox = styled.div`
  ${({ theme: { space, sizes, radii, mediaQueries } }) => `
  margin: ${space[0]} auto;
  width: ${sizes[1] * 40}px;
  height: ${sizes[1] * 40}px;
  border-radius: ${radii[3]}px;
  overflow: hidden;

  ${mediaQueries.extraLarge} {
    width: ${sizes[1] * 30}px;
    height: ${sizes[1] * 30}px;
  }

  ${mediaQueries.small} {
    width: ${sizes[1] * 24}px;
    height: ${sizes[1] * 24}px;
  } 
  
  ${mediaQueries.tiny} {
    width: ${sizes[1] * 30}px;
    height: ${sizes[1] * 30}px;
  }
  
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

export const LogoText = styled.p`
  ${({
    theme: {
      space,
      fontSizes,
      fontWeights,
      letterSpacings,
      mediaQueries,
      shadows,
    },
  }) => `
  margin: ${space[0]};
  margin-top: ${space[5]}px;
  font-size: ${fontSizes[4]}px;
  font-weight: ${fontWeights[1]};
  letter-spacing: ${letterSpacings[4]}px;
  text-transform: uppercase;
  text-shadow: ${shadows.textOrdinary};

  ${mediaQueries.extraLarge} {
    margin-top: ${space[4]}px;
    font-size: ${fontSizes[3]}px;
    letter-spacing: ${letterSpacings[3]}px;
  }

  ${mediaQueries.medium} {
    margin-top: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  } `}
`;

export const FooterMenuSection = styled.section`
  ${({ theme: { space, mediaQueries } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space[1] * 10}px;

  ${mediaQueries.extraLarge} {
    gap: ${space[5]}px;
  }

  ${mediaQueries.medium} {
    gap: ${space[4]}px;
  }
 
  `}
`;

export const FooterMenuCap = styled.h3`
  ${({ theme: { space, fontSizes, letterSpacings, mediaQueries } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[6]}px;
  letter-spacing: ${letterSpacings[0]}px;

  ${mediaQueries.extraLarge} {
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.medium} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  }
 
  `}
`;

export const FooterMenu = styled.ul`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  display: flex;
  justify-content: center;
  gap: ${space[1] * 10}px;
  list-style: none;

  ${mediaQueries.extraLarge} {
    gap: ${space[1] * 8}px;
  }

  ${mediaQueries.medium} {
    gap: ${space[1] * 6}px;
  }

  ${mediaQueries.small} {
    gap: ${space[4]}px;
  }

  ${mediaQueries.tiny} {
    gap: ${space[5]}px;
  }
  `}
`;

export const FooterMenuItem = styled.li`
  ${({ theme: { sizes, mediaQueries } }) => `
  width: ${sizes[1] * 10}px;
  height: ${sizes[1] * 10}px;

  ${mediaQueries.extraLarge} {
    width: ${sizes[1] * 8}px;
    height: ${sizes[1] * 8}px;
    
  }

  ${mediaQueries.tiny} {
    width: ${sizes[1] * 6}px;
    height: ${sizes[1] * 6}px;
  }
  `}
`;

export const FooterLink = styled.a`
  ${({ theme: { space, colors } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  color: currentColor;
  transition: color 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accentWeak};
  }

  `}
`;

export const FooterUnderSection = styled.section`
  ${({ theme: { space, mediaQueries } }) => `
  padding: ${space[1] * 10}px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space[3]}px;

  ${mediaQueries.extraLarge} {
    padding: ${space[5]}px;
  }

  ${mediaQueries.large} {
    padding: ${space[4]}px;
    padding-bottom: ${space[0]};
  }

  ${mediaQueries.medium} {
    padding: ${space[3]}px;
    padding-bottom: ${space[0]};
  }
  
  `}
`;

export const FooterUnderLine = styled.span`
  ${({ theme: { fontSizes, letterSpacings, mediaQueries } }) => `
  font-size: ${fontSizes[3]}px;
  letter-spacing: ${letterSpacings[0]}px;

  ${mediaQueries.extraLarge} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.medium} {
    font-size: ${fontSizes[1]}px;
  }
  
  `}
`;
