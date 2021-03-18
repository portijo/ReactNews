import { FC, ReactElement } from 'react';
import { Article } from '../interfaces';
import { ArticleCard } from '.';

interface Props {
  articles: Article[] | [] | undefined;
}

/**
 * Article list container component, holds an array of ArticleCard component.
 * @param articles article group array from api response
 * @returns React Element
 */
const ArticleList: FC<Props> = ({ articles }): ReactElement => {
  if (!articles || articles.length === 0) {
    return <div>Empty...</div>;
  }

  return (
    <div className="article-list">
      {articles.map((article: Article, idx: number) => (
        <ArticleCard key={`article-cart-${idx}`} article={article} />
      ))}
    </div>
  );
};

export { ArticleList };
