import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { close } from 'redux/modalSlice';

function LogInForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = event => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(close());
      })
      .catch(error => {
        setError(true);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log('After: ', auth);
      })
      .catch(error => {
        // An error happened.
      });
  };

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      <button onClick={handleLogOut} type="button">
        Sign Out
      </button>
    </>
  );
}

export default LogInForm;
