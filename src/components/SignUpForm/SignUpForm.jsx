import { Caption, Label, Input, Btn } from './SignUpForm.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/selectors';
import { clearError } from 'redux/redux-slices/authSlice';
import { signUp } from 'redux/redux-operations/firebaseOperations';
import { signUpInputs } from 'services/sources/signUpFormSource';
import { closeModal, closeFooterModal } from 'redux/redux-slices/modalSlice';
import { signUpSchema } from 'services/sources/formValidationSchemaSource';
import { messageData } from 'services/sources/messageDataSource';

import Loader from 'components/Loader';
import { ErrorLoader } from 'components/Loader';

function SignUpForm() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleInput = e => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      await signUpSchema.validate(data, { abortEarly: false });
      dispatch(signUp(data));
      setData({});
      sessionStorage.removeItem('mute');
      setTimeout(() => {
        dispatch(closeModal());
        dispatch(closeFooterModal());
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
      <Caption>Sign Up</Caption>
      {isLoading && <Loader size={100} />}
      {isError && <ErrorLoader size={100} text={messageData.errorMessage} />}
      {!isLoading && !isError && (
        <form onSubmit={handleSignUp}>
          {signUpInputs.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <Label>
                {label}
                <Input
                  id={id}
                  onChange={handleInput}
                  type={type}
                  value={data.id}
                  placeholder={placeholder}
                  required
                  autoComplete="on"
                />
              </Label>
            </div>
          ))}
          <Btn type="submit">Sign Up</Btn>
        </form>
      )}
    </>
  );
}

export default SignUpForm;

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};

ErrorLoader.propTypes = {
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
