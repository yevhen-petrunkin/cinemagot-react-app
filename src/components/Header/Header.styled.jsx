import styled from 'styled-components';

export const HeaderBox = styled.header`
  padding: 4px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.primaryDark};
  box-sizing: border-box;
  box-shadow: ${p => p.theme.shadows.elevated};
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ImgBox = styled.div`
  width: 80px;
  border-radius: 8px;
  overflow: hidden;
`;
