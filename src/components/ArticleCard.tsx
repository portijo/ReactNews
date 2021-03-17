import { FC, ReactElement } from 'react';
import { Article } from '../interfaces';

interface Props {
  article: Article;
}

/**
 * Article card information
 * @param article article object from api response
 * @returns React Element
 */
const ArticleCard: FC<Props> = ({ article }): ReactElement => {
  return <div className="card">
    {article.author}
  </div>;
};

export { ArticleCard };
