import styled from 'styled-components';

export const VideoBox = styled.div`
  width: 40vw;
  height: 36vh;
  border: 4px solid ${p => p.theme.colors.accent};
  border-radius: 12px;
  overflow: hidden;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
  transform: translate(-2px, -2px);
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const VideoBtn = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 20px;
  color: ${p => p.theme.colors.accentWeak};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
