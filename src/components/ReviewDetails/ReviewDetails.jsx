import PropTypes from 'prop-types';
import { Review, Author } from './ReviewDetails.styled';

function ReviewDetails({ data }) {
  const { author, content } = data;

  return (
    <Review>
      <Author>Author: {author}</Author>
      <p>{content}</p>
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
