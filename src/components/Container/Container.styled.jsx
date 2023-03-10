import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }

  @media only screen and (max-width: 1439px) {
    max-width: 1365px;
  }

  @media only screen and (max-width: 1199px) {
    max-width: 992px;
  }

  @media only screen and (max-width: 991px) {
    max-width: 960px;
  }

  @media only screen and (max-width: 767px) {
    max-width: 720px;
  }

  @media only screen and (max-width: 479px) {
    max-width: 425px;
  }
`;

export const FreeWrapper = styled.div`
  margin: 0 auto;
  box-sizing: border-box;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }

  @media only screen and (max-width: 1439px) {
    max-width: 1365px;
  }

  @media only screen and (max-width: 1199px) {
    max-width: 992px;
  }

  @media only screen and (max-width: 991px) {
    max-width: 960px;
  }

  @media only screen and (max-width: 767px) {
    max-width: 720px;
  }

  @media only screen and (max-width: 479px) {
    max-width: 425px;
  }
`;

export const HeroWrapper = styled.div`
  margin: 0 auto;
  box-sizing: border-box;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    max-height: 960px;
  }

  @media only screen and (max-width: 1439px) {
    max-width: 1365px;
    max-height: 910px;
  }

  @media only screen and (max-width: 1199px) {
    max-width: 992px;
    max-height: 661.33px;
  }

  @media only screen and (max-width: 991px) {
    max-width: 960px;
    max-height: 640px;
  }

  @media only screen and (max-width: 767px) {
    max-width: 720px;
    max-height: 480px;
  }

  @media only screen and (max-width: 479px) {
    max-width: 425px;
    max-height: 283.33px;
  }
`;
