import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { fetchCreditsById } from 'services';
import { normalizeCredits } from 'services';
import { List } from './Cast.styled';
import CastDetails from 'components/CastDetails';
import NotFoundMessage from 'components/NotFoundMessage';
import LoaderComp from 'components/Loader';

function Cast() {
  const { movieId } = useParams();

  const {
    data: cast,
    isLoading,
    isError,
  } = useQuery(['cast', movieId], () =>
    fetchCreditsById(movieId).then(data => normalizeCredits(data.cast))
  );

  if (isLoading) {
    return <LoaderComp />;
  }

  if (isError) {
    return <NotFoundMessage />;
  }

  return (
    <List>
      {cast.length ? (
        cast.map(person => {
          const { id } = person;
          return <CastDetails key={id} data={person} />;
        })
      ) : (
        <NotFoundMessage />
      )}
    </List>
  );
}

export default Cast;

CastDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string,
    actorName: PropTypes.string.isRequired,
    charName: PropTypes.string.isRequired,
  }).isRequired,
};
