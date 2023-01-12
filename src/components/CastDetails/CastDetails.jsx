import { useState } from 'react';
import { getPictureAddress } from 'services';
import PropTypes from 'prop-types';
import { PhotoPlaceholder } from 'components/Placeholder';

function CastDetails({ data }) {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const { profilePhoto, actorName, charName } = data;
  const photo = getPictureAddress(profilePhoto);
  return (
    <li>
      {!isPhotoLoaded && <PhotoPlaceholder />}
      <img
        src={photo}
        alt={actorName}
        width="100px"
        onLoad={() => setIsPhotoLoaded(true)}
      />
      <p>{actorName}</p>
      <p>Character: {charName}</p>
    </li>
  );
}

export default CastDetails;

CastDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profilePhoto: PropTypes.string,
    actorName: PropTypes.string.isRequired,
    charName: PropTypes.string.isRequired,
  }).isRequired,
};
