import { Backdrop, Content } from './PicBoard.styled';
import { useDispatch } from 'react-redux';
import { closePicBoard } from 'redux/redux-slices/modalSlice';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

function PicBoard({ isPicBoardOpen, children }) {
  const dispatch = useDispatch();
  const picBoardRoot = document.querySelector('#picboard-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        console.log('Close the board please');
        dispatch(closePicBoard());
      }
    };
    window.addEventListener('keydown', handleKeydown);
  }, [dispatch]);

  return createPortal(
    <Backdrop>
      <Content>
        <button onClick={() => dispatch(closePicBoard())} type="button">
          Close
        </button>
        {children}
      </Content>
    </Backdrop>,
    picBoardRoot
  );
}

export default PicBoard;
