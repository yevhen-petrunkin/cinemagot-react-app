import styled from 'styled-components';

export const Box = styled.div`
  ${({ theme: { space } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space[3]}px;
  height: 100%;

  `}
`;

export const ChartBox = styled.div`
  ${({ theme: { sizes } }) => `
  max-width: ${sizes[1] * 75}px;
  max-height: ${sizes[1] * 75}px;

  `}
`;

export const Caption = styled.h2`
  ${({ theme: { space, fontSizes } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[3]}px;

  `}
`;

export const Info = styled.p`
  ${({ theme: { space, fontSizes } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[6]}px;
  
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
