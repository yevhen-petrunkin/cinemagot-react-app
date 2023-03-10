import styled from 'styled-components';

export const VideoBox = styled.div`
  position: relative;
  margin: 0 auto;
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
  opacity: 0.8;
  object-fit: fill;
`;

export const HeroCaption = styled.h1`
  margin: 20px 0 580px 0;
  text-align: center;
  text-transform: uppercase;
  text-shadow: ${p => p.theme.shadows.elevated};
  color: ${p => p.theme.colors.accent};

  @media only screen and (min-width: 1440px) {
    margin: 36px 0 660px 0;
    font-size: 120px;
  }

  @media only screen and (max-width: 1439px) {
    margin: 28px 0 640px 0;
    font-size: 110px;
  }

  @media only screen and (max-width: 1199px) {
    margin: 20px 0 452px 0;
    font-size: 80px;
  }

  @media only screen and (max-width: 991px) {
    margin: 20px 0 432px 0;
    font-size: 72px;
  }

  @media only screen and (max-width: 767px) {
    margin: 20px 0 300px 0;
    font-size: 56px;
  }

  @media only screen and (max-width: 479px) {
    margin: 20px 0 160px 0;
    font-size: 36px;
  }
`;

export const HeroBtnSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const VideoBtnSet = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
`;

export const VideoBtn = styled.button`
  padding: 8px 8px;
  font-size: 16px;
  color: ${p => p.theme.colors.accent};
  border: 1px solid ${p => p.theme.colors.accent};
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  box-shadow: ${p => p.theme.shadows.elevated};
  cursor: pointer;
  transition: color 200ms ease, border 200ms ease;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accentLight};
    border: 1px solid ${p => p.theme.colors.accentLight};
  }
`;
