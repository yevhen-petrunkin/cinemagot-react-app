import styled from 'styled-components';

export const Backdrop = styled.div`
  ${({ theme: { space } }) => `
  position: fixed;
  top: ${space[0]};
  left: ${space[0]};
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.3);
  `}
`;

export const Content = styled.div`
  ${({ theme: { space, radii, shadows } }) => `
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${space[3]}px;
  max-width: 90vw;
  width: 100%;
  background-color: transparent;
  border-radius: ${radii[2]}px;
  box-shadow: ${shadows.minimum};
  overflow: hidden;
  `}
`;

export const ContentBox = styled.div`
  height: 90vh;
  overflow-y: auto;
`;

export const CloseBtn = styled.button`
  ${({ theme: { colors, sizes, borders, zIndices, shadows }, top, right }) => `
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
  `}
`;
