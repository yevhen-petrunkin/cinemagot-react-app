import styled from 'styled-components';

export const Gallery = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const Picture = styled.li`
  border-radius: 8px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
`;
