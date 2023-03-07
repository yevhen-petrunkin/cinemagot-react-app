// import PropTypes from 'prop-types';
import { Form, Input } from './SearchForm.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMoviesByKeyword } from 'redux/redux-operations/tmdbOperations';
import Button from 'components/Button';

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
      <Button
        id="submit"
        type="submit"
        text="Search"
        fontSize="18"
        onClick={() => {
          return;
        }}
      />
    </Form>
  );
}

export default SearchForm;

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
