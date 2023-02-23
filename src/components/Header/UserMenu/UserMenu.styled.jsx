import styled from 'styled-components';

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogOutBtn = styled.button`
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
