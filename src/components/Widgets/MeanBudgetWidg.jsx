import { Box, Caption, Info } from './Widgets.styled';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countMeanBudget } from 'services/widgetFunc';

export function MeanBudgetWidg() {
  const listData = useSelector(selectUserListObj);
  const meanBudget = countMeanBudget(listData);

  return (
    <Box>
      <Caption>Average Favorites Budget</Caption>
      <Info>{Number(meanBudget).toLocaleString('en-EN')} USD</Info>
    </Box>
  );
}
