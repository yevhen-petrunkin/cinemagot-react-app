import { Btn } from './CloseButton.styled';
import { TfiClose } from 'react-icons/tfi';

function CloseButton({ onClick, top, right, title }) {
  return (
    <Btn
      type="button"
      top={top}
      right={right}
      title={title || 'Close'}
      onClick={onClick}
    >
      <TfiClose style={{ width: '100%', height: '100%' }} />
    </Btn>
  );
}

export default CloseButton;
