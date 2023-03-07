import { Btn } from './Button.styled';

function Button({ id, type, text, fontSize, onClick }) {
  return (
    <Btn
      id={id}
      type={type}
      style={{ fontSize: `${fontSize}px` }}
      onClick={onClick}
    >
      {text}
    </Btn>
  );
}

export default Button;
