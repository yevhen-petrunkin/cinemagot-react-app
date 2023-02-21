import styled from 'styled-components';

export const AuthMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const AuthBtn = styled.button`
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
