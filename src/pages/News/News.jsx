import { NewsBox, NewsArticle, NewsLink } from './News.styled';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsData } from 'services/services';
import { normalizeDateString } from 'services/normalize';
import Container from 'components/Container';

function News() {
  const { data: news, isLoading, isError } = useQuery(['news'], fetchNewsData);

  // setInterval(() => {
  //   fetchNewsData();
  //   console.log('Tick');
  // }, 5000);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section>
      <Container>
        <h1>Film Industry News</h1>
        <NewsBox>
          {news.map(
            ({ author, title, content, publishedAt, url, urlToImage }) => {
              const date = normalizeDateString(publishedAt);
              return (
                <NewsArticle key={url}>
                  <NewsLink href={url}>
                    <h2>{title}</h2>
                    <img src={urlToImage} alt="title" width="100%" />
                    <p>{content}</p>
                    <p>
                      <span>{author}</span>
                      <span>{date}</span>
                    </p>
                  </NewsLink>
                </NewsArticle>
              );
            }
          )}
        </NewsBox>
      </Container>
    </section>
  );
}

export default News;
