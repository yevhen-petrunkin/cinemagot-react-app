import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const VideoBtn = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 20px;
  color: ${p => p.theme.colors.accentLight};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
