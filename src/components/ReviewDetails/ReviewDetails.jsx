import PropTypes from 'prop-types';

function ReviewDetails({ data }) {
  const { author, content } = data;

  return (
    <li>
      <h5>Author: {author}</h5>
      <p>{content}</p>
    </li>
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
