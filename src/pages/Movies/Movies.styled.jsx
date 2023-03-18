import styled from 'styled-components';

export const MoviesBox = styled.div`
  ${({ theme: { space, sizes, mediaQueries } }) => `
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
  margin: 0;
  margin-bottom: 20px;
  font-size: 36px;
  color: ${p => p.theme.colors.defaultWeak};
  text-shadow: ${p => p.theme.shadows.textOrdinary};
`;
