import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, SubmitBtn } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { getMoviesByKeyword } from 'redux/redux-operations/tmdbOperations';

function SearchForm() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const submitHandler = evt => {
    evt.preventDefault();
    if (!query) {
      return;
    }
    setQuery(query.trim().toLowerCase());
    dispatch(getMoviesByKeyword(query));
    setQuery('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="Enter your keyword here"
        value={query}
        onChange={evt => setQuery(evt.target.value)}
      />
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
}

export default SearchForm;

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
