import { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const submitHandler = evt => {
    evt.preventDefault();
    if (!query) {
      return;
    }
    setQuery(query.trim().toLowerCase());
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={query}
        onChange={evt => setQuery(evt.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
