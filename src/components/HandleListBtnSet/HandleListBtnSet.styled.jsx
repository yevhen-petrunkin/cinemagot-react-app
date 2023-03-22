import styled from 'styled-components';

export const BtnSet = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 10%;
`;

export const Btn = styled.button`
  ${({ theme: { space, colors, fontSizes, borders, mediaQueries } }) => `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${space[2]}px;
  font-size: ${fontSizes[5]}px;
  color: ${colors.defaultWeak};
  background-color: ${colors.accent};
  border: none;
  outline:  ${borders.btn};
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: ${colors.accentWeak};
  }

  &:disabled {
    background-color: ${colors.secondaryStrong};
    cursor: not-allowed;
  }

  ${mediaQueries.extraLarge} {
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.large} {
    font-size: ${fontSizes[5]}px; 
  }

  ${mediaQueries.medium} {
    font-size: ${fontSizes[4]}px; 
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[2]}px;
   
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[3]}px; 
  }
  `}
`;

export const BtnText = styled.span`
  ${({ theme: { fontSizes, mediaQueries } }) => `
  font-size: ${fontSizes[2]}px;

  ${mediaQueries.extraLarge} {
   font-size: ${fontSizes[1]}px;
  }

  ${mediaQueries.large} {
   font-size: ${fontSizes[2]}px; 
  }

  ${mediaQueries.medium} {
   font-size: ${fontSizes[1]}px; 
  }
 
  `}
`;
