import styled from 'styled-components';

export const CaptionBox = styled.div`
  ${({ theme: { shadows } }) => `
  display: flex;
  justify-content: space-between;
  text-shadow: ${shadows.textOrdinary};
  
  `}
`;

export const MainCaption = styled.h1`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[5]}px;
  
 ${mediaQueries.medium} {
   font-size: ${fontSizes[4]}px; 
  }

  ${mediaQueries.small} {
   font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.tiny} {
   font-size: ${fontSizes[2]}px; 
  }
  `}
`;

export const Date = styled.span`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
    margin-left: ${space[4]}px;
    font-size: ${fontSizes[3]}px;

  ${mediaQueries.medium} {
   font-size: ${fontSizes[2]}px;  
  }

  ${mediaQueries.small} {
    margin: ${space[0]};
    margin-top: ${space[3]}px;
    display: block;
    font-size: ${fontSizes[1]}px; 
  }

  ${mediaQueries.tiny} {
    margin-top: ${space[2]}px;
    font-size: ${fontSizes[1]}px;  
  }
  `}
`;

export const RateBox = styled.div`
  ${({ theme: { space, sizes, mediaQueries } }) => `
    padding: ${space[2]}px;
    width: ${sizes[1] * 28}px;

  ${mediaQueries.small} {
    padding: ${space[0]} ${space[2]}px;
    width: ${sizes[1] * 20}px; 
  }

  ${mediaQueries.tiny} {
    width: ${sizes[1] * 24}px;   
  }

  `}
`;

export const Tagline = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[4]}px ${space[0]};
  font-size: ${fontSizes[3]}px;

  ${mediaQueries.small} {
    margin: ${space[3]}px ${space[0]};
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    margin: ${space[2]}px ${space[0]};
    font-size: ${fontSizes[1]}px; 
  }
  `}
`;

export const Table = styled.table`
  ${({ theme: { shadows } }) => `
    width: 100%;
    text-shadow: ${shadows.textOrdinary};
    `}
`;

export const TabCategory = styled.td`
  ${({ theme: { space, fontSizes, sizes, colors, mediaQueries } }) => `
    padding: ${space[2]}px;
    background-color: ${colors.primaryStrong};
 
  ${mediaQueries.small} {
    padding: ${space[1]}px;
    font-size: ${fontSizes[1]}px; 
  }

  ${mediaQueries.tiny} {
    max-width: ${sizes[1] * 20}px;
    font-size: ${fontSizes[1]}px; 
  }
 
  `}
`;

export const TabData = styled.td`
  ${({ theme: { space, fontSizes, colors, mediaQueries } }) => `
    padding: ${space[1]}px;
    background-color: ${colors.primaryStrong};

  ${mediaQueries.small} {
    font-size: ${fontSizes[1]}px;  
  }
 
  `}
`;
