import styled from 'styled-components';

export const BtnSet = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 10%;
`;

export const Btn = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.theme.colors.accent};
  border: none;
  outline: 1px solid ${p => p.theme.colors.secondaryStrong};
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentWeak};
  }
`;

export const BtnText = styled.span`
  font-size: 12px;
`;
