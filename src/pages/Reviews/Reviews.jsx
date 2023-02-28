import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { fetchReviewsById } from 'services';
import { normalizeReviews } from 'services';
import { List } from './Reviews.styled';
import ReviewDetails from 'components/ReviewDetails';
import NotFoundMessage from 'components/NotFoundMessage';
import LoaderComp from 'components/Loader';

function Reviews() {
  const { movieId } = useParams();

  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery(['reviews', movieId], () =>
    fetchReviewsById(movieId).then(data => normalizeReviews(data.results))
  );

  if (isLoading) {
    return <LoaderComp />;
  }

  if (isError) {
    return <NotFoundMessage />;
  }

  return (
    <List>
      {reviews.length ? (
        reviews.map(review => {
          const { id } = review;
          return <ReviewDetails key={id} data={review} />;
        })
      ) : (
        <NotFoundMessage />
      )}
    </List>
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
