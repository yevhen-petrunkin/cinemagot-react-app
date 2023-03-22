import styled from 'styled-components';
import heading from 'images/heading-2.jpg';

export const HeaderSection = styled.header`
  ${({ theme: { zIndices, shadows, mediaQueries } }) => `
  position: fixed;
  top: 0;
  width: 100%;
  background-image: url(${heading});
  background-size: cover;
  background-position: 0 50%;
  background-repeat: no-repeat;
  z-index: ${zIndices[4]};
  box-shadow: ${shadows.elevated};
  overflow: hidden;

  ${mediaQueries.large} {
    background-position: 0 50%;
  }

 ${mediaQueries.medium} {
    background-position: 0 44%;
  }

 ${mediaQueries.small} {
    background-position: 0 56%;
  }

  ${mediaQueries.tiny} {
    background-position: 0 32%;
  } `}
`;

export const HeaderBg = styled.div`
  ${({ theme: { colors } }) => `
  position: relative;
  width: 100%;
  background-color: ${colors.primaryStrong};
  opacity: 0.9; `}
`;

export const HeaderBox = styled.div`
  ${({ theme: { space, colors, fontSizes, sizes, shadows, mediaQueries } }) => `
  position: relative;
  margin: ${space[0]} auto;
  padding-left: ${space[5]}px;
  padding-right: ${space[5]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${sizes[1] * 30}px;
  font-size: ${fontSizes[4]}px;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};

  ${mediaQueries.large} {
    font-size: ${fontSizes[3]}px;
    height: ${sizes[1] * 28}px;
  }

 ${mediaQueries.small} {
    height: ${sizes[1] * 18}px;
  }

  ${mediaQueries.tiny} {
    height: ${sizes[1] * 16}px;
  }
  `}
`;

export const Avatar = styled.img`
  ${({ theme: { sizes, shadows } }) => `
  width: ${sizes[1] * 9}px;
  height: ${sizes[1] * 9}px;
  border-radius: 50%;
  box-shadow: ${shadows.ordinary};
  opacity: 0.8;
  `}
`;

export const LogoText = styled.span`
  ${({
    theme: { fontSizes, fontWeights, letterSpacings, mediaQueries, shadows },
  }) => `
  font-size: 2.7vw;
  font-weight: ${fontWeights[1]};
  letter-spacing: ${letterSpacings[4]}px;
  text-transform: uppercase;
  text-shadow: ${shadows.textOrdinary};
  `}
`;
