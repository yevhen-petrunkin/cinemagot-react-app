import { Box, Caption, ChartBox } from './Widgets.styled';
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectUserListObj } from 'redux/selectors';
import { countFavoriteGenres } from 'services/widgetFunc';
import { mainTheme } from 'services';

Chart.register(...registerables);
Chart.defaults.color = mainTheme.colors.default;

export function FavGenresWidg() {
  const listData = useSelector(selectUserListObj);
  const preparedData = countFavoriteGenres(listData);

  const genres = preparedData.map(genre => genre.genre);
  const numbers = preparedData.map(genre => genre.number);
  const colors = preparedData.map(genre => genre.color);

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const data = {
    labels: genres,
    datasets: [
      {
        data: numbers,
        backgroundColor: colors,
        borderColor: ['transparent'],
      },
    ],
  };

  return (
    <Box>
      <Caption>Favorite Genres</Caption>
      {preparedData.length > 0 && (
        <ChartBox>
          <Pie redraw={true} options={options} data={data} />
        </ChartBox>
      )}
    </Box>
  );
}
