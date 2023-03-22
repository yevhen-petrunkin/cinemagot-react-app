import { Backdrop, Content, CloseBtn } from './PicBoard.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closePicBoard, clearPictures } from 'redux/redux-slices/modalSlice';
import { TfiClose } from 'react-icons/tfi';

function PicBoard({ children }) {
  const dispatch = useDispatch();
  const picBoardRoot = document.querySelector('#picboard-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(closePicBoard());
        dispatch(clearPictures());
      }
    };
    window.addEventListener('keydown', handleKeydown);
  }, [dispatch]);

  const handleCloseBtnClick = () => {
    dispatch(closePicBoard());
    dispatch(clearPictures());
  };

  return createPortal(
    <Backdrop>
      <Content>
        <CloseBtn
          type="button"
          title="Close"
          top={32}
          right={40}
          onClick={handleCloseBtnClick}
        >
          <TfiClose style={{ width: '100%', height: '100%' }} />
        </CloseBtn>
        {children}
      </Content>
    </Backdrop>,
    picBoardRoot
  );
}

export default PicBoard;
