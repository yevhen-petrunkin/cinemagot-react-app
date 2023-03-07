import { Box, Caption, Info } from './Widgets.styled';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countMeanPopularity } from 'services/widgetFunc';

export function MeanPopularityWidg() {
  const listData = useSelector(selectUserListObj);
  const meanPop = countMeanPopularity(listData);

  return (
    <Box>
      <Caption>Average Favorites Popularity</Caption>
      <Info>{meanPop}</Info>
    </Box>
  );
}
