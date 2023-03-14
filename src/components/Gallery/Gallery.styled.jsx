import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.min.css';

export const StyledSwiper = styled(Swiper)`
  ${({ theme: { sizes, mediaQueries }, iswaiting }) => `
    overflow: visible;
    transition: transform 700ms ease;
  
  ${mediaQueries.huge} {
    height: ${sizes[1] * 255}px;
    transform: translateX(${iswaiting === 'true' ? 528 : 0}px);
  }

  ${mediaQueries.extraLarge} {
    height: ${sizes[1] * 192}px;
    transform: translateX(${iswaiting === 'true' ? 380 : 0}px);
  }

  ${mediaQueries.large} {
    height: ${sizes[1] * 192}px;
    transform: translateX(${iswaiting === 'true' ? 380 : 0}px);
  }

  ${mediaQueries.medium} {
    height: ${sizes[1] * 167}px;
    transform: translateX(${iswaiting === 'true' ? 344 : 0}px);
  }

  ${mediaQueries.small} {
    height: ${sizes[1] * 167}px;
    transform: translateX(0px);
  }

  ${mediaQueries.tiny} {
    height: ${sizes[1] * 167}px;
    transform: translateX(0px);
  }
  `}
`;

export const RewindIconBtn = styled.button`
  ${({
    theme: { space, colors, sizes, borders, radii, shadows, zIndices },
  }) => `
  position: absolute;
  top: ${space[1]}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndices[2]};
  padding: ${space[2]}px;
  width: ${sizes[1] * 9}px;
  height: ${sizes[1] * 9}px;
  color: ${colors.defaultWeak};
  background-color: ${colors.alert};
  border: ${borders.btn};
  border-radius: ${radii[1]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    border: ${borders.btnHover};
  }

  &:active {
    color: ${colors.accentWeak};
  }
    
  `}
`;
