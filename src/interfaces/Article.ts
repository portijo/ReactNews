import { Source } from '.';

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
