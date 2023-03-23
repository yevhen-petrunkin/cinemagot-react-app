import axios from 'axios';

const BING_BASE = 'https://bing-news-search1.p.rapidapi.com/news';
const BING_KEY = 'b81ea506bamsha8db9f041608be3p1db9e4jsn27df579a154b';

export async function fetchNewsData() {
  const options = {
    method: 'GET',
    url: BING_BASE,
    params: {
      category: 'Entertainment',
      mkt: 'en-US',
      safeSearch: 'Off',
      textFormat: 'Raw',
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': BING_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    },
  };
  const response = await axios.request(options);
  return response.data.value;
}
