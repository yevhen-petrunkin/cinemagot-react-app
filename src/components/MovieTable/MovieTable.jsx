import {
  CaptionBox,
  MainCaption,
  Date,
  Tagline,
  RateBox,
  Table,
  TabCategory,
  TabData,
} from './MovieTable.styled';
import { stringifyData } from 'services';
import { normalizeCreditList } from 'services/normalize';
import { StarWidg, HeartWidg } from 'components/Widgets';

function MovieTable({ movie, credits }) {
  const {
    title,
    slogan,
    origTitle,
    date,
    popularity,
    genres,
    budget,
    revenue,
    runtime,
    score,
    voteCount,
  } = movie;

  const genresString = stringifyData(genres);
  const normalizedCredits = normalizeCreditList(credits);
  const budgetString = budget.toString();
  const revenueString = revenue.toString();
  const popularityString = popularity.toString();
  const scoreString = score.toString();
  const voteCountString = voteCount.toString();

  return (
    <>
      <CaptionBox>
        <div>
          {title && (
            <MainCaption>
              {title}
              {date && <Date>({date})</Date>}
            </MainCaption>
          )}
          {slogan && <Tagline>"{slogan}"</Tagline>}
        </div>
        <RateBox>
          <StarWidg number={popularity} />
          <HeartWidg number={score} />
        </RateBox>
      </CaptionBox>

      <Table>
        <tbody>
          {origTitle && (
            <tr>
              <TabCategory>Original Title:</TabCategory>
              <TabData>{origTitle}</TabData>
            </tr>
          )}
          {genres && (
            <tr>
              <TabCategory>Genres:</TabCategory>
              <TabData>{genresString}</TabData>
            </tr>
          )}
          {normalizedCredits &&
            normalizedCredits.map(({ job, memberString }) => (
              <tr key={job}>
                <TabCategory>{job}:</TabCategory>
                <TabData>{memberString}</TabData>
              </tr>
            ))}
          {budgetString && (
            <tr>
              <TabCategory>Budget:</TabCategory>
              <TabData>{budgetString} USD</TabData>
            </tr>
          )}
          {revenueString && (
            <tr>
              <TabCategory>Box Office:</TabCategory>
              <TabData>{revenueString} USD</TabData>
            </tr>
          )}
          {runtime && (
            <tr>
              <TabCategory>Time:</TabCategory>
              <TabData>{runtime} min</TabData>
            </tr>
          )}
          {popularityString && (
            <tr>
              <TabCategory>Current Hype:</TabCategory>
              <TabData>{popularityString}</TabData>
            </tr>
          )}
          {scoreString && (
            <tr>
              <TabCategory>Viewers' Rating:</TabCategory>
              <TabData>{scoreString} out of 10</TabData>
            </tr>
          )}
          {voteCountString && (
            <tr>
              <TabCategory>Total Votes:</TabCategory>
              <TabData>{voteCountString} votes</TabData>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default MovieTable;
