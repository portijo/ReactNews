import { useState } from 'react';
import { Search, ArticleList } from './components';
import { Endpoints } from './enums';
import { ApiResponse } from './interfaces';
import NewsApi from './utils/NewsApi';

function App() {
  const [topicResult, setTopicResult] = useState<ApiResponse>();
  const searchTopic = async (topic: string): Promise<void> => {
    const result: ApiResponse = await NewsApi.get(`/${Endpoints.EVERYTHING}?q=${topic}`).then((res) => res.data);
    setTopicResult(result);
  };
  return (
    <div className="App">
      <Search searchTopic={searchTopic} />
      <ArticleList articles={topicResult?.articles} />
    </div>
  );
}

export default App;
