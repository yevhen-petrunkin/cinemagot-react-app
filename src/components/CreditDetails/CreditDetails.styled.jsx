import styled from 'styled-components';

export const Person = styled.li`
  ${({ theme: { colors, radii, shadows } }) => `
  width: 100%;
  border-radius: ${radii[3]}px;
  background-color: ${colors.primaryStrong};
  box-shadow: ${shadows.elevated};
  overflow: hidden;
  
  `}
`;

export const Info = styled.p`
  ${({ theme: { space } }) => `
  margin: ${space[0]};
  padding: ${space[1]}px;
  
  `}
`;
