import styled from 'styled-components';

export const Box = styled.div`
  height: 90vh;
  overflow-y: auto;
`;

export const Gallery = styled.ul`
  ${({ theme: { space } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${space[1] * 50}px, 1fr));
  gap: ${space[5]}px;
  
  `}
`;

export const Picture = styled.li`
  ${({ theme: { radii } }) => `
  border-radius: ${radii[2]}px;
  overflow: hidden;
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
