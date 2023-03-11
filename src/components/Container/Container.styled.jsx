import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]}px auto;
  padding-top: ${space[4]}px;
  padding-bottom: ${space[4]}px;
  padding-left: ${space[3]}px;
  padding-right: ${space[3]}px;

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
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]}px auto;
  padding-top: ${space[1] * 30}px;
  height: 78vw;

  ${mediaQueries.huge} {
    max-width: 1440px;
    height: 1040px;
  }

  ${mediaQueries.extraLarge} {
    max-width: 1365px;
  }

   ${mediaQueries.large} {
    padding-top: ${space[1] * 28}px;
    max-width: 992px;
  }

  ${mediaQueries.medium} {
    padding-top: ${space[1] * 28}px;
    max-width: 960px;
  }

  ${mediaQueries.small} {
    padding-top: ${space[1] * 18}px;
    max-width: 720px;
  }

  ${mediaQueries.tiny} {
    padding-top: ${space[1] * 16}px;
    max-width: 425px;
  }`}
`;
