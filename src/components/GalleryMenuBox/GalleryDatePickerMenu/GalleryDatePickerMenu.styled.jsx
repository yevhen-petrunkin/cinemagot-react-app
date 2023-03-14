import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Menu = styled.ul`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  padding: ${space[0]};
  margin: ${space[0]};
  list-style: none;

  ${mediaQueries.huge} {
  font-size: ${fontSizes[5]}px;
   }
   `}
`;

export const MenuItem = styled.li`
  ${({ theme: { space, colors } }) => `
   padding: ${space[2]}px ${space[0]};
  transition: color 200ms ease;

  &:hover,
  &:focus {
    color: ${colors.accentWeak};
  } `}
`;

export const Label = styled.label`
  display: 'block';
  cursor: pointer;
`;

export const Input = styled(DatePicker)`
  ${({ theme: { space, colors, fontSizes, sizes, radii, mediaQueries } }) => `
  margin-top: ${space[2]}px;
  display: block;
  width: 100%;
  height: ${sizes[1] * 10}px;
  font-size: ${fontSizes[2]}px;
  text-shadow: none;
  color: ${colors.secondaryStrong};
  background-color: ${colors.defaultWeak};
  border: none;
  border-radius: ${radii[1]}px;
  outline: none;

  &:hover,
  &focus {
    outline: none;
  }
  
  ${mediaQueries.huge} {
    margin-top: ${space[3]}px;
    font-size: ${fontSizes[3]}px;
 
  }`}
`;
