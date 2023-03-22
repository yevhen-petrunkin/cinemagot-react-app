import { Caption, Label, Input, Btn } from './LogInForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/selectors';
import { clearError } from 'redux/redux-slices/authSlice';
import { logIn } from 'redux/redux-operations/firebaseOperations';
import { closeModal } from 'redux/redux-slices/modalSlice';
import { loginSchema } from 'services/sources/formValidationSchemaSource';
import { messageData } from 'services/sources/messageDataSource';

import Loader from 'components/Loader';
import { ErrorLoader } from 'components/Loader';

function LogInForm() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      dispatch(logIn({ email, password }));
      setEmail('');
      setPassword('');
      sessionStorage.removeItem('mute');
      setTimeout(() => {
        dispatch(closeModal());
        if (!isError) {
          dispatch(clearError());
        }
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Caption>Log In</Caption>
      {isLoading && <Loader size={100} />}
      {isError && <ErrorLoader size={100} text={messageData.errorMessage} />}
      {!isLoading && !isError && (
        <form onSubmit={handleLogin}>
          <Label>
            Email:
            <Input
              type="email"
              value={email}
              placeholder="Enter your email"
              required
              autoComplete="on"
              onChange={e => setEmail(e.target.value.trim())}
            />
          </Label>
          <Label>
            Password:
            <Input
              type="password"
              value={password}
              placeholder="Enter your password"
              required
              autoComplete="on"
              onChange={e => setPassword(e.target.value.trim())}
            />
          </Label>
          <Btn type="submit" disabled={isLoading}>
            Log In
          </Btn>
        </form>
      )}
    </>
  );
}

export default LogInForm;
