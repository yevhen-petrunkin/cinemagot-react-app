import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { fetchReviewsById } from 'services';
import { normalizeReviews } from 'services';
import { List } from './Reviews.styled';
import Container from 'components/Container';
import ReviewDetails from 'components/ReviewDetails';
import { messageData } from 'services/sources/messageDataSource';
import { ErrorLoaderAdjust } from 'components/Loader';
import { LoaderAdjust } from 'components/Loader';

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
    return <LoaderAdjust size={100} height={20} />;
  }

  if (isError) {
    return (
      <ErrorLoaderAdjust
        size={100}
        height={20}
        text={messageData.errorMessage}
      />
    );
  }

  return (
    <Container>
      <List>
        {reviews.length ? (
          reviews.map(review => {
            const { id } = review;
            return <ReviewDetails key={id} data={review} />;
          })
        ) : (
          <ErrorLoaderAdjust
            size={100}
            height={20}
            text={messageData.notFoundMessage}
          />
        )}
      </List>
    </Container>
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

LoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

ErrorLoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
