import { IconBtn } from './IconButton.styled';

function IconButton({ type, width, height, bgcolor, onClick, children }) {
  return (
    <IconBtn
      type={type}
      width={width}
      height={height}
      bgcolor={bgcolor}
      onClick={onClick}
    >
      {children}
    </IconBtn>
  );
}

export default IconButton;
