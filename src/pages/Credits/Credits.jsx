import { List, ContentBox, Caption } from './Credits.styled';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Container from 'components/Container';
import CreditDetails from 'components/CreditDetails';
import { messageData } from 'services/sources/messageDataSource';
import { ErrorLoaderAdjust } from 'components/Loader';

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
            <ErrorLoaderAdjust
              size={100}
              height={20}
              text={messageData.notFoundMessage}
            />
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
            <ErrorLoaderAdjust
              size={100}
              height={20}
              text={messageData.notFoundMessage}
            />
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
