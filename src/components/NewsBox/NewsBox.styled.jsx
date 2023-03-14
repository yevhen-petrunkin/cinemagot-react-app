import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 84vh;
  overflow-y: auto;
`;

export const List = styled.ul`
  margin: 0;
  margin-bottom: 12px;
  padding: 0;
  list-style: none;
`;

export const Poster = styled.img`
  width: 260px;
  height: 400px;
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.ordinary};
`;

export const NewsArticle = styled.article`
  margin-bottom: 8px;
  padding: 12px;
  width: 260px;
  background-color: ${p => p.theme.colors.defaultWeak};
  border-radius: ${p => p.theme.radii[2]}px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  overflow: hidden;
`;

export const NewsLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.secondaryStrong};
`;

export const NewsImg = styled.img`
  width: 100%;
`;
