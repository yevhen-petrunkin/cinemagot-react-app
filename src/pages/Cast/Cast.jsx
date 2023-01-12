import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCreditsById } from 'services';
import { normalizeCredits } from 'services';
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
    <ul>
      {cast.length ? (
        cast.map(person => {
          const { id } = person;
          return <CastDetails key={id} data={person} />;
        })
      ) : (
        <NotFoundMessage />
      )}
    </ul>
  );
}

export default Cast;

CastDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profilePhoto: PropTypes.string,
    actorName: PropTypes.string.isRequired,
    charName: PropTypes.string.isRequired,
  }).isRequired,
};
