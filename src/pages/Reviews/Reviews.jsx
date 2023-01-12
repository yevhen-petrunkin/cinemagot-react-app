import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getReviewsById } from 'services';
import { normalizeReviews } from 'services';
import ReviewDetails from 'components/ReviewDetails';
import NotFoundMessage from 'components/NotFoundMessage';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getReviewsById(movieId).then(data =>
      setReviews(normalizeReviews(data.results))
    );
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(review => {
          const { id } = review;
          return <ReviewDetails key={id} data={review} />;
        })
      ) : (
        <NotFoundMessage />
      )}
    </ul>
  );
}

export default Reviews;

ReviewDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
