import styled from 'styled-components';

export const NewsBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const NewsArticle = styled.article`
  padding: 12px;
  width: 350px;

  background-color: ${p => p.theme.colors.default};
  border-radius: ${p => p.theme.radii[2]}px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  overflow: hidden;
`;

export const NewsLink = styled.a`
  color: ${p => p.theme.colors.secondaryDark};
`;

export const NewsImg = styled.img`
  width: 100%;
`;
