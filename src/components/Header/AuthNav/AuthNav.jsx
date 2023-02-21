import { AuthMenu, AuthBtn } from './AuthNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toggle } from 'redux/modalSlice';
import { selectModal } from 'redux/selectors';
import Modal from 'components/Modal';
import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';

function AuthNav() {
  const [formId, setFormId] = useState('');
  const dispatch = useDispatch();
  const toggleState = useSelector(selectModal);

  const toggleModal = e => {
    setFormId(e.target.id);
    dispatch(toggle());
  };

  return (
    <>
      <AuthMenu>
        <li>
          <AuthBtn id="signup" type="button" onClick={toggleModal}>
            Sign Up
          </AuthBtn>
        </li>
        <li>
          <AuthBtn id="login" type="button" onClick={toggleModal}>
            Log In
          </AuthBtn>
        </li>
      </AuthMenu>
      {toggleState && (
        <Modal>
          {formId === 'signup' && <SignUpForm />}
          {formId === 'login' && <LogInForm />}
        </Modal>
      )}
    </>
  );
}

export default AuthNav;
