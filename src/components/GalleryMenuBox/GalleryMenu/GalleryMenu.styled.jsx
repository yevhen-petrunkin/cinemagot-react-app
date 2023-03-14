import styled from 'styled-components';

export const Menu = styled.ul`
  ${({ theme: { space, mediaQueries } }) => `
  padding: ${space[0]};
  margin: ${space[0]};
  margin-bottom: ${space[2]}px;
  list-style: none;
  
  ${mediaQueries.medium} {
    margin-bottom: ${space[1]}px;
  }

  `}
`;

export const MenuItem = styled.li`
  ${({ theme: { space, colors, mediaQueries } }) => `
  padding: ${space[2]}px ${space[0]};
  transition: color 200ms ease;

  &:hover,
  &:focus {
    color: ${colors.accentWeak};
  } 
  
  ${mediaQueries.medium} {
     padding: ${space[2] - 2}px ${space[0]};
  }

  ${mediaQueries.small} {
     padding: ${space[2] - 2}px ${space[0]};
  }

  ${mediaQueries.tiny} {
     padding: ${space[2] - 2}px ${space[0]};
  }
  `}
`;

export const Label = styled.label`
  ${({ theme: { space, mediaQueries } }) => `
  position: relative;
  padding-left: ${space[1] * 7}px;
  display: 'block';
  cursor: pointer;
  
  ${mediaQueries.huge} {
    padding-left: ${space[1] * 10}px;
    
  }
  `}
`;

//------Visually Hidden------

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
