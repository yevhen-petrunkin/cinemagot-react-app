import styled from 'styled-components';

export const PageBox = styled.div`
  ${({ theme: { space } }) => `
  padding: ${space[5]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  `}
`;

export const PageInput = styled.input`
  ${({ theme: { space, colors, sizes, borders, radii, shadows } }) => `
  padding-left: ${space[3]}px;
  height: ${sizes[1] * 9}px;
  color: ${colors.secondaryStrong};
  background-color: ${colors.defaultWeak};
  border: ${borders.heroBtnHover};
  border-radius: ${radii[1]}px;
  box-shadow: ${shadows.ordinary};
  transition: border 300ms ease;

  &:hover, &:focus {
    border: ${borders.inputHover};
    outline: none;
  }
  
  `}
`;

export const PageBtn = styled.button`
  ${({ theme: { sizes, colors, borders, radii, shadows } }) => `
  width: ${sizes[1] * 9}px;
  height: ${sizes[1] * 9}px;
  color: ${colors.defaultWeak};
  background-color: ${colors.accent};
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
  }
  
  &:disabled {
    background-color: ${colors.secondaryStrong};
    cursor: not-allowed;

  &:hover,
  &:focus {
    border: ${colors.secondaryStrong};

  &:active {
    color: ${colors.defaultWeak};
  }
  }
  }
  `}
`;
