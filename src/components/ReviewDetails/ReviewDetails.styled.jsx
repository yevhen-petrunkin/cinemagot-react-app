import styled from 'styled-components';

export const Review = styled.li`
  ${({ theme: { space, colors, fontSizes, radii, shadows, mediaQueries } }) => `
  margin-bottom: ${space[5]}px;
  font-size: ${fontSizes[3]}px;
  text-shadow: ${shadows.textOrdinary};
  color: ${colors.defaultWeak};
  background-color: ${colors.primary};
  border-radius: ${radii[3]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const Author = styled.p`
  ${({ theme: { space, colors, mediaQueries } }) => `
  margin: ${space[0]};
  padding: ${space[5]}px;
  display: flex;
  gap: ${space[3]}px;
  background-color: ${colors.primaryStrong};

 ${mediaQueries.medium} {
   gap: ${space[2]}px; 
  }

  ${mediaQueries.small} {
    padding: ${space[4]}px;
  }

  ${mediaQueries.tiny} {
    padding: ${space[3]}px;
  }
  `}
`;

export const Message = styled.p`
  ${({ theme: { space, mediaQueries } }) => `
  margin: ${space[0]};
  padding: ${space[5]}px;
  
  ${mediaQueries.small} {
    padding: ${space[4]}px;
  }

  ${mediaQueries.tiny} {
    padding: ${space[3]}px;
  }
  `}
`;
