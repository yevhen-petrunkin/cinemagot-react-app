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
  ${({ theme: { space, colors, fontSizes, shadows } }) => `
  margin: ${space[0]};
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[1] * 3}px;
  color: ${colors.defaultWeak};
  text-shadow: ${shadows.textOrdinary};
  `}
`;
