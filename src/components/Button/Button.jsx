import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ id, title, type, text, fontSize, onClick }) {
  return (
    <Btn
      id={id}
      title={title || 'Button'}
      type={type || 'button'}
      fontSize={fontSize}
      onClick={onClick || null}
    >
      {text}
    </Btn>
  );
}

export default Button;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};
