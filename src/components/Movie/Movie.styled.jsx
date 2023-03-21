import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieBox = styled.div`
  ${({ theme: { colors, radii, shadows } }) => `
  position: relative;
  aspect-ratio: 2 / 3;
  color: ${colors.defaultWeak};
  border-radius: ${radii[3]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;
    
  &:hover,
  &:focus, &.show {
    & > ${ImgBox} {
      transform: scale(1.1);
    }

    & > ${InfoBox} {
      transform: translateY(-100%);
    }
    & > ${InfoBox} > ${MovieName} {
      &::after {
        width: 100%;
      }
    }
  }
  `}
`;

export const ImgBox = styled.div`
  ${({ theme: { radii, zIndices }, img }) => `
  position: absolute;
  z-index: -${zIndices[1]};
  min-width: 100%;
  min-height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 100%), url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${radii[3]}px;
  transition: transform 750ms ease;
  will-change: transform;
  
  `}
`;

export const InfoBox = styled.div`
  ${({ theme: { space, colors } }) => `
  position: absolute;
  bottom: -100%;
  padding: ${space[3]}px;
  padding-top: ${space[5]}px;
  width: 100%;
  height: 100%;
  transition: transform 750ms ease 500ms;
  will-change: transform;
  color: ${colors.defaultWeak};
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  
`}
`;

export const MovieName = styled.h3`
  ${({ theme: { space, fontSizes, sizes, colors, shadows, mediaQueries } }) => `
  position: relative;
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  width: 90%;
  font-size: ${fontSizes[3]}px;
  text-align: left;
  box-shadow: ${shadows.ordinary};
 
  &::after {
    content: '';
    position: absolute;
    left: ${space[0]};
    bottom: -${space[1]}px;
    width: ${sizes[0]};
    height: ${sizes[1]}px;
    transition: width 750ms ease 750ms;
    background-color: ${colors.accent};
  }

  ${mediaQueries.huge} {
    padding-bottom: ${space[3]}px;
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.extraLarge} {
    padding-bottom: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }
  
  ${mediaQueries.large} {
    padding-bottom: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.medium} {
    padding-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.small} {
    padding-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    padding: ${space[2]}px ${space[0]};
    width: 90%;
    font-size: ${fontSizes[3]}px;
  }
  `}
`;

export const Info = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
    margin: ${space[3]}px ${space[0]};
    margin-bottom: ${space[5]}px;
    padding-right: ${space[3]}px;
    height: 50%;
    overflow-y: auto;


  ${mediaQueries.huge} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.extraLarge} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.large} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.medium} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[2]}px;
  }
  
  `}
`;

export const Date = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
   margin: ${space[0]};
  font-size: ${fontSizes[2]}px;
  
  ${mediaQueries.huge} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.extraLarge} {
    font-size: ${fontSizes[2]}px;
  }

   ${mediaQueries.small} {
    font-size: ${fontSizes[1]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[2]}px;
  }
  `}
`;

export const RateBox = styled.div`
  width: 33%;
`;

export const StyledLink = styled(Link)`
  ${({ theme: { space, colors, fontSizes, shadows, mediaQueries } }) => `
  position: absolute;
  bottom: ${space[2]}px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${space[5]}px ${space[0]};
  display: block;
  text-decoration: underline;
  color: ${colors.defaultWeak};
  text-shadow: ${shadows.ordinary};
  transform: color 500ms ease;

  &:hover, &:focus {
    color: ${colors.accent};
  }
  
  ${mediaQueries.huge} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.extraLarge} {
     font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.large} {
     font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.medium} {
     font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.small} {
     font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
     font-size: ${fontSizes[3]}px;
  }
  `}
`;
