import { Person, Info } from './CreditDetails.styled';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import placeholder from 'images/photoholder.jpg';

function CreditDetails({ person, type }) {
  const [personName, setPersonName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    switch (type) {
      case 'crew':
        const { memberName, job } = person;
        setPersonName(memberName);
        setRole(`Position: ${job}`);
        break;
      case 'cast':
        const { actorName, charName } = person;
        setPersonName(actorName);
        setRole(`Character: ${charName}`);
        break;
      default:
        break;
    }
  }, [person, type]);

  const { profilePhoto } = person;

  return (
    <Person>
      <img
        src={profilePhoto || placeholder}
        alt={personName}
        width="100%"
        height="80%"
      />
      <Info>{personName}</Info>
      <Info>{role}</Info>
    </Person>
  );
}

export default CreditDetails;

// CreditDetails.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     profilePhoto: PropTypes.string,
//     actorName: PropTypes.string.isRequired,
//     charName: PropTypes.string.isRequired,
//   }).isRequired,
// };
