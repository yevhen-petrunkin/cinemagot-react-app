import styled from 'styled-components';

export const BtnSet = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 15%;
`;

export const Btn = styled.button`
  ${({ theme: { space, colors, fontSizes, borders } }) => `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${space[2]}px;
  font-size: ${fontSizes[4]}px;
  color: ${colors.defaultWeak};
  background-color: ${colors.accent};
  border: none;
  outline: ${borders.btn};
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: ${colors.accentWeak};
  }
  `}
`;

export const BtnText = styled.span`
  ${({ theme: { fontSizes } }) => `
  font-size: ${fontSizes[1]}px;
  `}
`;
