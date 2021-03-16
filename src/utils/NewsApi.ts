import axios from 'axios';

const NewsApi = axios.create({
  baseURL: 'https://newsapi.org/v2'
})

NewsApi.defaults.params = {
  apiKey: '18683cf7d24549ce807291bf0ab77f8d',
};
export default NewsApi
