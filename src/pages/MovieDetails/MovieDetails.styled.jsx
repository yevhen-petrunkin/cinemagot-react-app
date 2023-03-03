import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  margin-bottom: 10px;
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  text-decoration: none;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.secondaryDark};
  border: 1px solid ${p => p.theme.colors.secondaryDark};
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  cursor: pointer;
  transition: color 200ms ease, background-color 200ms ease, border 200ms ease;

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryDark};
    background-color: ${p => p.theme.colors.accentLight};
    border: 1px solid ${p => p.theme.colors.accentLight};
  }
`;

export const Poster = styled.img`
  width: 300px;
  height: 460px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px black;
`;

export const MovieCaption = styled.h1`
  margin-bottom: 10px;
  font-size: 28px;
`;

export const OverviewCaption = styled.h2`
  margin-bottom: 10px;
  font-size: 26px;
`;

export const GenresCaption = styled.h3`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const AdditCaption = styled.h4`
  margin-bottom: 10px;
  font-size: 22px;
`;

export const TextContent = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 5px 0;
  font-size: 22px;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
`;

export const AdditLink = styled(Link)`
  padding: 10px 0;
  text-decoration: none;
`;
