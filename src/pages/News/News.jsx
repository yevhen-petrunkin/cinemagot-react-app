import { useState, useEffect } from 'react';
import { NewsBox, NewsArticle, NewsLink } from './News.styled';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsData } from 'services/services';

function News() {
  const [newsData, setNewsData] = useState([]);
  const { isLoading, isError, data } = useQuery(['news'], fetchNewsData);

  useEffect(() => {
    if (data) {
      setNewsData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section>
      <h1>Film Industry News</h1>
      <NewsBox>
        {newsData.map(
          ({ author, title, content, publishedAt, url, urlToImage }) => (
            <NewsArticle key={url}>
              <NewsLink href={url}>
                <h2>{title}</h2>
                <img src={urlToImage} alt="title" width="100%" />
                <p>{content}</p>
                <p>
                  <span>{author}</span>
                  <span>{publishedAt}</span>
                </p>
              </NewsLink>
            </NewsArticle>
          )
        )}
      </NewsBox>
    </section>
  );
}

export default News;
