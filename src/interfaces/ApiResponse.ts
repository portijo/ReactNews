interface Source {
  id?: null | string;
  name: string;
}

interface ArticleGroup {
  author: string;
  source: Source;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

/**
 * interface structure of expected API response
 * @param articles list of articles
 * @param status API status response
 * @param totalResults The total number of results available for your request.
 */
export interface ApiResponse {
  articles: Array<ArticleGroup>;
  status: string;
  totalResults: number;
}
