import { Backdrop, Content } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeFooterModal } from 'redux/redux-slices/modalSlice';

import CloseButton from 'components/CloseButton';

export function FooterModal({ children }) {
  const dispatch = useDispatch();

  const footerRoot = document.querySelector('#footer-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(closeFooterModal());
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
          onClick={() => dispatch(closeFooterModal())}
        />
        {children}
      </Content>
    </Backdrop>,
    footerRoot
  );
}

CloseButton.propTypes = {
  title: PropTypes.string,
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
