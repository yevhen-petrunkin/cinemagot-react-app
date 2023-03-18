import styled from 'styled-components';

export const List = styled.span`
  ${({ theme: { space } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  list-style: none;
  `}
`;
