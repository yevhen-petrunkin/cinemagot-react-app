import { Backdrop, Content } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

function Modal({ children }) {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('Close modal');
      }
    });
  }, []);

  return createPortal(
    <Backdrop>
      <Content>
        <button type="button">Close</button>
        {children}
      </Content>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;
