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
import { useQuery } from '@tanstack/react-query';
import { fetchNewsData } from 'services/services';
import { normalizeDateString } from 'services/normalize';
import Container from 'components/Container';
import { LoaderAdjust } from 'components/Loader';
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
    return <div>Oops... Something went wrong!</div>;
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
                <NewsLink href={url}>
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
