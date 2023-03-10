import styled from 'styled-components';

export const Btn = styled.button`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  font-size: ${p => p.fontSize}px;
  letter-spacing: ${p => p.theme.letterSpacings[2]}px;
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.theme.colors.secondaryStrong};
  border: ${p => p.theme.borders.btn};
  border-radius: ${p => p.theme.radii[1]}px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.btnHover};
  }

  &:active {
    color: ${p => p.theme.colors.accentWeak};
  }

  @media only screen and (max-width: 1199px) {
    letter-spacing: ${p => p.theme.letterSpacings[1]}px;
  }
`;

export const HeroBtn = styled.button`
  padding: 12px 36px;
  font-size: 28px;
  color: ${p => p.theme.colors.default};
  background-color: transparent;
  border: 2px solid ${p => p.theme.colors.default};
  border-radius: 20px;
  box-shadow: ${p => p.theme.shadows.elevated};
  cursor: pointer;
  transition: color 200ms ease, border 200ms ease;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accentLight};
    border: 2px solid ${p => p.theme.colors.accent};
  }

  @media only screen and (max-width: 899px) {
    padding: 12px 36px;
    font-size: 24px;
  }

  @media only screen and (max-width: 639px) {
    padding: 8px 28px;
    font-size: 20px;
  }

  @media only screen and (max-width: 479px) {
    padding: 8px 20px;
    font-size: 16px;
  }

  @media only screen and (max-width: 424px) {
    padding: 8px 20px;
    font-size: 16px;
  }

  @media only screen and (max-width: 375px) {
    padding: 4px 16px;
    font-size: 16px;
  }
`;
