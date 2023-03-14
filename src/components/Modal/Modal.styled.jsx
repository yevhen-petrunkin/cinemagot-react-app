import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.5);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  background-color: ${p => p.theme.colors.primaryWeak};
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.blurred};
`;
