import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  padding: 0;
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.default};
  text-shadow: ${p => p.theme.shadows.ordinary};
`;

export const MovieBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 30vw;
  min-height: 86vh;
  border-radius: 12px;
  transition: transform 750ms ease;
  will-change: transform;
`;

export const ImgBox = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 70vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: ${p => p.theme.shadows.ordinary};
  border-radius: 12px;
  transition: transform 750ms ease;
  will-change: transform;
`;

export const MovieName = styled.h3`
  position: absolute;
  top: 16px;
  left: 8px;
  padding: 8px;
  margin: 0;
  width: 80%;
  font-size: 16px;
  text-align: center;
  background-color: ${p => p.theme.colors.secondaryDark};
  border-radius: 4px;
  box-shadow: ${p => p.theme.shadows.ordinary};
`;

export const ImgBgBox = styled.div`
  position: absolute;
  top: 0px;
  left: -10px;
  z-index: -2;
  min-width: 110%;
  min-height: 74vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  transform: rotate(-35deg);
  transition: transform 750ms ease;
  will-change: transform;
  opacity: 0.7;
  filter: blur(120px) saturate(6);
`;
