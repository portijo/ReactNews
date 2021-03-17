import { FC, ReactElement } from 'react';
import { Article } from '../interfaces';
import { ArticleCard } from '.';

interface Props {
  articles: Article[] | undefined;
}

/**
 * Article list container component
 * @param articles article group array from api response
 * @returns React Element
 */
const ArticleList: FC<Props> = ({ articles }): ReactElement => {
  if (!articles) {
    return <div>Empty Result</div>;
  }

  return (
    <div className="article-list">
      {articles.map((article, idx) => (
        <ArticleCard key={`article-cart-${idx}`} article={article} />
      ))}
    </div>
  );
};

export { ArticleList };
