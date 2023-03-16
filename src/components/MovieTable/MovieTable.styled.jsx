import styled from 'styled-components';

export const CaptionBox = styled.div`
  ${({ theme: { space, sizes, radii, shadows } }) => `
  display: flex;
  justify-content: space-between;
  text-shadow: ${shadows.textOrdinary};
  
  `}
`;

export const MainCaption = styled.h1`
  margin: 0;
  font-size: 28px;
`;

export const Date = styled.span`
  margin-left: 16px;
  font-size: 20px;
`;

export const Tagline = styled.p`
  margin: 16px 0;
  font-size: 20px;
`;

export const RateBox = styled.div`
  ${({ theme: { space, sizes, radii } }) => `
  padding: ${space[2]}px;
  width: ${sizes[1] * 28}px;

  `}
`;

export const Table = styled.table`
  ${({ theme: { space, sizes, radii, borders, shadows } }) => `
  width: 100%;
  text-shadow: ${shadows.textOrdinary};
  
  `}
`;

export const TabCategory = styled.td`
  ${({ theme: { space, sizes, colors, radii, borders, shadows } }) => `
  padding: 8px;
  background-color: ${colors.primaryStrong};
  border-shadow: ${shadows.ordinary};
  
  `}
`;

export const TabData = styled.td`
  ${({ theme: { space, colors, sizes, radii, borders } }) => `
  padding: 8px;
  background-color: ${colors.primaryStrong};
  
  `}
`;
