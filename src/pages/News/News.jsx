import {
  NewsSection,
  Caption,
  NewsBox,
  NewsArticle,
  NewsCaption,
  NewsLink,
  NewsBody,
  NewsDate,
} from './News.styled';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsData, normalizeDateString } from 'services';
import { messageData } from 'services/sources/messageDataSource';
import Container from 'components/Container';
import { LoaderAdjust } from 'components/Loader';
import { ErrorLoaderAdjust } from 'components/Loader';
import placeholder from 'images/videoholder.jpg';

function News() {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(['news'], () => fetchNewsData());

  if (isLoading) {
    return <LoaderAdjust size={100} height={100} />;
  }

  if (isError) {
    return (
      <ErrorLoaderAdjust
        size={100}
        height={100}
        text={messageData.errorMessage}
      />
    );
  }

  return (
    <NewsSection>
      <Container>
        <Caption>News From Entertainment Industry</Caption>
        <NewsBox>
          {news.map(({ name, description, datePublished, url, image }) => {
            const date = normalizeDateString(datePublished);
            let urlToImage = null;
            if (image) {
              urlToImage = image.thumbnail.contentUrl;
            }
            return (
              <NewsArticle key={url}>
                <NewsLink href={url} target="_blank" rel="noopener">
                  <NewsCaption>{name}</NewsCaption>
                  <img
                    src={urlToImage || placeholder}
                    alt="title"
                    width="100%"
                  />
                  <NewsBody>{description}... (Click to read)</NewsBody>
                  <NewsDate>{date}</NewsDate>
                </NewsLink>
              </NewsArticle>
            );
          })}
        </NewsBox>
      </Container>
    </NewsSection>
  );
}

export default News;

LoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

ErrorLoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
