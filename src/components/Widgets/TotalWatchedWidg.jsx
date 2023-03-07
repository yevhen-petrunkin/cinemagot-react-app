import { Box, Caption, Info } from './Widgets.styled';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countTotalMoviesInOneList } from 'services/widgetFunc';

export function TotalWatchedWidg() {
  const listData = useSelector(selectUserListObj);
  const totalWatched = countTotalMoviesInOneList(listData, 'seenList');

  return (
    <Box>
      <Caption>Total Movies Watched</Caption>
      <Info>{totalWatched}</Info>
    </Box>
  );
}
