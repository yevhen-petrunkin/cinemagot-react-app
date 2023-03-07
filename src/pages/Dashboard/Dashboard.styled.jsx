import styled from 'styled-components';

export const DashContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(232px, 232px) 1fr;
  height: 90vh;
`;

export const DashBox = styled.div`
  height: 100%;
  font-size: 20px;
  text-align: center;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.elevated};
`;

export const UserBox = styled.div`
  padding: 20px;
`;

export const UserCaption = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const UserImg = styled.div`
  margin-bottom: 20px;
  border-radius: 40px;
  overflow: hidden;
`;

export const UserList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const UserItem = styled.li`
  margin-bottom: 24px;
`;

export const UserBtnSet = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const UserBtn = styled.button`
  padding: 8px 12px;
  font-size: 16px;
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
