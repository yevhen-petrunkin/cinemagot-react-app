import { Backdrop, Content } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/redux-slices/modalSlice';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

function Modal({ children }) {
  const dispatch = useDispatch();

  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        console.log('Close the modal please');
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleKeydown);
  }, [dispatch]);

  return createPortal(
    <Backdrop>
      <Content>
        <button onClick={() => dispatch(closeModal())} type="button">
          Close
        </button>
        {children}
      </Content>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;
