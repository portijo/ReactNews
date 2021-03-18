import { Article } from '.';

/**
 * Api response
 *
 * @param articles list of articles
 * @param status API status response
 * @param totalResults The total number of results available for your request.
 */
export interface ApiResponse {
  articles: Array<Article>;
  status: string;
  totalResults: number;
}
