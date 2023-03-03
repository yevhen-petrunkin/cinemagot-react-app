import styled from 'styled-components';

export const NewsBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const NewsArticle = styled.article`
  padding: 12px;
  width: 340px;

  background-color: ${p => p.theme.colors.default};
  border-radius: ${p => p.theme.radii[2]}px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  overflow: hidden;
`;

export const NewsLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.secondaryDark};
`;

export const NewsImg = styled.img`
  width: 100%;
`;
