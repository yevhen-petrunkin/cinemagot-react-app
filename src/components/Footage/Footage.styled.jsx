import styled from 'styled-components';

export const VideoBox = styled.div`
  ${({ theme: { borders, radii, mediaQueries } }) => `
  width: 100%;
  height: 54vw;
  border: ${borders.video};
  border-radius: ${radii[3]}px;
  overflow: hidden;

  ${mediaQueries.tiny} {
    border-radius: ${radii[2]}px;
  }
  `}
`;

export const Video = styled.iframe`
  ${({ theme: { mediaQueries } }) => `
  width: 101%;
  height: 101%;
  transform: translate(-2px, -2px);

  ${mediaQueries.tiny} {
    width: 103%;
    height: 103%;
    
  }
  `}
`;
