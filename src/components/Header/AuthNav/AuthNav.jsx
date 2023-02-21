import { AuthMenu, AuthBtn } from './AuthNav.styled';
import { useState } from 'react';
import Modal from 'components/Modal';
import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';

function AuthNav() {
  const [modal, setModal] = useState(false);
  const [formId, setFormId] = useState('');

  const toggleModal = e => {
    setModal(!modal);
    setFormId(e.target.id);
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
      {modal && (
        <Modal>
          {formId === 'signup' && <SignUpForm />}
          {formId === 'login' && <LogInForm />}
        </Modal>
      )}
    </>
  );
}

export default AuthNav;
