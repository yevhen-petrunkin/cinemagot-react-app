import { getPictureAddress } from 'services/services';
import PropTypes from 'prop-types';

function CastDetails({ data }) {
  const { profilePhoto, actorName, charName } = data;
  const photo = getPictureAddress(profilePhoto);
  return (
    <li>
      <img src={photo} alt={actorName} width="100px" />
      <p>{actorName}</p>
      <p>Character: {charName}</p>
    </li>
  );
}

export default CastDetails;

CastDetails.propTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.string,
    actorName: PropTypes.string,
    charName: PropTypes.string,
  }).isRequired,
};
