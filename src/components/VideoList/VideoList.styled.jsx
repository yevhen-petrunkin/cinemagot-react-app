import styled from 'styled-components';

export const VideoBox = styled.div`
  margin-bottom: 12px;
  width: 100%;
  height: 36vw;
  border: ${p => p.theme.borders.video};
  border-radius: 12px;
  overflow: hidden;
`;

export const Video = styled.iframe`
  width: 103%;
  height: 103%;
  transform: translate(-2px, -2px);
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 20px;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
`;

export const VidItem = styled.li`
  cursor: pointer;
  transition: color 300ms ease;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentWeak};
  }
`;

export const Label = styled.label`
  display: block;
  cursor: pointer;
`;

export const DateSet = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: right;
`;

export const VideoBtn = styled.button`
  margin: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${p => p.theme.colors.accentWeak};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms ease, text-decoration 300ms ease;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }
`;

//------Visually Hidden------

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + label {
    color: ${p => p.theme.colors.accentWeak};
  }
`;

// ------------------------------
