import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/selectors';
import { logIn } from 'redux/redux-operations/firebaseOperations';
import { closeModal } from 'redux/redux-slices/modalSlice';

function LogInForm() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
    if (!isError && !isLoading) {
      dispatch(closeModal());
    }
  };

  return (
    <>
      <h2>Log In</h2>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Log In</button>
          {isError && (
            <span>Oops... Something went wrong. Please try again!</span>
          )}
        </form>
      )}
    </>
  );
}

export default LogInForm;
