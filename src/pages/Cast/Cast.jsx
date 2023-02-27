import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCreditsById } from 'services';
import { normalizeCredits } from 'services';
import { List } from './Cast.styled';
import CastDetails from 'components/CastDetails';
import NotFoundMessage from 'components/NotFoundMessage';

function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getCreditsById(movieId).then(data => setCast(normalizeCredits(data.cast)));
  }, [movieId]);

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
