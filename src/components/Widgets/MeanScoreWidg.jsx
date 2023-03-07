import { Box, Caption, Info } from './Widgets.styled';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countMeanScore } from 'services/widgetFunc';

export function MeanScoreWidg() {
  const listData = useSelector(selectUserListObj);
  const meanScore = countMeanScore(listData);

  return (
    <Box>
      <Caption>Average Favorites Score</Caption>
      <Info>{meanScore} out of 10.00</Info>
    </Box>
  );
}
