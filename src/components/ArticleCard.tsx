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
  return (
    <div className="card">
      <div>
        <div className="card-image">
          <img src={article.urlToImage} alt="article" />
        </div>
        <div className="card-title">{article.title}</div>
        {/* <div className="card-description">{article.description}</div> */}
      </div>

      <div>
        <div className="card-link">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            go to article
          </a>
        </div>
        <div className="card-meta">
          <div>{article.author}</div>
          <div>{article.publishedAt.split('T')[0]}</div>
          <div>{article.source.name || 'source unknown'}</div>
        </div>
      </div>
    </div>
  );
};

export { ArticleCard };
