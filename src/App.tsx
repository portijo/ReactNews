import Search from './components/Search';
import { Endpoints } from './enums/Endpoints';
import NewsApi from './utils/NewsApi';

import './App.css';
import { ApiResponse } from './interfaces/ApiResponse';

function App() {
  const searchTopic = async (topic: string): Promise<void> => {
    const result: Promise<ApiResponse> = await NewsApi.get(`/${Endpoints.EVERYTHING}?q=${topic}`).then(
      (res) => res.data
    );
    console.log(result);
  };
  return (
    <div className="App">
      <Search searchTopic={searchTopic} />
    </div>
  );
}

export default App;
