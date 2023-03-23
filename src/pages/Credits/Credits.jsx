import { List, ContentBox, Caption } from './Credits.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import CreditDetails from 'components/CreditDetails';
import { messageData } from 'services/sources/messageDataSource';
import { ErrorLoaderAdjust } from 'components/Loader';
import { filterPeopleWithPhotos } from 'services';

function Cast() {
  const location = useLocation();
  const data = location.state?.credits ?? { crew: [], cast: [] };
  const { crew, cast } = filterPeopleWithPhotos(data);

  return (
    <Container>
      <ContentBox>
        <Caption>Crew</Caption>
        <List>
          {crew.length > 0 ? (
            crew.map(person => {
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
          {cast.length > 0 ? (
            cast.map(person => {
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

CreditDetails.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string,
    memberName: PropTypes.string,
    actorName: PropTypes.string,
    charName: PropTypes.string,
    job: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

ErrorLoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
