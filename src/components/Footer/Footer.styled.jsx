import styled from 'styled-components';
import heading from 'images/heading.jpg';

export const FooterSection = styled.footer`
  background-image: url(${heading});
  background-size: cover;
  background-position: 0 30%;
  background-repeat: no-repeat;
`;

export const FooterBg = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${p => p.theme.colors.primaryStrong};
  opacity: 0.9;
`;
