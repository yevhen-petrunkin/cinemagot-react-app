import styled from 'styled-components';
import { Link } from 'react-router-dom';
import placeholder from 'images/photoholder.jpg';

export const MovieBox = styled.div`
  ${({ theme: { space, sizes, colors, mediaQueries } }) => `
  position: relative;
  padding-top: ${space[1] * 30}px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 12px;
  color: ${colors.defaultWeak};
  
   ${mediaQueries.large} {
    padding-top: ${space[1] * 28}px;
      }

  ${mediaQueries.medium} {
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
  width: 100%;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.ordinary};
  border-radius: 8px;
  overflow: hidden;

  &:nth-child(1) {
    padding: 12px;
    grid-column: 1/3;
  }

  &:nth-child(2) {
    aspect-ratio: 3 / 5;
  }

  &:nth-child(3) {
    padding: 12px;
  }

  &:nth-child(4) {
    padding: 12px;
    grid-column: 2/4;
  }
`;

export const PosterBox = styled.div`
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
    bgImg,
  }) => `
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
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 28px;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: 1.2;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const Companies = styled.ul`
  margin: 0;
  margin-bottom: 28px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Company = styled.li`
  padding: 8px;
  max-width: 47%;
  text-align: center;
  color: ${p => p.theme.colors.defaultStrong};
  background-color: ${p => p.theme.colors.secondaryWeak};
  border-radius: 20px;
  box-shadow: ${p => p.theme.shadows.elevated};
`;

export const CompName = styled.h3`
  margin: 12px 0;
  font-size: 20px;
`;

export const CompCountry = styled.p`
  margin: 12px 0;
  font-size: 20px;
`;

export const LogoBox = styled.div`
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
  width: 100%;
  
  `}
`;

export const AdditLink = styled(Link)`
  padding-top: 8px;
  padding-bottom: 8px;
  text-decoration: none;
  color: ${p => p.theme.colors.accentWeak};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms ease, text-decoration 300ms ease;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }
`;
