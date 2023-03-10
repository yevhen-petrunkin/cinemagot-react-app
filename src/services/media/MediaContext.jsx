import { createContext } from 'react';

export const MediaContext = createContext({
  isTiny: false,
  isSmall: false,
  isLowerSmall: false,
  isMedium: false,
  isLarge: false,
  isExtraLarge: true,
  isHuge: true,
  isLower: false,
  isHigher: false,
  isHigherMedium: false,
});
