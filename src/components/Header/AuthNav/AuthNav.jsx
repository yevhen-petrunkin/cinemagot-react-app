import { AuthMenu, AuthBtn } from './AuthNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { openModal } from 'redux/redux-slices/modalSlice';
import { selectModal } from 'redux/selectors';
import Modal from 'components/Modal';
import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';

function AuthNav() {
  const [formId, setFormId] = useState('');
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModal);

  const openAuthModal = e => {
    setFormId(e.target.id);
    dispatch(openModal());
  };

  return (
    <>
      <AuthMenu>
        <li>
          <AuthBtn id="signup" type="button" onClick={openAuthModal}>
            Sign Up
          </AuthBtn>
        </li>
        <li>
          <AuthBtn id="login" type="button" onClick={openAuthModal}>
            Log In
          </AuthBtn>
        </li>
      </AuthMenu>
      {isModalOpen && (
        <Modal>
          {formId === 'signup' && <SignUpForm />}
          {formId === 'login' && <LogInForm />}
        </Modal>
      )}
    </>
  );
}

export default AuthNav;
