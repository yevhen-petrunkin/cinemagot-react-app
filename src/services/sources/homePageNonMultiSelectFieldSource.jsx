import { languages } from 'services/sources/languagesSource';
import { years } from 'services/sources/yearsSource';

export const selectNonMultiFields = [
  {
    id: 'language',
    label: 'Select original language: ',
    optionsSource: languages,
    objValue: 'language',
    isBackspaceRemovable: true,
    hideSelected: true,
    isSearcheable: true,
  },
  {
    id: 'year',
    label: 'Select year of the movie: ',
    optionsSource: years,
    objValue: 'year',
    isBackspaceRemovable: true,
    hideSelected: true,
    isSearcheable: true,
  },
];
