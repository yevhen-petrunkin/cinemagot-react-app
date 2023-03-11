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
  z-index: ${zIndices[5]};
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
