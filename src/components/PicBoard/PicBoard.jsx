import { Backdrop, Content, ContentBox } from './PicBoard.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closePicBoard, clearPictures } from 'redux/redux-slices/modalSlice';

function PicBoard({ children }) {
  const dispatch = useDispatch();
  const picBoardRoot = document.querySelector('#picboard-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        console.log('Close the board please');
        dispatch(closePicBoard());
        dispatch(clearPictures());
      }
    };
    window.addEventListener('keydown', handleKeydown);
  }, [dispatch]);

  const handleClick = () => {
    dispatch(closePicBoard());
    dispatch(clearPictures());
  };

  return createPortal(
    <Backdrop>
      <Content>
        <ContentBox>
          <button onClick={handleClick} type="button">
            Close
          </button>
          {children}
        </ContentBox>
      </Content>
    </Backdrop>,
    picBoardRoot
  );
}

export default PicBoard;
