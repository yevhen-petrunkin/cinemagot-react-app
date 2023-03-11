import styled from 'styled-components';

export const BurgerBackdrop = styled.div`
  ${({ theme: { space, zIndices }, active }) => `
  position: absolute;
    top: ${space[1] * 16}px;
  z-index: ${zIndices[5]};
  width: ${active ? 100 : 80}vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateX(${active ? 0 : -100}%);
  transition: width 200ms ease, transform 200ms ease 300ms; `}
`;

export const BurgerBox = styled.div`
  ${({ theme: { space, colors } }) => `
  padding-top: ${space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[5]}px;
  width: 80vw;
  height: 100vh;
  color: ${colors.defaultWeak};
  background-color: ${colors.primary};
  `}
`;
