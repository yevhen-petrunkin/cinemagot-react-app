import styled from 'styled-components';

export const MenuBox = styled.div`
  ${({ theme: { space, colors, fontSizes, shadows, mediaQueries } }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space[5]}px;
  font-size: ${fontSizes[3]}px;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.accentWeak};

  ${mediaQueries.large} {
    gap: ${space[3]}px;
  }

  ${mediaQueries.lowerSmall} {
    gap: ${space[1]}px; 
    
  }
  
  ${mediaQueries.tiny} {
    display: block; 
    
  }`}
`;

export const UserBox = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  
  display: flex;
  align-items: center;
  gap: ${space[3]}px;

  ${mediaQueries.tiny} {
    margin-bottom: ${space[5]}px; 
    
  }
  
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
