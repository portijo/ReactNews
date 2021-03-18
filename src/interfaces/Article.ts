import { Source } from '.';

/**
 * Api response property containing article retated information
 *
 * @param author author of the article.
 * @param source article source object.
 * @param content full content of article.
 * @param description abridged version of content.
 * @param publishedAt date the article was published.
 * @param title title of the article.
 * @param url url path to article.
 * @param urlToImage image url of the article.
 */
export interface Article {
  author: string;
  source: Source;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}
