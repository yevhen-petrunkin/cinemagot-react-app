import { colorThemeAlternative } from './colorThemeAlternative';
import { createGlobalStyle } from 'styled-components';

const colors = colorThemeAlternative;

const breakpoints = [
  '479px',
  '639px',
  '767px',
  '991px',
  '1199px',
  '1439px',
  '1440px',
];

export const alternativeTheme = {
  space: [0, 4, 8, 12, 16, 20],
  colors,
  fontSizes: [8, 12, 16, 20, 24, 28, 32],
  fontWeights: [400, 700, 900],
  lineHeights: [1.2, 1.3, 1.4, 1.5],
  letterSpacings: [1.2, 1.3, 1.4, 1.5, 2],
  sizes: [0, 4, 8, 12, 16, 20],
  borders: {
    input: `2px solid ${colors.secondaryStrong}`,
    inputHover: `2px solid ${colors.accentWeak}`,
    btn: `1px solid ${colors.secondaryStrong}`,
    btnHover: `1px solid ${colors.accentWeak}`,
    heroBtn: `2px solid ${colors.defaultWeak}`,
    heroBtnHover: `2px solid ${colors.accent}`,
    heroBtnSmall: `1px solid ${colors.defaultWeak}`,
    heroBtnSmallHover: `1px solid ${colors.accent}`,
    starHeartWidg: `2px solid ${colors.defaultStrong}`,
    video: `4px solid ${colors.accent}`,
  },
  radii: [0, 4, 8, 12, 16, 20],
  zIndices: [0, 1, 2, 3, 4, 5],
  shadows: {
    minimum:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    ordinary:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    elevated:
      '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
    blurred:
      '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    textOrdinary: `1px 1px 1px ${colors.defaultStrong}`,
    textCaption: `1px 1px 10px ${colors.defaultStrong}`,
  },
  breakpoints,
  mediaQueries: {
    tiny: `@media screen and (max-width: ${breakpoints[0]})`,
    lowerSmall: `@media screen and (max-width: ${breakpoints[1]})`,
    small: `@media screen and (max-width: ${breakpoints[2]})`,
    medium: `@media screen and (max-width: ${breakpoints[3]})`,
    large: `@media screen and (max-width: ${breakpoints[4]})`,
    extraLarge: `@media screen and (max-width: ${breakpoints[5]})`,
    huge: `@media screen and (min-width: ${breakpoints[6]})`,
  },
};

export const AlternativeGlobalStyles = createGlobalStyle`
    body {
      background-color: ${colors.primaryWeak};
    }
`;
