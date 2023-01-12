import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/services';
import { normalizeReviews } from 'services/normalize';
import ReviewDetails from 'components/ReviewDetails/ReviewDetails';

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
      {reviews.map(review => {
        const { author } = review;
        return <ReviewDetails key={author} data={review} />;
      })}
    </ul>
  );
}

export default Reviews;
