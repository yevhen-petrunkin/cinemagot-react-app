import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 0;
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.default};
  text-shadow: ${p => p.theme.shadows.ordinary};
`;

export const MovieBox = styled.div`
  position: relative;
  min-width: 27vw;
  min-height: 60vh;
  border-radius: 12px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  overflow: hidden;
  transition: transform 750ms ease;
  will-change: transform;
`;

export const ImgBox = styled.div`
  position: absolute;
  z-index: -1;
  min-width: 100%;
  min-height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  transition: transform 750ms ease;
  will-change: transform;
`;

export const MovieName = styled.h3`
  position: relative;
  padding: 8px;
  margin: 0;
  width: 228px;
  font-size: 12px;
  text-align: left;
  background-color: ${p => p.theme.colors.secondaryDark};
  border-radius: 4px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  will-change: transform;
`;
