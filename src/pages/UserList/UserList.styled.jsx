import styled from 'styled-components';
import { Link } from 'react-router-dom';
import placeholder from 'images/photoholder.jpg';

export const Section = styled.section`
  ${({ theme: { space, colors, shadows } }) => `
  padding: ${space[5]}px ${space[5]}px;
  color: ${colors.defaultWeak};
  text-shadow: ${shadows.textOrdinary};
    
  `}
`;

export const Caption = styled.h2`
  ${({ theme: { space, fontSizes, shadows, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[4]}px;
  text-shadow: ${shadows.textOrdinary};
 
  ${mediaQueries.lowerSmall} {
    text-align: center;
  }

  ${mediaQueries.tiny} {
    margin-bottom: ${space[2]}px;
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const List = styled.ul`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${space[5]}px;
  
  ${mediaQueries.extraLarge} {
    gap: ${space[4]}px;
  }

  ${mediaQueries.large} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQueries.medium} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${space[3]}px;
  }

  ${mediaQueries.lowerSmall} {
    grid-template-columns: repeat(1, 1fr);
    
  }
  
  `}
`;

export const ListItem = styled.div`
  ${({ theme: { radii, shadows, mediaQueries } }) => `
  aspect-ratio: 3 / 4.8;
  border-radius: ${radii[3]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;
 
  ${mediaQueries.tiny} {
    border-radius: ${radii[2]}px;
  }
  `}
`;

export const MovieBox = styled.div`
  ${({ theme: { colors } }) => `
  position: relative;
  height: 85%;
  color: ${colors.defaultWeak};
  overflow: hidden;
    
  &:hover,
  &:focus, &.show {
    & > ${PosterBox} {
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

export const PosterBox = styled.div`
  ${({ theme: { colors }, bgImg }) => `
  width: 100%;
  height: 100%;
  background-image: url('${bgImg ? bgImg : placeholder}');
  background-color: ${colors.secondaryStrong};
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
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
    font-size: ${fontSizes[2]}px;
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
    font-size: ${fontSizes[1]}px;
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
    font-size: ${fontSizes[1]}px;
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
     font-size: ${fontSizes[2]}px;
  }
  `}
`;

export const UpButton = styled.button`
  ${({
    theme: { space, colors, borders, radii, shadows },
    width,
    height,
    bgcolor,
  }) => `
  margin: ${space[1] * 10}px auto;
  padding: ${space[2]}px;
  display: block;
  width: ${width}px;
  height: ${height}px;
  color: ${colors.defaultWeak};
  background-color: ${bgcolor};
  border: ${borders.btn};
  border-radius: ${radii[1]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    border: ${borders.btnHover};
  }

  &:active {
    color: ${colors.accentWeak};
  } `}
`;
