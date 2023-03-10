import styled from 'styled-components';
import Select from 'react-select';

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 8px 0;
`;

export const Label = styled.label`
  display: 'block';
  cursor: pointer;
`;

export const Input = styled(Select)`
  margin-top: 8px;
  display: block;
  font-size: 16px;
  color: ${p => p.theme.colors.secondaryDark};
`;
