import { AuthMenu } from './AuthNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { openModal } from 'redux/redux-slices/modalSlice';
import { selectModal } from 'redux/selectors';
import Modal from 'components/Modal';
import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';
import Button from 'components/Button';

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
          <Button
            id="signup"
            type="button"
            text="Sign Up"
            fontSize="18"
            onClick={openAuthModal}
          />
        </li>
        <li>
          <Button
            id="login"
            type="button"
            text="Log In"
            fontSize="18"
            onClick={openAuthModal}
          />
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
