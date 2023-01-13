import { useState } from 'react';
import { getPictureAddress } from 'services';
import PropTypes from 'prop-types';
import { Actor, Photo, Info } from './CastDetails.styled';
import { PhotoPlaceholder } from 'components/Placeholder';

function CastDetails({ data }) {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const { profilePhoto, actorName, charName } = data;
  const photo = getPictureAddress(profilePhoto);
  return (
    <Actor>
      {!isPhotoLoaded && <PhotoPlaceholder />}
      <Photo
        src={photo}
        alt={actorName}
        onLoad={() => setIsPhotoLoaded(true)}
      />
      <Info>{actorName}</Info>
      <Info>Character: {charName}</Info>
    </Actor>
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
