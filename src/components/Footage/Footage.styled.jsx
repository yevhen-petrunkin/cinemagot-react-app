import styled from 'styled-components';

export const VideoBox = styled.div`
  width: 89vw;
  height: 79vh;
  border: 4px solid ${p => p.theme.colors.accent};
  border-radius: 12px;
  overflow: hidden;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
  transform: translate(-2px, -2px);
`;
