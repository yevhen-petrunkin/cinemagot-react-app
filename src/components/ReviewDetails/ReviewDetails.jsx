import PropTypes from 'prop-types';
import { Review, Author, Message } from './ReviewDetails.styled';

import { FaUserCircle } from 'react-icons/fa';

function ReviewDetails({ data }) {
  const { author, content } = data;

  return (
    <Review>
      <Author>
        <FaUserCircle />
        {author}
      </Author>
      <Message>{content}</Message>
    </Review>
  );
}

export default ReviewDetails;

ReviewDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
