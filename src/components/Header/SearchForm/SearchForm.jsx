import { Form, Input } from './SearchForm.styled';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
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
  const { colors } = useTheme();

  const { isMedium, isLower, isHigher } = useMedia();

  const [query, setQuery] = useState('');

  const submitHandler = evt => {
    evt.preventDefault();
    if (!query) {
      return;
    }
    setQuery(query.trim().toLowerCase());
    const queryData = { query, page: 1, galleryType: 'search' };
    dispatch(getMoviesByKeyword(queryData));
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
        <Button id="submit" type="submit" text="Search" fontSize={16} />
      )}
      {(isMedium || isLower) && (
        <IconButton
          type="submit"
          width={36}
          height={36}
          bgcolor={colors.secondaryStrong}
        >
          <TfiSearch style={{ width: '100%', height: '100%' }} />
        </IconButton>
      )}
    </Form>
  );
}

export default SearchForm;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

IconButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bgcolor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
