import styled from 'styled-components';

export const IconBtn = styled.button`
  ${({
    theme: { space, colors, borders, radii, shadows },
    width,
    height,
    bgcolor,
  }) => `
  padding: ${space[2]}px;
  width: ${width}px;
  height: ${height}px;
  color: ${colors.defaultWeak};
  background-color: ${bgcolor};
  border: ${borders.btn};
  border-radius: ${radii[1]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    border: ${borders.btnHover};
  }

  &:active {
    color: ${colors.accentWeak};
  } `}
`;
