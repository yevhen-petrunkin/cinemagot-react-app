import styled from 'styled-components';

export const GalleryBox = styled.div`
  ${({ theme: { colors, sizes, mediaQueries } }) => `
  position: relative;
  height: ${sizes[1] * 184}px;
  background-color: ${colors.defaultStrong};
  overflow: hidden;
  
  ${mediaQueries.huge} {
    height: ${sizes[1] * 255}px;
  }

  ${mediaQueries.extraLarge} {
    height: ${sizes[1] * 192}px;
  }

  ${mediaQueries.large} {
    height: ${sizes[1] * 192}px;
  }

  ${mediaQueries.medium} {
    height: ${sizes[1] * 167}px;
  }
  
  `}
`;

export const OpenSection = styled.div`
  position: relative;
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
