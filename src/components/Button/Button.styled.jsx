import styled from 'styled-components';

export const Btn = styled.button`
  ${({
    theme: {
      space,
      colors,
      letterSpacings,
      borders,
      radii,
      shadows,
      mediaQueries,
    },
    fontSize,
  }) => `
    padding: ${space[2]}px ${space[3]}px;
    font-size: ${fontSize}px;
    letter-spacing: ${letterSpacings[2]}px;
    color: ${colors.defaultWeak};
    background-color: ${colors.secondaryStrong};
    border: ${borders.btn};
    border-radius: ${radii[1]}px;
    box-shadow: ${shadows.ordinary};
    cursor: pointer;
    transition: color 300ms ease, border 300ms ease;

    &:hover,
    &:focus {
      border: ${borders.btnHover};
    }

    &:active {
      color: ${colors.accentWeak};
    }

   ${mediaQueries.large} {
      letter-spacing: ${letterSpacings[1]}px;
    }
  `}
`;

export const HeroBtn = styled.button`
  ${({
    theme: { space, colors, fontSizes, borders, radii, shadows, mediaQueries },
  }) => `
  padding: ${space[3]}px ${space[1] * 9}px;
  font-size: ${fontSizes[6]}px;
  color: ${colors.defaultWeak};
  background-color: transparent;
  border: ${borders.heroBtn};
  border-radius: ${radii[5]}px;
  box-shadow: ${shadows.elevated};
  cursor: pointer;
  transition: color 200ms ease, border 200ms ease;

  &:hover,
  &:focus {
    color: ${colors.accentWeak};
    background-color: rgba(0, 0, 0, 0.5);
    border: ${borders.heroBtnHover};
  }

  ${mediaQueries.large} {
    padding: ${space[3]}px ${space[1] * 7}px;
    font-size: ${fontSizes[4]}px;
    border-radius: ${radii[4]}px;
  }

  ${mediaQueries.small} {
    padding: ${space[2]}px ${space[4]}px;
    font-size: ${fontSizes[4]}px;
    border: ${borders.heroBtnSmall};
    border-radius: ${radii[3]}px;

    &:hover,
    &:focus {
      border: ${borders.heroBtnSmallHover};
    }
  }

  ${mediaQueries.tiny} {
    padding: ${space[1]}px ${space[3]}px;
    font-size: ${fontSizes[1]}px;
    border: ${borders.heroBtnSmall};
    border-radius: ${radii[2]}px;

    &:hover,
    &:focus {
      border: ${borders.heroBtnSmallHover};
    }
  }
  `}
`;

export const Default = styled.div`
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
  }) => ` `}
`;
