import styled from 'styled-components';

export const Review = styled.li`
  margin-bottom: 20px;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.theme.colors.primary};
  border-radius: 12px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  overflow: hidden;
`;

export const Author = styled.p`
  margin: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  background-color: ${p => p.theme.colors.primaryStrong};
`;

export const Message = styled.p`
  margin: 0;
  margin-bottom: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
`;
