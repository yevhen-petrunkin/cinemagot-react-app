import { BurgerBox, BurgerBackdrop } from './Burger.styled';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBurger } from 'redux/selectors';
import { toggleBurger } from 'redux/redux-slices/modalSlice';
import Logo from 'components/Logo';
import Navbar from 'components/Header/Navbar';
import UserMenu from 'components/Header/UserMenu/UserMenu';

function Burger() {
  const dispatch = useDispatch();
  const isBurgerOpen = useSelector(selectBurger);
  const burgerRoot = document.querySelector('#burger-root');

  return createPortal(
    <BurgerBackdrop
      active={isBurgerOpen}
      onClick={() => dispatch(toggleBurger())}
    >
      <BurgerBox>
        <Logo />
        <Navbar />
        <UserMenu />
      </BurgerBox>
    </BurgerBackdrop>,
    burgerRoot
  );
}

export default Burger;
