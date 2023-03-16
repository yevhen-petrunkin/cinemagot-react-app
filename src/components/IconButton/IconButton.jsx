import { IconBtn } from './IconButton.styled';

function IconButton({
  title,
  type,
  width,
  height,
  bgcolor,
  onClick,
  children,
}) {
  return (
    <IconBtn
      type={type}
      title={title || 'Icon Button'}
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
