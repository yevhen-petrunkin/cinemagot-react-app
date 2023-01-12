import { useState } from 'react';
import PropTypes from 'prop-types';

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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
