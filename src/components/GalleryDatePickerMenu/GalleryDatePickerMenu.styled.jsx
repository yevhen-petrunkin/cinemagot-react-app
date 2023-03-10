import styled from 'styled-components';
import DatePicker from 'react-datepicker';

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

export const Input = styled(DatePicker)`
  margin-top: 8px;
  display: block;
  width: 98%;
  height: 36px;
  font-size: 16px;
  color: ${p => p.theme.colors.secondaryDark};
  border-radius: 4px;
  outline: none;

  &:hover,
  &focus {
    outline: none;
  }
`;
