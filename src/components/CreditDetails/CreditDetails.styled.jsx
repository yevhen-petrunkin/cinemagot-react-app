import styled from 'styled-components';

export const Person = styled.li`
  width: 100%;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.primaryStrong};
  box-shadow: ${p => p.theme.shadows.elevated};
  overflow: hidden;
`;

export const Info = styled.p`
  margin: 0;
  padding: 4px;
`;
