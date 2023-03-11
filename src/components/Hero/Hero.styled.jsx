import styled from 'styled-components';
import hero from 'images/heroholder.jpg';

export const VideoBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.8;
  object-fit: fill;
`;

export const HeroCaption = styled.h1`
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 10px ${p => p.theme.colors.defaultStrong};
  color: ${p => p.theme.colors.accent};

  @media only screen and (min-width: 1440px) {
    font-size: 120px;
  }

  @media only screen and (max-width: 1439px) {
    font-size: 110px;
  }

  @media only screen and (max-width: 1199px) {
    font-size: 72px;
  }

  @media only screen and (max-width: 991px) {
    font-size: 72px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 56px;
  }

  @media only screen and (max-width: 479px) {
    font-size: 28px;
  }
`;

export const HeroBtnSet = styled.div`
  position: absolute;
  left: 2vw;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1199px) {
    bottom: 40px;
  }

  @media only screen and (max-width: 991px) {
    gap: 16px;
    bottom: 40px;
  }

  @media only screen and (max-width: 767px) {
    gap: 12px;
    bottom: 20px;
  }

  @media only screen and (max-width: 479px) {
    bottom: 8px;
    gap: 8px;
  }
`;

export const VideoBtnSet = styled.div`
  position: absolute;
  right: 2vw;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1199px) {
    bottom: 40px;
  }

  @media only screen and (max-width: 991px) {
    gap: 16px;
    bottom: 40px;
  }

  @media only screen and (max-width: 767px) {
    gap: 12px;
    bottom: 20px;
  }

  @media only screen and (max-width: 479px) {
    gap: 8px;
    bottom: 8px;
  }
`;
