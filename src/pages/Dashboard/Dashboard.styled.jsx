import styled from 'styled-components';

export const DashContainer = styled.div`
  padding-top: 120px;
  display: grid;
  grid-template-columns: minmax(232px, 232px) 1fr;
  // height: 90vh;
`;

export const DashBox = styled.div`
  height: 100%;
  font-size: 20px;
  text-align: center;
  color: ${p => p.theme.colors.defaultWeak};
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
