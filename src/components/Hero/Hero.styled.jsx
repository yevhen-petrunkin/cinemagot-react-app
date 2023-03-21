import styled from 'styled-components';
import hero from 'images/heroholder.jpg';

export const VideoBox = styled.div`
  position: relative;
  margin: ${p => p.theme.space[0]} auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const Video = styled.video`
  ${({ theme: { space, zIndices } }) => `
  position: absolute;
  top: ${space[0]};
  bottom: ${space[0]};
  z-index: -${zIndices[1]};
  width: 100%;
  height: 100%;
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.8;
  object-fit: cover;
  object-position: center;
 
  `}
`;

export const HeroCaption = styled.h1`
  ${({ theme: { space, colors, fontSizes, shadows, mediaQueries } }) => `
  margin: ${space[0]} auto;
  margin-top: ${space[2]}px;
  font-size: ${fontSizes[1] * 10}px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: ${shadows.textCaption};
  color: ${colors.accent};
  

  ${mediaQueries.extraLarge} {
   font-size: ${fontSizes[1] * 8}px;
  }

  ${mediaQueries.large} {
    font-size: ${fontSizes[0] * 9}px;
  }

  ${mediaQueries.small} {
   font-size: ${fontSizes[0] * 7}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[5]}px;
  }
  `}
`;

export const HeroBtnSet = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  position: absolute;
  left: ${space[5]}px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${space[5]}px;

  ${mediaQueries.medium} {
    gap: ${space[4]}px;
  }

  ${mediaQueries.small} {
    gap: ${space[3]}px;
  }

  ${mediaQueries.tiny} {
    gap: ${space[2]}px;
  }
  `}
`;

export const VideoBtnSet = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  position: absolute;
  right: ${space[5]}px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: ${space[5]}px;

  ${mediaQueries.medium} {
    gap: ${space[4]}px;
  }

  ${mediaQueries.small} {
    gap: ${space[3]}px;
  }

  ${mediaQueries.tiny} {
    gap: ${space[2]}px;
  }
  `}
`;
