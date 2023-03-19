import { NewsBox, NewsArticle, NewsLink } from './News.styled';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsData } from 'services/services';
import { normalizeDateString } from 'services/normalize';
import { newsApiQueryString } from 'services/sources/newsApiSearchSource';
import Container from 'components/Container';
import placeholder from 'images/videoholder.jpg';

function News() {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(['news'], () => fetchNewsData());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Oops... Something went wrong!</div>;
  }

  return (
    <section>
      <Container>
        <h1>Film Industry News</h1>
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
                  <h2>{name}</h2>
                  <img
                    src={urlToImage || placeholder}
                    alt="title"
                    width="100%"
                  />
                  <p>{description}</p>
                  <p>
                    <span>{date}</span>
                  </p>
                </NewsLink>
              </NewsArticle>
            );
          })}
        </NewsBox>
      </Container>
    </section>
  );
}

export default News;
