import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListBox = styled.div`
  padding: 20px 40px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 40px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 0;
  display: inline-block;
  text-decoration: none;
  color: ${p => p.theme.colors.default};
  text-shadow: ${p => p.theme.shadows.ordinary};
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MovieBox = styled.div`
  position: relative;
  width: 260px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px black;
  overflow: hidden;
`;

export const MovieName = styled.h3`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  margin: 0;
  width: 228px;
  font-size: 12px;
  text-align: left;
  background-color: ${p => p.theme.colors.secondaryDark};
  border-radius: 4px;
  box-shadow: ${p => p.theme.shadows.ordinary};
`;

export const DeleteBtn = styled.button`
  display: block;
`;
