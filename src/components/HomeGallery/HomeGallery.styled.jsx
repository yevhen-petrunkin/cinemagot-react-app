import styled from 'styled-components';

export const List = styled.ul`
  ${({ theme: { space, mediaQueries } }) => `
  padding: ${space[0]};
  margin: ${space[0]};
  list-style: none;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: ${space[5]}px;
  
  ${mediaQueries.huge} {
    grid-template-columns: repeat(4, 1fr);
   
  }

  ${mediaQueries.extraLarge} {
   grid-template-columns: repeat(4, 1fr); 
    
  }

  ${mediaQueries.large} {
   grid-template-columns: repeat(3, 1fr); 
    
  }

  ${mediaQueries.medium} {
   grid-template-columns: repeat(3, 1fr); 
   gap: ${space[3]}px; 
  }

  ${mediaQueries.small} {
   grid-template-columns: repeat(2, 1fr);  
   gap: ${space[3]}px;
  }

  ${mediaQueries.tiny} {
   grid-template-columns: 1fr;
   gap: ${space[3]}px;  
  }
  `}
`;
