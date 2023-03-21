import styled from 'styled-components';

export const MenuBox = styled.div`
  ${({ theme: { space, colors, fontSizes, shadows, mediaQueries } }) => `
  font-size: ${fontSizes[3]}px;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.accentWeak};

  ${mediaQueries.large} {
    gap: ${space[3]}px;
  }

  ${mediaQueries.lowerSmall} {
    gap: ${space[1]}px; 
    
  } `}
`;

export const UserBox = styled.div`
  ${({ theme: { space } }) => `
  margin-bottom: ${space[5]}px;
  display: flex;
  align-items: center;
  gap: ${space[3]}px;
  
  `}
`;

export const Avatar = styled.img`
  ${({ theme: { sizes, shadows } }) => `
  width: ${sizes[1] * 9}px;
  height: ${sizes[1] * 9}px;
  border-radius: 50%;
  box-shadow: ${shadows.ordinary};
  opacity: 0.8;
  `}
`;
