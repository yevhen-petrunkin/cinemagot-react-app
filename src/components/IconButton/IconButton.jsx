import { IconBtn } from './IconButton.styled';
import PropTypes from 'prop-types';

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
      type={type || 'button'}
      title={title || 'Icon Button'}
      width={width}
      height={height}
      bgcolor={bgcolor}
      onClick={onClick || null}
    >
      {children}
    </IconBtn>
  );
}

export default IconButton;

IconButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bgcolor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
