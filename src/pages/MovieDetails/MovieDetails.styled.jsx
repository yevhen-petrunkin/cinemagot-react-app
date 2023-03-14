import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieBox = styled.div`
  padding-top: 120px;
`;

export const GoBackBtn = styled(Link)`
  margin-bottom: 10px;
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  text-decoration: none;
  color: ${p => p.theme.colors.defaultWeak};
  background-color: ${p => p.theme.colors.secondaryStrong};
  border: 1px solid ${p => p.theme.colors.secondaryStrong};
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.ordinary};
  cursor: pointer;
  transition: color 200ms ease, background-color 200ms ease, border 200ms ease;

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryStrong};
    background-color: ${p => p.theme.colors.accentWeak};
    border: 1px solid ${p => p.theme.colors.accentWeak};
  }
`;

export const ContentBox = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  color: ${p => p.theme.colors.default};
  background-color: ${p => p.theme.colors.primaryStrong};
  box-shadow: ${p => p.theme.shadows.ordinary};
  border-radius: 12px;
`;

export const Poster = styled.img`
  width: 300px;
  height: 460px;
  border-radius: 10px;
  box-shadow: ${p => p.theme.shadows.ordinary};
`;

export const MainCaption = styled.h1`
  margin-bottom: 10px;
  font-size: 28px;
`;

export const Caption = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const Content = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 5px 0;
  font-size: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
`;

export const AdditLink = styled(Link)`
  padding-top: 8px;
  padding-bottom: 8px;
  text-decoration: none;
  color: ${p => p.theme.colors.accentWeak};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
