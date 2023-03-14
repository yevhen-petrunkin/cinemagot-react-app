import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.3);
`;

export const Content = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  max-width: 90vw;
  width: 100%;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.minimum};
  overflow: hidden;
`;

export const ContentBox = styled.div`
  height: 90vh;
  overflow-y: auto;
`;
