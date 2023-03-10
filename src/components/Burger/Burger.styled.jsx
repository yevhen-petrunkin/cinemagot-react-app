import styled from 'styled-components';

export const BurgerBackdrop = styled.div`
  position: absolute;
  z-index: 5;
  top: ${p => p.theme.space[1] * 16}px;
  width: ${p => (p.active ? 100 : 80)}vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateX(${p => (p.active ? 0 : -100)}%);
  transition: width 200ms ease, transform 200ms ease 300ms;
`;

export const BurgerBox = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80vw;
  height: 100vh;
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.theme.colors.primary};
`;
