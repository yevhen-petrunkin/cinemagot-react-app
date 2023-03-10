import styled from 'styled-components';
import heading from 'images/heading.jpg';

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-image: url(${heading});
  background-size: cover;
  background-position: 0 32%;
  background-repeat: no-repeat;
  z-index: ${p => p.theme.zIndices[5]};
  box-shadow: ${p => p.theme.shadows.elevated};
  overflow: hidden;

  @media only screen and (max-width: 1199px) {
    background-position: 0 34%;
  }

  @media only screen and (max-width: 991px) {
    background-position: 0 35%;
  }

  @media only screen and (max-width: 767px) {
    background-position: 0 36%;
  }

  @media only screen and (max-width: 479px) {
    background-position: 0 37%;
  }
`;

export const HeaderBg = styled.div`
  width: 100%;
  background-color: ${p => p.theme.colors.primaryStrong};
  opacity: 0.9;
`;

export const HeaderBox = styled.div`
  position: relative;
  margin: ${p => p.theme.space[0]} auto;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${p => p.theme.sizes[1] * 30}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  text-shadow: 1px 1px 2px ${p => p.theme.colors.defaultStrong};
  color: ${p => p.theme.colors.defaultWeak};

  @media only screen and (max-width: 1199px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    height: ${p => p.theme.sizes[1] * 28}px;
  }

  @media only screen and (max-width: 767px) {
    height: ${p => p.theme.sizes[1] * 18}px;
  }

  @media only screen and (max-width: 479px) {
    height: ${p => p.theme.sizes[1] * 16}px;
  }
`;
