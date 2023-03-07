import { Grid, Cell } from './UserInfo.styled';
import NewsBox from 'components/NewsBox';
import {
  TotalMoviesWidg,
  TotalWatchedWidg,
  TotalRuntimeWidg,
  MeanBudgetWidg,
  MeanPopularityWidg,
  MeanScoreWidg,
  TotalByListWidg,
  FavGenresWidg,
} from 'components/Widgets';

function UserInfo() {
  return (
    <section>
      <Grid>
        <Cell>
          <TotalByListWidg />
        </Cell>
        <Cell>
          <TotalMoviesWidg />
        </Cell>
        <Cell>
          <NewsBox />
        </Cell>
        <Cell>
          <TotalWatchedWidg />
        </Cell>
        <Cell>
          <TotalRuntimeWidg />
        </Cell>
        <Cell>
          <MeanBudgetWidg />
        </Cell>
        <Cell>
          <MeanPopularityWidg />
        </Cell>
        <Cell>
          <MeanScoreWidg />
        </Cell>
        <Cell>
          <FavGenresWidg />
        </Cell>
      </Grid>
    </section>
  );
}

export default UserInfo;
