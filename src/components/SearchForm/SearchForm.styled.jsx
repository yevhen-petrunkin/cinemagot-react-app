import styled from 'styled-components';

export const Form = styled.form`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  margin: 0;
  padding: 6px;
  font-size: 18px;
  background-color: #cce2ff;
  border-color: #cce2ff;
  border-radius: 6px;

  :hover,
  :focus {
    border-color: #4183c4;
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  padding: 6px 12px;
  font-size: 18px;
  background-color: #cce2ff;
  border-color: #cce2ff;
  border-radius: 6px;
  cursor: pointer;

  :hover,
  :focus {
    color: white;
    background-color: #4183c4;
    border-color: #4183c4;
  }
`;
