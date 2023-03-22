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
import PropTypes from 'prop-types';
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
              <TabData>
                {Number(budgetString).toLocaleString('en-EN')} USD
              </TabData>
            </tr>
          )}
          {revenueString && (
            <tr>
              <TabCategory>Box Office:</TabCategory>
              <TabData>
                {Number(revenueString).toLocaleString('en-EN')} USD
              </TabData>
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

MovieTable.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    specificId: PropTypes.string,
    title: PropTypes.string,
    origTitle: PropTypes.string,
    slogan: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    adult: PropTypes.bool,
    poster: PropTypes.string,
    video: PropTypes.bool,
    date: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    companies: PropTypes.array,
    popularity: PropTypes.number,
    score: PropTypes.number,
    voteCount: PropTypes.number,
  }).isRequired,
  credits: PropTypes.shape({
    crew: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        profilePhoto: PropTypes.string,
        memberName: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
      })
    ).isRequired,
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        profilePhoto: PropTypes.string,
        actorName: PropTypes.string.isRequired,
        charName: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
};

StarWidg.propTypes = {
  number: PropTypes.number.isRequired,
};

HeartWidg.propTypes = {
  number: PropTypes.number.isRequired,
};
