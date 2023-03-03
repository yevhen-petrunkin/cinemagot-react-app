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

export const SubmitBtn = styled.button`
  padding: 8px 12px;
  font-size: 18px;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.secondaryDark};
  border: 1px solid ${p => p.theme.colors.secondaryDark};
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  cursor: pointer;
  transition: color 200ms ease, background-color 200ms ease, border 200ms ease;

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryDark};
    background-color: ${p => p.theme.colors.accentLight};
    border: 1px solid ${p => p.theme.colors.accentLight};
  }
`;
