import styled from 'styled-components';

export const Backdrop = styled.div`
  ${({ theme: { space } }) => `
  position: fixed;
  top: ${space[0]};
  left: ${space[0]};
  padding: 10vw;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.3);
  
  `}
`;

export const Content = styled.div`
  ${({ theme: { radii, shadows } }) => `
  position: relative;
  max-width: 90vw;
  width: 100%;
  background-color: transparent;
  border-radius: ${radii[2]}px;
  box-shadow: ${shadows.minimum};
  height: 90vh;
  overflow: hidden;

  `}
`;

export const CloseBtn = styled.button`
  ${({
    theme: { colors, sizes, borders, zIndices, shadows, mediaQueries },
    top,
    right,
  }) => `
  position: absolute;
  z-index: ${zIndices[2]};
  top: ${top}px;
  right: ${right}px;
  width: ${sizes[1] * 7}px;
  height: ${sizes[1] * 7}px;
  color: ${colors.defaultWeak};
  background-color: rgba(0, 0, 0, 0.5);
  border: ${borders.heroBtnSmall};
  border-radius: 50%;
  box-shadow: ${shadows.elevated};
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accent};
    border: ${borders.heroBtnSmallHover};
  }

  ${mediaQueries.large} {
    top: ${top - 12}px;
    right: ${right - 24}px;
  }

  ${mediaQueries.small} {
    top: ${top - 20}px;
    right: ${right - 28}px;
  }

  ${mediaQueries.tiny} {
    top: ${top - 8}px;
    right: ${right - 24}px;
    width: ${sizes[1] * 6}px;
    height: ${sizes[1] * 6}px;
  }
  `}
`;
