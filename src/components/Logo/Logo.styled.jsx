import styled from 'styled-components';

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;

  @media only screen and (max-width: 767px) {
    gap: ${p => p.theme.space[2]}px;
  }
`;

export const ImgBox = styled.div`
  width: ${p => p.theme.sizes[1] * 25}px;
  height: ${p => p.theme.sizes[1] * 25}px;
  border-radius: ${p => p.theme.radii[2]}px;
  overflow: hidden;

  @media only screen and (max-width: 1199px) {
    width: ${p => p.theme.sizes[1] * 23}px;
    height: ${p => p.theme.sizes[1] * 23}px;
  }

  @media only screen and (max-width: 767px) {
    width: ${p => p.theme.sizes[1] * 10}px;
    height: ${p => p.theme.sizes[1] * 10}px;
  }
`;

export const LogoText = styled.span`
  font-size: ${p => p.theme.fontSizes[2] * 2}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings[4]}px;
  text-transform: uppercase;

  @media only screen and (max-width: 991px) {
    font-size: ${p => p.theme.fontSizes[1] * 2}px;
  }

  @media only screen and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;
