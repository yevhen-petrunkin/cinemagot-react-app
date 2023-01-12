import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'services/services';
import { normalizeCredits } from 'services/normalize';
import CastDetails from 'components/CastDetails/CastDetails';

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
      {cast.map(artist => {
        const { actorName } = artist;
        return <CastDetails key={actorName} data={artist} />;
      })}
    </ul>
  );
}

export default Cast;
