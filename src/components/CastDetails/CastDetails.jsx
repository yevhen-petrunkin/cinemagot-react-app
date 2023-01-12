import { getPictureAddress } from 'services/services';

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
