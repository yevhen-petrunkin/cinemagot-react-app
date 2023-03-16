import styled from 'styled-components';

export const VideoBox = styled.div`
  width: 88vw;
  height: 79vh;
  border: ${p => p.theme.borders.video};
  border-radius: 12px;
  overflow: hidden;
`;

export const Video = styled.iframe`
  width: 101%;
  height: 101%;
  transform: translate(-2px, -2px);
`;
