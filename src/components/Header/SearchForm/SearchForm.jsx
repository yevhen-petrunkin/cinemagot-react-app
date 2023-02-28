// import PropTypes from 'prop-types';
import { Form, Input, SubmitBtn } from './SearchForm.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMoviesByKeyword } from 'redux/redux-operations/tmdbOperations';

function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const submitHandler = evt => {
    evt.preventDefault();
    if (!query) {
      return;
    }
    setQuery(query.trim().toLowerCase());
    dispatch(getMoviesByKeyword(query));
    setQuery('');
    navigate('/movies');
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
