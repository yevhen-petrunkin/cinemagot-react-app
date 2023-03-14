import styled from 'styled-components';
import Select from 'react-select';

export const Menu = styled.ul`
  ${({ theme: { space } }) => `
  padding: ${space[0]};
  margin: ${space[0]};
  list-style: none;
   
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
  
  ${mediaQueries.huge} {
    padding: ${space[3]}px ${space[0]};
  }

  ${mediaQueries.extraLarge} {
    padding: ${space[2]}px ${space[0]};
  }

  ${mediaQueries.large} {
    padding: ${space[2]}px ${space[0]};
  }

  ${mediaQueries.medium} {
    padding: ${space[2]}px ${space[0]};
  }
  `}
`;

export const Label = styled.label`
  display: 'block';
  cursor: pointer;
`;

export const Input = styled(Select)`
  ${({ theme: { space, colors, fontSizes, mediaQueries } }) => `
  margin-top: ${space[2]}px;
  display: block;
  width: 100%;
  font-size: ${fontSizes[2]}px;
  color: ${colors.secondaryStrong};
  text-shadow: none;


   ${mediaQueries.huge} {
    margin-top: ${space[4]}px;
    font-size: ${space[5]}px;
   }

  ${mediaQueries.extraLarge} {
    margin-top: ${space[2]}px;
    font-size: ${space[4]}px;
  }

  ${mediaQueries.large} {
    margin-top: ${space[2]}px;
    font-size: ${space[4]}px;
  }

    ${mediaQueries.medium} {
     margin-top: ${space[1]}px;
    font-size: ${space[3]}px;
  }
  `}
`;
