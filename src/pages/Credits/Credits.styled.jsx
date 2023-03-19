import styled from 'styled-components';

export const ContentBox = styled.div`
  ${({ theme: { space, colors, radii, shadows, mediaQueries } }) => `
  padding: ${space[3]}px;
  width: 100%;
  color: ${colors.defaultWeak};
  background-color: ${colors.primary};
  box-shadow: ${shadows.ordinary};
  border-radius: ${radii[2]}px;
  overflow: hidden;

  ${mediaQueries.tiny} {
    padding: ${space[1]}px;
  }
  `}
`;

export const Caption = styled.h2`
  ${({
    theme: { space, fontSizes, letterSpacings, shadows, mediaQueries },
  }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[6]}px;
  letter-spacing: ${letterSpacings[1]}px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: ${shadows.textOrdinary};

  ${mediaQueries.small} {
    margin-bottom: ${space[3]}px;
  }

  ${mediaQueries.tiny} {
    margin: ${space[3]}px ${space[1]}px;
    font-size: ${fontSizes[3]}px;
  }
  `}
`;

export const List = styled.ul`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[1] * 8}px;
  padding: ${space[0]};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  gap: ${space[5]}px;
  font-size: ${fontSizes[3]}px;
  list-style: none;

  ${mediaQueries.extraLarge} {
    gap: ${space[4]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.large} {
    grid-template-columns: repeat(4, 1fr);
    gap: ${space[3]}px;
  }

  ${mediaQueries.medium} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${space[4]}px;
  }

  ${mediaQueries.small} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${space[5]}px;
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    grid-template-columns: repeat(1, 1fr);
  }
  `}
`;
