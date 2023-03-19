import styled from 'styled-components';

export const MoviesBox = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
    padding-top: ${space[1] * 30}px;
        
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
    }`}
`;

export const Caption = styled.h1`
  ${({ theme: { space, colors, fontSizes, shadows, mediaQueries } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[1] * 3}px;
  color: ${colors.defaultWeak};
  text-shadow: ${shadows.textOrdinary};
 
  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1] * 2}px;
    text-align: center;
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
