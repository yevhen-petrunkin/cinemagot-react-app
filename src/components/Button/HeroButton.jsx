import { HeroBtn } from './Button.styled';

export function HeroButton({ id, text, onClick }) {
  return (
    <HeroBtn id={id} type="button" onClick={onClick}>
      {text}
    </HeroBtn>
  );
}
