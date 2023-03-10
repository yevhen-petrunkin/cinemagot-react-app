import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.min.css';

export const StyledSwiper = styled(Swiper)`
  height: 86vh;
  overflow: visible;
  transition: transform 750ms ease;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;
