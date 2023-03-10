import styled from 'styled-components';

export const IconBtn = styled.button`
  padding: ${p => p.theme.space[2]}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.bgcolor};
  border: ${p => p.theme.borders.btn};
  border-radius: ${p => p.theme.radii[1]}px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  overflow: hidden;
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.btnHover};
  }

  &:active {
    color: ${p => p.theme.colors.accentWeak};
  }
`;
