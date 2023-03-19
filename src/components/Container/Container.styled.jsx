import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]}px auto;
  padding: ${space[5]}px;
  
  ${mediaQueries.huge} {
    max-width: 1440px;
  }

  ${mediaQueries.extraLarge} {
    max-width: 1365px;
  }

  ${mediaQueries.large} {
    max-width: 992px;
  }

  ${mediaQueries.medium} {
    max-width: 960px;
  }

  ${mediaQueries.small} {
    max-width: 720px;
  }

  ${mediaQueries.tiny} {
    max-width: 425px;
  }`}
`;

export const FreeWrapper = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]}px auto;

  ${mediaQueries.huge} {
    max-width: 1440px;
  }

  ${mediaQueries.extraLarge} {
    max-width: 1365px;
  }

  ${mediaQueries.large} {
    max-width: 992px;
  }

 ${mediaQueries.medium} {
    max-width: 960px;
  }

  ${mediaQueries.small} {
    max-width: 720px;
  }

  ${mediaQueries.tiny} {
    max-width: 425px;
  }`}
`;

export const HeroWrapper = styled.div`
  ${({ theme: { space, sizes, mediaQueries } }) => `
  margin: ${space[0]}px auto;
  padding-top: ${space[1] * 30}px;
  

  ${mediaQueries.huge} {
    max-width: 1440px;
    height: ${sizes[1] * 260}px;
  }

  ${mediaQueries.extraLarge} {
    max-width: 1365px;
    height: ${(68 * 1365) / 100}px;
  }

   ${mediaQueries.large} {
    padding-top: ${space[1] * 28}px;
    max-width: 992px;
    height: ${(68 * 992) / 100}px;
  }

  ${mediaQueries.medium} {
    padding-top: ${space[1] * 28}px;
    max-width: 960px;
    height: ${(68 * 960) / 100}px;
  }

  ${mediaQueries.small} {
    padding-top: ${space[1] * 18}px;
    max-width: 720px;
    height: ${(68 * 720) / 100}px;
  }

  ${mediaQueries.tiny} {
    padding-top: ${space[1] * 16}px;
    max-width: 425px;
    height: ${(68 * 425) / 100}px;
  }
  `}
`;
