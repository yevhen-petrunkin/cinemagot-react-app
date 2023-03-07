import { Box, Caption, Info } from './Widgets.styled';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countTotalRuntime } from 'services/widgetFunc';

export function TotalRuntimeWidg() {
  const listData = useSelector(selectUserListObj);
  const totalRuntime = countTotalRuntime(listData);

  return (
    <Box>
      <Caption>Time Spent Watching</Caption>
      <Info>{totalRuntime} hrs</Info>
    </Box>
  );
}
