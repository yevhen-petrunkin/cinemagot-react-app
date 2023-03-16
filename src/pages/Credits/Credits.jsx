import { List, ContentBox, Caption } from './Credits.styled';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Container from 'components/Container';
import CreditDetails from 'components/CreditDetails';
import NotFoundMessage from 'components/NotFoundMessage';

function Cast() {
  const location = useLocation();
  const data = location.state?.credits ?? { crew: [], cast: [] };

  return (
    <Container>
      <ContentBox>
        <Caption>Crew</Caption>
        <List>
          {data.crew.length > 0 ? (
            data.crew.map(person => {
              const { id } = person;
              return <CreditDetails key={id} person={person} type="crew" />;
            })
          ) : (
            <NotFoundMessage />
          )}
        </List>
        <Caption>Cast</Caption>
        <List>
          {data.cast.length > 0 ? (
            data.cast.map(person => {
              const { id } = person;
              return <CreditDetails key={id} person={person} type="cast" />;
            })
          ) : (
            <NotFoundMessage />
          )}
        </List>
      </ContentBox>
    </Container>
  );
}

export default Cast;

// CreditDetails.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     profilePhoto: PropTypes.string,
//     actorName: PropTypes.string.isRequired,
//     charName: PropTypes.string.isRequired,
//   }).isRequired,
// };
