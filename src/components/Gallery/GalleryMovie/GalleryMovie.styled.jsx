import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  ${({ theme: { space } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space[5]}px;
  height: 100%; 
    
  `}
`;

export const MovieName = styled.h3`
  ${({ theme: { space, colors, fontSizes, radii, shadows, mediaQueries } }) => `
  padding: ${space[2]}px;
  margin: ${space[0]};
  width: 80%;
  font-size: ${fontSizes[2]}px;
  text-align: center;
  color: ${colors.defaultWeak};
  background-color: ${colors.secondaryStrong};
  border-radius: ${radii[1]}px;
  box-shadow: ${shadows.ordinary};

   ${mediaQueries.huge} {
    padding: ${space[3]}px;
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.extraLarge} {
    padding: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.large} {
    padding: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.medium} {
    padding: ${space[2]}px;
    font-size: ${fontSizes[1]}px;
  }

  ${mediaQueries.small} {
    padding: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.tiny} {
    padding: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme: { space, colors, shadows } }) => `
  position: relative;
  padding: ${space[0]};
  display: block;
  text-decoration: none;
  color: ${colors.defaultWeak};
  text-shadow: ${shadows.ordinary}; `}
`;

export const MovieBox = styled.div`
  ${({ theme: { sizes, radii, mediaQueries } }) => `
  position: relative;
  display: flex;
  align-items: center;
  width: ${sizes[1] * 120}px;
  height: ${sizes[1] * 175}px;
  border-radius: ${radii[3]}px;
  transition: transform 750ms ease;
  will-change: transform; 
  
  ${mediaQueries.huge} {
   width: ${sizes[1] * 140}px;
   height: ${sizes[1] * 200}px; 
  }

  ${mediaQueries.extraLarge} {
   width: ${sizes[1] * 105}px;
   height: ${sizes[1] * 150}px; 
  }

  ${mediaQueries.large} {
   width: ${sizes[1] * 90}px;
   height: ${sizes[1] * 130}px;  
  }

  ${mediaQueries.medium} {
   width: ${sizes[1] * 75}px;
   height: ${sizes[1] * 115}px;   
  }

  ${mediaQueries.small} {
   width: ${sizes[1] * 90}px;
   height: ${sizes[1] * 130}px;    
  }

  ${mediaQueries.tiny} {
   width: ${sizes[1] * 70}px;
   height: ${sizes[1] * 110}px;     
  }
  `}
`;

export const ImgBox = styled.div`
  ${({ theme: { radii, shadows } }) => `
  position: relative;
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: ${shadows.ordinary};
  border-radius: ${radii[3]}px;
  transition: transform 750ms ease;
  will-change: transform; 
    
  `}
`;

export const ImgBgBox = styled.div`
  ${({ theme: { space, radii, zIndices } }) => `
  position: absolute;
  top: ${space[0]};
  left: -${space[3]}px;
  z-index: -${zIndices[2]};
  min-width: 110%;
  min-height: 110%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${radii[3]}px;
  transform: rotate(-35deg);
  transition: transform 750ms ease;
  will-change: transform;
  opacity: 0.7;
  filter: blur(120px) saturate(6);
    
  `}
`;

export const RateBox = styled.div`
  ${({ theme: { space, sizes, radii, mediaQueries } }) => `
  position: absolute;
  right: ${space[0]};
  top: ${space[0]};
  padding: ${space[2]}px;
  width: ${sizes[1] * 35}px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: ${radii[2]}px;

  ${mediaQueries.medium} {
    width: ${sizes[1] * 28}px;
  }

  ${mediaQueries.small} {
   width: ${sizes[1] * 28}px;
  }

  ${mediaQueries.tiny} {
    width: ${sizes[1] * 24}px;
  }
  `}
`;
