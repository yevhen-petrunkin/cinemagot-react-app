import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  margin: 0;
  padding: 8px;
  font-size: 18px;
  background-color: ${p => p.theme.colors.default};
  border: 3px solid ${p => p.theme.colors.secondaryDark};
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  transition: border 200ms ease;
  outline: none;

  &:hover,
  &:focus {
    border: 3px solid ${p => p.theme.colors.accentLight};
    outline: none;
  }
`;
