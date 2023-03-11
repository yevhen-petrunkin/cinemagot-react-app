import styled from 'styled-components';

export const LogoBox = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  display: flex;
  align-items: center;
  gap: ${space[5]}px;

  ${mediaQueries.small} {
    gap: ${space[2]}px;
  } `}
`;

export const ImgBox = styled.div`
  ${({ theme: { sizes, radii, mediaQueries } }) => `
  width: ${sizes[1] * 25}px;
  height: ${sizes[1] * 25}px;
  border-radius: ${radii[2]}px;
  overflow: hidden;

   ${mediaQueries.large} {
    width: ${sizes[1] * 23}px;
    height: ${sizes[1] * 23}px;
  }

   ${mediaQueries.small} {
    width: ${sizes[1] * 10}px;
    height: ${sizes[1] * 10}px;
  } `}
`;

export const LogoText = styled.span`
  ${({ theme: { fontSizes, fontWeights, letterSpacings, mediaQueries } }) => `
  font-size: ${fontSizes[2] * 2}px;
  font-weight: ${fontWeights[1]};
  letter-spacing: ${letterSpacings[4]}px;
  text-transform: uppercase;

  ${mediaQueries.medium} {
    font-size: ${fontSizes[1] * 2}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  } `}
`;
