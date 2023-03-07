import { Box, Caption, Info } from './Widgets.styled';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countAllMoviesInUserLists } from 'services/widgetFunc';

export function TotalMoviesWidg() {
  const listData = useSelector(selectUserListObj);
  const moviesTotal = countAllMoviesInUserLists(listData);

  return (
    <Box>
      <Caption>Total Movies</Caption>
      <Info>{moviesTotal}</Info>
    </Box>
  );
}
