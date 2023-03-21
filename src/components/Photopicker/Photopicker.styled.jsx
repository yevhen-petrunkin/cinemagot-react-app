import styled from 'styled-components';

export const Backdrop = styled.div`
  ${({ theme: { space } }) => `
  position: fixed;
  top: ${space[0]};
  left: ${space[0]};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  `}
`;

export const Content = styled.div`
  ${({ theme: { space, colors, radii, shadows, mediaQueries } }) => `
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${space[5]}px;
  width: 90vw;
  height: ${space[1] * 165}px;
  background-color: ${colors.primaryStrong};
  border-radius: ${radii[2]}px;
  box-shadow: ${shadows.minimum};
  overflow-y: auto;

 ${mediaQueries.extraLarge} {
    height: ${space[1] * 147}px;
  }

  ${mediaQueries.large} {
    height: ${space[1] * 127}px;
  }

  ${mediaQueries.medium} {
    height: ${space[1] * 107}px;
  }

  ${mediaQueries.small} {
    height: ${space[1] * 117}px;
  }

  `}
`;

export const CloseBtn = styled.button`
  ${({ theme: { colors, sizes, borders, zIndices, shadows }, top, right }) => `
  position: absolute;
  z-index: ${zIndices[2]};
  top: ${top}px;
  right: ${right}px;
  width: ${sizes[1] * 7}px;
  height: ${sizes[1] * 7}px;
  color: ${colors.defaultWeak};
  background-color: rgba(0, 0, 0, 0.5);
  border: ${borders.heroBtnSmall};
  border-radius: 50%;
  box-shadow: ${shadows.elevated};
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accent};
    border: ${borders.heroBtnSmallHover};
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

  ${mediaQueries.medium} {
    font-size: ${fontSizes[6]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[4]}px;
  }
 
  ${mediaQueries.tiny} {
    font-size: ${fontSizes[2]}px;
    text-align: center;
  }

  `}
`;

export const Form = styled.form`
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
    text-align: center;
  ${mediaQueries.huge} {
    
  }

  ${mediaQueries.extraLarge} {
   
  }

  ${mediaQueries.large} {
    
  }

  ${mediaQueries.medium} {
    
  }

  ${mediaQueries.small} {
   
  }

  ${mediaQueries.tiny} {
    
  }
  `}
`;

export const PhotoBox = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  margin-bottom: ${space[5]}px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  aspect-ratio: 3 / 1.2;
  gap: ${space[3]}px;
  
  

  ${mediaQueries.medium} {
    grid-template-columns: repeat(4, 1fr);
    aspect-ratio: 3 / 2.2;
  }

  ${mediaQueries.small} {
    grid-template-columns: repeat(3, 1fr);
    aspect-ratio: 3 / 3.7;
  }

  ${mediaQueries.tiny} {
    grid-template-columns: repeat(2, 1fr);
    aspect-ratio: 3 / 7.2;
  }
  `}
`;

export const PhotoLabel = styled.label`
  ${({ theme: { borders, radii, shadows }, img }) => `
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: 110%;
  background-position: center center;
  border: ${borders.input};
  border-radius: ${radii[5]}px;
  box-shadow: ${shadows.ordinary};
  cursor: pointer;
  transition: background-size 750ms ease, border 750ms ease;

  &:hover, &:focus {
    background-size: 120%;
    border: ${borders.inputHover};
  }

  &:active {
    background-size: 110%;
    border: ${borders.heroBtn};
  }

  `}
`;

export const MagotName = styled.span`
  ${({ theme: { space, fontSizes, colors, shadows, mediaQueries } }) => `
  position: absolute;
  bottom: ${space[3]}px;
  left: ${space[3]}px;
  font-size: ${fontSizes[2]}px;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};
  transition: transform 750ms ease;

  ${PhotoLabel}:hover > & {
   transform: translateX(60%) scale(1.5);
  
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[1]}px;
  }

  `}
`;

export const Input = styled.input`
  ${({ theme: { space } }) => `
  position: absolute;
  top: ${space[3]}px;
  right: ${space[3]}px;
  `}
`;
