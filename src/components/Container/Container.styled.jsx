import styled from 'styled-components';

export const Wrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    padding-top: ${p => p.theme.space[1] * 7}px;
    padding-bottom: ${p => p.theme.space[1] * 7}px;
    padding-left: ${p => p.theme.space[5] * 3}px;
    padding-right: ${p => p.theme.space[5] * 3}px;
  }
  @media only screen and (max-width: 1199px) {
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
    padding-left: ${p => p.theme.space[5] * 2}px;
    padding-right: ${p => p.theme.space[5] * 2}px;
  }
  @media only screen and (max-width: 480px) {
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
  } ;
`;
