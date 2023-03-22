import { HeroBtn } from './Button.styled';
import PropTypes from 'prop-types';

export function HeroButton({ id, text, onClick }) {
  return (
    <HeroBtn id={id} type="button" onClick={onClick}>
      {text}
    </HeroBtn>
  );
}

HeroButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
