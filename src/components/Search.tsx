import { ChangeEvent, FC, ReactElement, SyntheticEvent, useState } from 'react';

interface Props {
  searchTopic: (searchValue: string) => void;
}

/**
 * functional component with a text and submit input
 * @param searchTopic function that searches for topic in API 
 * @returns ReactElement
 */
const Search: FC<Props> = ({ searchTopic }): ReactElement => {
  const [topic, setTopic] = useState<string>('');

  const queryValue = (e: SyntheticEvent): void => {
    e.preventDefault();
    searchTopic(topic);
  };

  /**
   * This function sets text value to state
   * @param e HTML input change event type
   */
  const setTextValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setTopic(e.target.value);
  };

  return (
    <form>
      <label htmlFor="search-input">Search</label>
      <input type="topic" name="search-input" value={topic} onChange={setTextValue} />
      <input type="submit" value="Search News" onClick={queryValue} />
    </form>
  );
};

export default Search;
