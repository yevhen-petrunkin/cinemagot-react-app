import { Box, Caption, ChartBox } from './Widgets.styled';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countMoviesByUserList } from 'services/widgetFunc';
import { mainTheme } from 'services';

Chart.register(...registerables);
Chart.defaults.color = mainTheme.colors.default;

export function TotalByListWidg() {
  const listData = useSelector(selectUserListObj);
  const preparedData = countMoviesByUserList(listData);

  const lists = preparedData.map(list => list.list);
  const numbers = preparedData.map(list => list.total);
  const { accentLight, success, secondaryLight } = mainTheme.colors;
  const colors = [accentLight, secondaryLight, success];

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: lists,
    datasets: [
      {
        data: numbers,
        backgroundColor: colors,
        borderColor: ['transparent'],
        minBarLength: 2,
        borderRadius: 4,
      },
    ],
  };

  return (
    <Box>
      <Caption>My Lists</Caption>
      {preparedData.length > 0 && (
        <ChartBox>
          <Bar redraw={true} options={options} data={data} />
        </ChartBox>
      )}
    </Box>
  );
}
