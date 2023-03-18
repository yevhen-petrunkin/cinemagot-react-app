import styled from 'styled-components';
import { Link } from 'react-router-dom';
import placeholder from 'images/photoholder.jpg';

export const MovieBox = styled.div`
  ${({ theme: { space, colors, mediaQueries } }) => `
  position: relative;
  padding-top: ${space[1] * 30}px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: ${space[3]}px;
  color: ${colors.defaultWeak};
  
   ${mediaQueries.large} {
    padding-top: ${space[1] * 28}px;
    grid-template-columns: repeat(2, 1fr);
    }

  ${mediaQueries.medium} {
    padding-top: ${space[1] * 28}px;
    }

  ${mediaQueries.small} {
    padding-top: ${space[1] * 18}px;
    }

  ${mediaQueries.tiny} {
    padding-top: ${space[1] * 16}px;
    display: block;
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

export const ContentBox = styled.div`
  ${({ theme: { space, colors, radii, shadows, mediaQueries } }) => `
  width: 100%;
  color: ${colors.default};
  background-color: ${colors.primary};
  box-shadow: ${shadows.ordinary};
  border-radius: ${radii[2]}px;
  overflow: hidden;

  &:nth-child(1) {
    padding: ${space[3]}px;
    grid-column: 1/3;
  }

  &:nth-child(2) {
    aspect-ratio: 3 / 5;
  }

  &:nth-child(3) {
    padding: ${space[3]}px;
  }

  &:nth-child(4) {
    padding: ${space[3]}px;
  }

  &:nth-child(5) {
    padding: ${space[3]}px;
    grid-column: 2/4;
    grid-row: 2/5;
  }

  &:nth-child(6) {
    padding: ${space[3]}px;
    
  }

  ${mediaQueries.large} {

  &:nth-child(1) {
    padding: ${space[3]}px;
    grid-column: 1/3;
  }

   &:nth-child(2) {
    order: 2;
    grid-row: 2/4;
  }

  &:nth-child(3) {
    padding: ${space[3]}px;
  }

  &:nth-child(4) {
    padding: ${space[3]}px;
    grid-column: 1/3;
    grid-row: 4/5;
    order: 5;
  }

  &:nth-child(5) {
    padding: ${space[3]}px;
    grid-column: 1/3;
    grid-row: 5/6;
    order: 6;
  }

  &:nth-child(6) {
    padding: ${space[3]}px;
    order: 4;
  } 
  }

  ${mediaQueries.tiny} {
   &:nth-child(1) {
    padding: ${space[1]}px;
    margin-bottom: ${space[4]}px;
  } 

  &:nth-child(2) {
    margin-bottom: ${space[4]}px;
  }

  &:nth-child(3) {
    padding: ${space[1]}px;
    margin-bottom: ${space[4]}px;
  }

  &:nth-child(4) {
    padding: ${space[1]}px;
    margin-bottom: ${space[4]}px;
  }

  &:nth-child(5) {
    padding: ${space[1]}px;
    margin-bottom: ${space[4]}px;
  }

  &:nth-child(6) {
    padding: ${space[1]}px;
  } 
}
  `}
`;

export const PosterBox = styled.div`
  ${({ theme: { colors }, bgImg }) => `
  width: 100%;
  height: 90%;
  background-image: url('${bgImg ? bgImg : placeholder}');
  background-color: ${colors.secondaryStrong};
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
  transition: transform 750ms ease;

  &:hover, &:focus {
    transform: scale(1.02);
  }
  `}
`;

export const Caption = styled.h2`
  ${({ theme: { space, fontSizes, shadows, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[4]}px;
  text-shadow: ${shadows.textOrdinary};
  
  ${mediaQueries.medium} {
    margin-bottom: ${space[2]}px;
    font-size: ${fontSizes[3]}px;
  }
 
  ${mediaQueries.tiny} {
   font-size: ${fontSizes[2]}px; 
  }
  `}
`;

export const Text = styled.p`
  ${({
    theme: {
      space,
      fontSizes,
      lineHeights,
      letterSpacings,
      shadows,
      mediaQueries,
    },
  }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[3]}px;
  line-height: ${lineHeights[1]};
  letter-spacing: ${letterSpacings[1]};
  text-shadow: ${shadows.textOrdinary};

  ${mediaQueries.medium} {
    font-size: ${fontSizes[2]}px;
  }
  
  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const List = styled.ul`
  ${({ theme: { space } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  list-style: none;

  `}
`;

export const ListItem = styled.li`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[3]}px;

  ${mediaQueries.large} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
  }

 ${mediaQueries.medium} {
    margin-top: ${space[4]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;

    &:last-child {
      margin-bottom: ${space[0]};
    }
  }
  `}
`;

export const Companies = styled.ul`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[1] * 7}px;
  padding: ${space[0]};
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${space[3]}px;

  ${mediaQueries.large} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQueries.medium} {
    margin-bottom: ${space[3]}px;
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQueries.small} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQueries.tiny} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${space[2]}px;
    margin-bottom: ${space[0]};
  }
  `}
`;

export const Company = styled.li`
  ${({ theme: { space, colors, radii, shadows, mediaQueries } }) => `
  padding: ${space[2]}px;
  text-align: center;
  color: ${colors.defaultStrong};
  background-color: ${colors.secondaryWeak};
  border-radius: ${radii[5]}px;
  box-shadow: ${shadows.elevated};

  ${mediaQueries.tiny} {
    border-radius: ${radii[3]}px; 
  }
  `}
`;

export const CompName = styled.h3`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[3]}px ${space[0]};
  font-size: ${fontSizes[3]}px;
 
 ${mediaQueries.medium} {
    font-size: ${fontSizes[2]}px;
  }
  
  `}
`;

export const CompCountry = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[3]}px ${space[0]};
  font-size: ${fontSizes[3]}px;
  
 ${mediaQueries.medium} {
    margin: ${space[2]}px ${space[0]};
    font-size: ${fontSizes[2]}px;
  }
  
  `}
`;

export const LogoBox = styled.div`
  width: 100%;
`;

export const AdditLink = styled(Link)`
  ${({ theme: { space, colors } }) => `
  padding-top: ${space[2]}px;
  padding-bottom: ${space[2]}px;
  text-decoration: none;
  color: ${colors.accentWeak};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms ease, text-decoration 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accent};
    text-decoration: underline;
  }

  `}
`;
