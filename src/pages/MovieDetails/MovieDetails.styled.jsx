import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  margin-bottom: 10px;
  padding: 5px 12px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  background-color: #cce2ff;
  border-color: #cce2ff;
  border-radius: 6px;
  cursor: pointer;

  :hover,
  :focus {
    color: white;
    background-color: #4183c4;
    border-color: #4183c4;
  }
`;

export const Poster = styled.img`
  width: 200px;
  height: 300px;
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
`;
