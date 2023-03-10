import styled from 'styled-components';

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.accentWeak};

  @media only screen and (max-width: 1199px) {
    gap: ${p => p.theme.space[3]}px;
  }

  @media only screen and (max-width: 479px) {
    flex-direction: column;
    gap: ${p => p.theme.space[1] * 6}px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;
