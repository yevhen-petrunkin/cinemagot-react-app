import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px;
  width: 100%;
  height: 84vh;
  overflow-y: auto;
`;

export const Caption = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0;
  margin-bottom: 12px;
  padding: 0;
  list-style: none;
`;

export const PosterBox = styled.div`
  width: 100%;
  height: 32vw;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.ordinary};
`;

export const Title = styled.h3`
  margin: 12px 0;
  font-size: 20px;
  text-align: center;
  letter-spacing: 1.1px;
`;

export const Slogan = styled.li`
  margin: 12px 0;
  color: ${p => p.theme.colors.accentWeak};
`;

export const Info = styled.li`
  margin-bottom: 8px;
`;

export const Point = styled.span`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.1px;
`;
