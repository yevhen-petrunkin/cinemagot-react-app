import { Backdrop, Content } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/redux-slices/modalSlice';

import CloseButton from 'components/CloseButton';

function Modal({ children }) {
  const dispatch = useDispatch();

  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleKeydown);
  }, [dispatch]);

  return createPortal(
    <Backdrop>
      <Content>
        <CloseButton
          title="Close"
          top={8}
          right={8}
          onClick={() => dispatch(closeModal())}
        />
        {children}
      </Content>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;

CloseButton.propTypes = {
  title: PropTypes.string,
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
