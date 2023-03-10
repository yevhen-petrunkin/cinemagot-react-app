// import PropTypes from 'prop-types';
import { Form, Input } from './SearchForm.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMoviesByKeyword } from 'redux/redux-operations/tmdbOperations';
import { useMedia } from 'services/media/useMedia';
import IconButton from 'components/IconButton/IconButton';
import Button from 'components/Button';
import { TfiSearch } from 'react-icons/tfi';

function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMedium, isLower, isHigher } = useMedia();

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
        placeholder="Enter keyword"
        value={query}
        onChange={evt => setQuery(evt.target.value)}
      />
      {isHigher && (
        <Button
          id="submit"
          type="submit"
          text="Search"
          fontSize={16}
          onClick={() => {
            return;
          }}
        />
      )}
      {(isMedium || isLower) && (
        <IconButton
          type="submit"
          width={36}
          height={36}
          bgcolor="#4d4352"
          onClick={() => {
            return;
          }}
        >
          <TfiSearch style={{ width: '100%', height: '100%' }} />
        </IconButton>
      )}
    </Form>
  );
}

export default SearchForm;

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
