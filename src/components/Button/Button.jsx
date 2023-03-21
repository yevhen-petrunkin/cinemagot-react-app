import { Btn } from './Button.styled';

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
