import styled from 'styled-components';

export const GalleryBox = styled.div`
  position: relative;
  min-height: 86vh;
  background-color: #000;
  overflow: hidden;
`;

export const HomeCaption = styled.h2`
  margin: 0;
  padding: 8px 0;
  font-size: 28px;
  color: ${p => p.theme.colors.accentLight};
  text-transform: uppercase;
  text-shadow: ${p => p.theme.shadows.ordinary};
`;

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const MenuBox = styled.div`
  position: absolute;
  z-index: 2;
  padding: 20px 32px;
  margin-bottom: 20px;
  width: 29vw;
  min-height: 86vh;
  box-sizing: border-box;
  font-size: 16px;
  color: ${p => p.theme.colors.default};
  text-shadow: ${p => p.theme.shadows.minimum};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.ordinary};
  transform: translateX(${p => (p.isActive ? -29 : 0)}vw);
  opacity: ${p => (p.isActive ? 0 : 1)};
  transition: opacity 700ms ease, transform 700ms ease;
`;

export const MenuItem = styled.li`
  padding-top: 24px;
  padding-bottom: 16px;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const Input = styled.input`
  margin-top: 8px;
  margin-left: 12px;
  display: inline;
  width: 33.5%;
  height: 36px;
  font-size: 16px;
  color: ${p => p.theme.colors.secondaryDark};
  border-radius: 4px;
  outline: none;

  &:hover,
  &focus {
    outline: none;
  }
`;
