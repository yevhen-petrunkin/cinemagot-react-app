import styled from 'styled-components';

export const MenuBox = styled.div`
  ${({ theme: { space, colors, fontSizes, mediaQueries } }) => `
  display: flex;
  align-items: center;
  gap: ${space[5]}px;
  font-size: ${fontSizes[3]}px;
  color: ${colors.accentWeak};

 ${mediaQueries.large} {
    gap: ${space[3]}px;
  }

  ${mediaQueries.tiny} {
    flex-direction: column;
    gap: ${space[1] * 6}px;
  } `}
`;

export const UserBox = styled.div`
  ${({ theme: { space } }) => `
  display: flex;
  align-items: center;
  gap: ${space[3]}px;
  `}
`;
