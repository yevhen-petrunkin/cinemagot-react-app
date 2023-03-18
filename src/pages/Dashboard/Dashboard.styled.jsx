import styled from 'styled-components';

export const DashContainer = styled.div`
  ${({ theme: { space, sizes, mediaQueries } }) => `
  margin: ${space[0]}px auto;
  padding-top: ${space[1] * 30}px;
  display: grid;
  grid-template-columns: minmax(232px, 232px) 1fr;
  
  ${mediaQueries.large} {
    padding-top: ${space[1] * 28}px;
    }

  ${mediaQueries.medium} {
    padding-top: ${space[1] * 28}px;
    }

  ${mediaQueries.small} {
    padding-top: ${space[1] * 18}px;
    }

  ${mediaQueries.tiny} {
    padding-top: ${space[1] * 16}px;
    }`}
`;

export const DashBox = styled.section`
  min-height: 87vh;
  font-size: 20px;
  text-align: center;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.elevated};
`;

export const UserBox = styled.div`
  padding: 20px;
`;

export const UserCaption = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const UserImg = styled.div`
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
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
