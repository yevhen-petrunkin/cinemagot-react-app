import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Box = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space[3]}px;
  height: 100%;


  ${mediaQueries.large} {
    padding: ${space[2]}px; 
  }

  `}
`;

export const ChartBox = styled.div`
  ${({ theme: { sizes, mediaQueries } }) => `
    max-width: ${sizes[1] * 100}px;
    max-height: ${sizes[1] * 100}px;

  ${mediaQueries.medium} {
    max-width: ${sizes[1] * 54}px;
    max-height: ${sizes[1] * 54}px;  
  }

  ${mediaQueries.small} {
    max-width: ${sizes[1] * 100}px;
    max-height: ${sizes[1] * 100}px; 
  }

  ${mediaQueries.lowerSmall} {
    max-width: ${sizes[1] * 65}px;
    max-height: ${sizes[1] * 65}px;   
  }

  ${mediaQueries.tiny} {
    max-width: ${sizes[1] * 36}px;
    max-height: ${sizes[1] * 36}px; 
  }

  `}
`;

export const Caption = styled.h2`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[3]}px;

  ${mediaQueries.medium} {
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[1]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[1]}px;
  }
  
  `}
`;

export const Info = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[6]}px;
  
  ${mediaQueries.medium} {
    font-size: ${fontSizes[4]}px;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.lowerSmall} {
    font-size: ${fontSizes[3]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[2]}px;
  }
  `}
`;

export const RateList = styled.ul`
  ${({ theme: { space } }) => `
  padding: ${space[0]};
  margin: ${space[0]};
  display: flex;
  list-style: none;
  width: 100%;
   
  `}
`;

export const StarItem = styled.li`
  ${({ theme: { colors }, number }) => `
    width: 20%;
    
  &:nth-child(1) {
    color: ${Number(number) >= 50 ? colors.star : colors.defaultStrong};
  }

  &:nth-child(2) {
    color: ${Number(number) >= 100 ? colors.star : colors.defaultStrong};
  }

  &:nth-child(3) {
    color: ${Number(number) >= 200 ? colors.star : colors.defaultStrong};
  }

  &:nth-child(4) {
    color: ${Number(number) >= 500 ? colors.star : colors.defaultStrong};
  }

  &:nth-child(5) {
    color: ${Number(number) >= 900 ? colors.star : colors.defaultStrong};
  }
  `}
`;

export const HeartItem = styled.li`
  ${({ theme: { colors }, number }) => `
    width: 20%;
    
  &:nth-child(1) {
    color: ${Number(number) >= 1 ? colors.alert : colors.defaultStrong};
  }

  &:nth-child(2) {
    color: ${Number(number) >= 3 ? colors.alert : colors.defaultStrong};
  }

  &:nth-child(3) {
    color: ${Number(number) >= 5 ? colors.alert : colors.defaultStrong};
  }

  &:nth-child(4) {
    color: ${Number(number) >= 7 ? colors.alert : colors.defaultStrong};
  }

  &:nth-child(5) {
    color: ${Number(number) >= 9 ? colors.alert : colors.defaultStrong};
  }
  `}
`;

StarItem.propTypes = {
  number: PropTypes.number.isRequired,
};

HeartItem.propTypes = {
  number: PropTypes.number.isRequired,
};
